/* Symponia first-party analytics — no cookies, no IPs.
   Writes to site_hits in the Symponia Supabase project (insert-only anon policy).
   Counts two things for every visitor, whatever they chose in the cookie banner:
   page views, and clicks on the App Store button (window.__syHit, called from the
   inline snippet in the page head). */
(function(){try{
if(/bot|crawl|spider|lighthouse/i.test(navigator.userAgent))return;
var self=location.hostname.replace(/^www\./,'');
if(self!=='symponia.io')return;
var K='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyd3ZqZXpwbWV4c2V3b2ljb216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjA5MzcsImV4cCI6MjA4OTA5NjkzN30.Klggve-X_nscWB4Z1ld9QSqKmjzjvuyqxO06OyFi8Mg';
/* A visitor id is kept on the device only when analytics is allowed (consent given, or
   not required where the visitor is). Otherwise each hit gets a throwaway id. */
function vid(){
 var ok=!window.__syConsent||window.__syConsent.allowed;
 var v=ok?localStorage.getItem('yd-vid'):null;
 if(!v){v=Math.random().toString(36).slice(2)+Date.now().toString(36);if(ok)localStorage.setItem('yd-vid',v);}
 return v;
}
function send(row){
 row.site=self;row.path=location.pathname.slice(0,120);row.device=innerWidth<820?'mobile':'desktop';row.visitor=vid().slice(0,40);
 fetch('https://jrwvjezpmexsewoicomz.supabase.co/rest/v1/site_hits',{method:'POST',keepalive:true,
  headers:{apikey:K,Authorization:'Bearer '+K,'content-type':'application/json',Prefer:'return=minimal'},
  body:JSON.stringify(row)});
}
window.__syHit=function(event,detail){try{send({event:String(event).slice(0,40),ref:String(detail||'').slice(0,80)});}catch(e){}};
var q=new URLSearchParams(location.search).get('ref');
var host='direct';
try{
 if(q)host=q+' (link tag)';
 else if(document.referrer){host=new URL(document.referrer).hostname.replace(/^www\./,'');
  if(host===self)return;}
}catch(e){}
send({ref:host.slice(0,80)});
}catch(e){}})();
