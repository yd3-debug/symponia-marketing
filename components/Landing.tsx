import { getDict, LOCALES, LOCALE_NAMES, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
import { LangSync } from '@/components/LangSync';

const APP_STORE_URL = 'https://apps.apple.com/app/symponia/id6760951504';

function Badge({ top, bottom }: { top: string; bottom: string }) {
  return (
    <a className="badge" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`${top} ${bottom}`}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span><small>{top}</small><b>{bottom}</b></span>
    </a>
  );
}

function hrefFor(locale: Locale) {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
}

export default function Landing({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const base = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

  return (
    <main className="sy">
      <LangSync locale={locale} />
      <style>{CSS}</style>

      <nav className="nav">
        <div className="w nav-in">
          <a className="logo" href={hrefFor(locale)}>Symponia</a>
          <div className="nav-links">
            <a href={`${base}#rel`}>{t.nav.rel}</a>
            <a href={`${base}#how`}>{t.nav.method}</a>
            <a href={`${base}#mem`}>{t.nav.memory}</a>
            <a href={`${base}/about`}>{t.nav.about}</a>
            <a href={`${base}#faq`}>{t.nav.faq}</a>
          </div>
          <div className="nav-right">
            <div className="lang">
              <button className="lang-btn" aria-haspopup="true">{LOCALE_NAMES[locale]} <span aria-hidden="true">▾</span></button>
              <ul className="lang-menu">
                {LOCALES.map(l => (
                  <li key={l}><a href={hrefFor(l)} hrefLang={l} aria-current={l === locale ? 'true' : undefined}>{LOCALE_NAMES[l]}</a></li>
                ))}
              </ul>
            </div>
            <Badge top={t.shell.badge.top} bottom={t.shell.badge.bottom} />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="w hero-in">
          <div>
            <p className="k">{t.hero.eyebrow}</p>
            <h1>{t.hero.l1}<br /><em>{t.hero.l2}</em></h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta">
              <Badge top={t.shell.badge.top} bottom={t.shell.badge.bottom} />
              <a className="ghost" href={`${base}#how`}>{t.hero.cta}</a>
            </div>
            <p className="strip"><b>[ social proof ]</b> {t.hero.proof}</p>
          </div>
          <div className="hero-shot">
            <img src="/device/home.png" width={620} height={1283} alt="Symponia daily reflection" />
          </div>
        </div>
      </header>

      {/* RECOGNITION */}
      <section className="sec">
        <div className="w">
          <p className="k">{t.recog.k}</p>
          <h2>{t.recog.h2}</h2>
          <div className="grid">
            {t.recog.items.map((r, i) => <blockquote key={i} className="rcard">{r}</blockquote>)}
          </div>
        </div>
      </section>

      {/* MECHANISM / RELATIONSHIPS */}
      <section className="sec dark" id="rel">
        <div className="w">
          <p className="k">{t.mech.k}</p>
          <h2>{t.mech.h2}</h2>
          <p className="lead">{t.mech.lead}</p>
          <p className="stat">{t.mech.stat}</p>
          <p className="lead note">{t.mech.note}</p>
        </div>
      </section>

      {/* METHOD */}
      <section className="sec" id="how">
        <div className="w">
          <div className="split">
            <div className="shot"><img src="/device/animals.png" width={620} height={1283} alt="Choose your seven animals" loading="lazy" /></div>
            <div>
              <p className="k">{t.seven.k}</p>
              <h2>{t.seven.h2}</h2>
              <p className="lead">{t.seven.lead}</p>
              <p className="lead">{t.seven.lead2}</p>
            </div>
          </div>
          <div className="split rev">
            <div className="shot"><img src="/device/attune.png" width={620} height={1283} alt="The attuning questions" loading="lazy" /></div>
            <div>
              <p className="k">{t.attune.k}</p>
              <h2>{t.attune.h2}</h2>
              <p className="lead">{t.attune.lead}</p>
            </div>
          </div>
          <p className="k mt">{t.modes.k}</p>
          <div className="grid g3">
            {t.modes.items.map((m, i) => (
              <div key={i} className="mcard"><h3>{m.t}</h3><p>{m.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* IT ANSWERS BACK */}
      <section className="sec ink">
        <div className="w">
          <p className="k">{t.answer.k}</p>
          <h2>{t.answer.h2}</h2>
          <p className="lead">{t.answer.lead}</p>
          <div className="chat">
            {t.answer.chat.map((c, i) => <p key={i} className={`bub ${c.who}`}>{c.t}</p>)}
          </div>
        </div>
      </section>

      {/* ANY LANGUAGE */}
      <section className="sec">
        <div className="w">
          <p className="k">{t.langs.k}</p>
          <h2>{t.langs.h2}</h2>
          <p className="lead">{t.langs.lead}</p>
          <ul className="chips">
            {LOCALES.map(l => <li key={l}><a href={hrefFor(l)} hrefLang={l}>{LOCALE_NAMES[l]}</a></li>)}
          </ul>
        </div>
      </section>

      {/* MEMORY */}
      <section className="sec dark" id="mem">
        <div className="w">
          <p className="k">{t.mem.k}</p>
          <h2>{t.mem.h2}</h2>
          <p className="lead">{t.mem.lead}</p>
          <div className="grid g4">
            {t.mem.items.map((m, i) => (
              <div key={i} className="memcard"><h4>{m.t}</h4><p>{m.d}</p></div>
            ))}
          </div>
          <p className="pill">{t.mem.pill}</p>
        </div>
      </section>

      {/* LIMITS */}
      <section className="sec limits">
        <div className="w">
          <p className="k">{t.limits.k}</p>
          <h2>{t.limits.h2}</h2>
          <p className="lead">{t.limits.lead}</p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="sec founder" id="founder">
        <div className="w narrow">
          <p className="k">{t.founder.k}</p>
          <h2>{t.founder.h2}</h2>
          <p className="lead">{t.founder.lead}</p>
          <blockquote className="fquote">{t.founder.quote}</blockquote>
          <p className="lead">{t.founder.lead2}</p>
          <p className="fcta">
            <a href={`${base}/about`}>{t.founder.cta} &rarr;</a>
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="sec ink center">
        <div className="w">
          <p className="k">{t.price.k}</p>
          <div className="big">£12.99</div>
          <p className="lead">{t.price.lead}</p>
          <div className="cta center-cta"><Badge top={t.shell.badge.top} bottom={t.shell.badge.bottom} /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="w narrow">
          <p className="k">{t.faq.k}</p>
          <h2>{t.faq.h2}</h2>
          {t.faq.items.map((f, i) => (
            <details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </section>

      <footer className="foot">
        <div className="w">
          <span>© {new Date().getFullYear()} {t.shell.footer.rights}</span>
          <span className="foot-links">
            <a href={`${base}/about`}>{t.nav.about}</a>
            <a href={`${base}/credits`}>{t.shell.footer.credits}</a>
            <a href={`${base}/privacy`}>{t.shell.footer.privacy}</a>
            <a href={`${base}/terms`}>{t.shell.footer.terms}</a>
            <a href={`${base}/refunds`}>{t.shell.footer.refunds}</a>
            <a href={`${base}/eula`}>{t.shell.footer.eula}</a>
            <a href="mailto:hello@symponia.io">hello@symponia.io</a>
          </span>
        </div>
      </footer>

      <div className="sticky"><Badge top={t.shell.badge.top} bottom={t.shell.badge.bottom} /></div>
    </main>
  );
}

const CSS = `
.sy{--ink:#0D0B14;--ink2:#151223;--cream:#F5F2E8;--paper:#FFFDF7;--teal:#12A8B8;--vio:#7E5BE0;--dim:#5E5773;
  background:var(--cream);color:var(--ink);
  font:400 17px/1.7 var(--font-inter),'Inter',ui-sans-serif,-apple-system,system-ui;-webkit-font-smoothing:antialiased}
.sy *{box-sizing:border-box}
.sy h1,.sy h2,.sy h3{font-family:var(--font-cormorant),'Cormorant Garamond',Georgia,serif;font-weight:600;letter-spacing:-.015em;line-height:1.08;margin:0}
.sy h1{font-size:clamp(2.35rem,6.2vw,4.7rem)}
.sy h2{font-size:clamp(1.95rem,4.4vw,3.2rem);margin:14px 0 18px}
.sy h3{font-size:1.45rem;margin-bottom:8px}
.sy p{margin:0}
.sy .w{max-width:1160px;margin:0 auto;padding:0 22px}
.sy .w.narrow{max-width:780px}
.sy .k{font:700 11px/1 ui-sans-serif;letter-spacing:.22em;text-transform:uppercase;color:var(--teal)}
.sy .k.mt{margin-top:56px}
.sy .lead{font-size:clamp(1.02rem,2vw,1.24rem);color:var(--dim);max-width:60ch;line-height:1.7;margin-top:16px}
.sy .sec{padding:clamp(58px,8vw,110px) 0}
.sy .dark{background:var(--ink2);color:#fff}
.sy .ink{background:var(--ink);color:#fff}
.sy .dark .lead,.sy .ink .lead{color:#C6BFDA}
.sy .limits{background:#EAE4D3}
.sy .center{text-align:center}
.sy .center .lead{margin-left:auto;margin-right:auto}

/* nav */
.sy .nav{position:sticky;top:0;z-index:60;background:rgba(13,11,20,.94);backdrop-filter:blur(18px)}
.sy .nav-in{display:flex;align-items:center;justify-content:space-between;height:66px;gap:16px}
.sy .logo{font-family:var(--font-cormorant),Georgia,serif;font-size:1.4rem;font-weight:600;letter-spacing:.06em;color:#fff;text-decoration:none}
.sy .nav-links{display:flex;gap:22px}
.sy .nav-links a{font:600 12px/1 ui-sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#B6AECD;text-decoration:none}
.sy .nav-right{display:flex;align-items:center;gap:12px}
.sy .lang{position:relative}
.sy .lang-btn{background:none;border:1px solid rgba(255,255,255,.22);color:#D9D3E8;border-radius:9px;padding:8px 11px;font:600 12px/1 ui-sans-serif;cursor:pointer}
.sy .lang-menu{position:absolute;right:0;top:calc(100% + 8px);background:#fff;border-radius:12px;padding:6px;list-style:none;margin:0;
  box-shadow:0 18px 40px rgba(10,6,30,.35);display:none;min-width:150px;z-index:70}
.sy .lang:hover .lang-menu,.sy .lang:focus-within .lang-menu{display:block}
.sy .lang-menu a{display:block;padding:9px 12px;border-radius:8px;color:#2A2440;text-decoration:none;font:500 14px/1 ui-sans-serif}
.sy .lang-menu a:hover{background:#F1EEF9}

/* badge */
.sy .badge{display:inline-flex;align-items:center;gap:9px;background:#fff;color:#0D0B14;border-radius:12px;padding:9px 15px;text-decoration:none;flex-shrink:0}
.sy .badge svg path{fill:#0D0B14}
.sy .badge small{display:block;font:500 9px/1.2 ui-sans-serif;opacity:.7}
.sy .badge b{display:block;font:700 15px/1.15 ui-sans-serif}

/* hero */
.sy .hero{background:radial-gradient(900px 520px at 10% -5%,rgba(126,91,224,.30),transparent 62%),radial-gradient(740px 460px at 96% 22%,rgba(18,168,184,.20),transparent 62%),var(--ink);color:#fff;padding:clamp(52px,7vw,96px) 0}
.sy .hero-in{display:grid;gap:40px;grid-template-columns:1fr;align-items:center}
.sy .hero h1{margin:18px 0 20px}
.sy .hero h1 em{font-style:italic;background:linear-gradient(92deg,var(--teal),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}
.sy .hero .lead{color:#C6BFDA}
.sy .hero-shot{display:flex;justify-content:center}
.sy .hero-shot img{width:100%;max-width:300px;height:auto;filter:drop-shadow(0 40px 60px rgba(10,6,30,.55))}
.sy .cta{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:28px}
.sy .center-cta{justify-content:center}
.sy .ghost{font:600 14px/1 ui-sans-serif;text-decoration:none;border:1px solid rgba(255,255,255,.26);color:#fff;padding:14px 20px;border-radius:12px}
.sy .strip{margin-top:30px;padding-top:20px;border-top:1px solid rgba(255,255,255,.14);font:500 13px/1.65 ui-sans-serif;color:#B6AECD;max-width:62ch}
.sy .strip b{color:#fff}

/* grids */
.sy .grid{display:grid;gap:12px;grid-template-columns:1fr;margin-top:34px}
.sy .rcard{background:var(--paper);border-radius:16px;padding:24px;margin:0;font-size:1.04rem;font-weight:500;line-height:1.55;
  box-shadow:0 2px 18px rgba(30,20,70,.07);border-left:3px solid var(--vio)}
.sy .mcard{background:var(--paper);border-radius:16px;padding:26px;box-shadow:0 2px 18px rgba(30,20,70,.07)}
.sy .mcard p{color:var(--dim);font-size:.97rem}
.sy .memcard{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.11);border-radius:16px;padding:22px}
.sy .memcard h4{font:800 11px/1 ui-sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);margin:0 0 10px}
.sy .memcard p{font-size:.94rem;color:#B8B1CC}

/* mechanism */
.sy .stat{margin-top:26px;font-family:var(--font-cormorant),Georgia,serif;font-size:clamp(1.35rem,3vw,2.05rem);line-height:1.4;
  color:#fff;max-width:30ch;border-left:3px solid var(--teal);padding-left:20px}
.sy .note b{color:#fff}

/* founder */
.sy .founder{background:#F3EFE2}
.sy .founder .lead{max-width:68ch}
.sy .fquote{margin:34px 0;padding-left:22px;border-left:3px solid var(--teal);
  font-family:var(--font-cormorant),Georgia,serif;font-style:italic;
  font-size:clamp(1.3rem,2.8vw,1.85rem);line-height:1.45;color:var(--ink);max-width:34ch}
.sy .fcta{margin-top:30px}
.sy .fcta a{font:600 .95rem/1 ui-sans-serif;color:var(--teal);text-decoration:none;
  border-bottom:1px solid transparent;padding-bottom:2px;transition:border-color .2s}
.sy .fcta a:hover{border-bottom-color:var(--teal)}

/* split */
.sy .split{display:grid;gap:36px;grid-template-columns:1fr;align-items:center;margin-bottom:clamp(48px,6vw,84px)}
.sy .shot{display:flex;justify-content:center}
.sy .shot img{width:100%;max-width:280px;height:auto;filter:drop-shadow(0 34px 54px rgba(30,20,70,.30))}

/* chat */
.sy .chat{max-width:620px;display:flex;flex-direction:column;gap:11px;margin-top:32px}
.sy .bub{padding:15px 19px;border-radius:20px;font-size:1rem;line-height:1.6}
.sy .bub.s{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.13);border-bottom-left-radius:6px;color:#E7E3F3}
.sy .bub.u{background:linear-gradient(95deg,var(--teal),var(--vio));color:#0D0B14;font-weight:600;align-self:flex-end;border-bottom-right-radius:6px;max-width:82%}

/* chips */
.sy .chips{display:flex;flex-wrap:wrap;gap:9px;list-style:none;padding:0;margin:28px 0 0}
.sy .chips a{display:inline-block;background:var(--paper);border:1px solid rgba(0,0,0,.08);border-radius:99px;padding:9px 16px;
  font:600 13px/1 ui-sans-serif;color:var(--ink);text-decoration:none}

.sy .pill{display:inline-block;margin-top:26px;background:linear-gradient(92deg,var(--teal),var(--vio));color:#0D0B14;
  border-radius:99px;padding:14px 22px;font:700 13.5px/1.35 ui-sans-serif}
.sy .big{font-family:var(--font-cormorant),Georgia,serif;font-size:clamp(3rem,8vw,5.2rem);font-weight:600;margin:10px 0 2px;
  background:linear-gradient(92deg,var(--teal),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}

/* faq */
.sy details{background:var(--paper);border-radius:14px;padding:17px 20px;margin-bottom:10px;box-shadow:0 2px 14px rgba(30,20,70,.06)}
.sy summary{cursor:pointer;font-weight:600;list-style:none}
.sy summary::-webkit-details-marker{display:none}
.sy summary:before{content:"+";color:var(--vio);font-weight:800;margin-right:11px}
.sy details p{color:var(--dim);font-size:.97rem;margin-top:11px;max-width:64ch}

/* footer */
.sy .foot{background:var(--ink);color:#8C84A6;padding:44px 0;font:500 13px/1.9 ui-sans-serif}
.sy .foot .w{display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between}
.sy .foot-links a{color:#8C84A6;text-decoration:none;margin-left:16px}

/* sticky mobile cta */
.sy .sticky{display:none}

@media(min-width:720px){
  .sy .grid{grid-template-columns:repeat(2,1fr)}
}
@media(min-width:980px){
  .sy .hero-in{grid-template-columns:1.12fr .88fr}
  .sy .split{grid-template-columns:1fr 1fr;gap:56px}
  .sy .split.rev > .shot{order:2}
  .sy .grid{grid-template-columns:repeat(3,1fr)}
  .sy .grid.g4{grid-template-columns:repeat(4,1fr)}
}
@media(max-width:760px){
  .sy .nav-links{display:none}
  .sy .nav-right .badge{display:none}
  .sy .sticky{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:70;padding:11px 16px;
    background:rgba(13,11,20,.96);backdrop-filter:blur(16px);justify-content:center}
  .sy .sticky .badge{width:100%;max-width:340px;justify-content:center}
  .sy{padding-bottom:74px}
  .sy .hero-shot img{max-width:250px}
  .sy .stat{max-width:none}
  .sy .foot .w{flex-direction:column}
  .sy .foot-links a{margin:0 14px 0 0}
}
`;
