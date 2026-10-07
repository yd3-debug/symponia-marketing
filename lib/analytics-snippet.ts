// The inline analytics bootstrap, injected into <head> by app/layout.tsx.
//
// It runs before React, so it is plain ES5 in a string. Three jobs:
//
// 1. CONSENT. Visitors in Europe (EEA, UK, Switzerland; judged by timezone,
//    which needs no network call) are asked first, and Google's script is not
//    even requested until they accept. Everyone else is measured without a
//    prompt. The answer lives in localStorage under 'sy-consent' and can be
//    changed from the "Cookie settings" link in every footer.
//
// 2. LOADING. gtag.js is ~170 KB and nothing above the fold needs it, so when
//    it is allowed it loads on first interaction or 1.5s after load, whichever
//    comes first.
//
// 3. THE ONE EVENT THAT MATTERS. Every link to the App Store fires
//    'app_store_click' with where on the page it was. It is the site's only
//    conversion, and is marked as a key event in GA4. It is also counted
//    without cookies by public/yd-beacon.js, so the number survives a visitor
//    declining analytics.
//
// No backslashes below: this is a template literal, which would eat them.
export const GA_ID = 'G-VFM6HGRNEN';

export const ANALYTICS_SNIPPET = `window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
(function(){
var ID='${GA_ID}',KEY='sy-consent',choice=null,tz='';
try{choice=localStorage.getItem(KEY);}catch(e){}
if(choice!=='granted'&&choice!=='denied')choice=null;
try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';}catch(e){}
var EU_EXTRA=['Atlantic/Reykjavik','Atlantic/Canary','Atlantic/Madeira','Atlantic/Azores','Atlantic/Faroe','Arctic/Longyearbyen'];
var needed=!tz||tz.indexOf('Europe/')===0||EU_EXTRA.indexOf(tz)>-1;
var allowed=choice==='granted'||(!needed&&choice!=='denied');
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:allowed?'granted':'denied'});
gtag('js',new Date());
gtag('config',ID);
var loaded=false;
function load(){if(loaded)return;loaded=true;var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(s);}
function lazy(){['pointerdown','keydown','touchstart','scroll'].forEach(function(e){addEventListener(e,load,{once:true,passive:true});});
if(document.readyState==='complete'){setTimeout(load,1500);}else{addEventListener('load',function(){setTimeout(load,1500);});}}
if(allowed)lazy();
window.__syConsent={needed:needed,choice:choice,allowed:allowed,set:function(c){
try{localStorage.setItem(KEY,c);}catch(e){}
this.choice=c;this.allowed=c==='granted';
gtag('consent','update',{analytics_storage:c});
if(c==='granted'){load();return;}
var root=location.hostname.split('.').slice(-2).join('.');
document.cookie.split(';').forEach(function(k){var n=k.split('=')[0].trim();if(n.indexOf('_ga')!==0)return;
['',';domain='+root,';domain=.'+root].forEach(function(d){document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'+d;});});
try{localStorage.removeItem('yd-vid');}catch(e){}
}};
addEventListener('click',function(e){
var a=e.target&&e.target.closest&&e.target.closest('a[href*="apps.apple.com"]');if(!a)return;
var where=a.closest('.sticky')?'sticky_mobile':a.closest('.cta-block')?'article_cta':a.closest('#start')?'closing_cta':a.closest('.hero')?'hero':a.closest('nav,.nav')?'nav':a.closest('footer')?'footer':'body';
gtag('event','app_store_click',{link_location:where,page_language:document.documentElement.lang||'en'});
if(window.__syHit)window.__syHit('app_store_click',where);
},true);
})();`;
