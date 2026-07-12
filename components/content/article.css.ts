// Article styling. Kept on the same cream/ink system as PageShell and the legal
// pages so the content hub does not read as a bolted-on blog. Measure is capped
// near 68 characters, which is where long-form prose stops being tiring.
export const ARTICLE_CSS = `
.art{max-width:720px;margin:0 auto;padding:56px 24px 96px;
  font-family:var(--font-inter),'Helvetica Neue',sans-serif;color:#0F0C0A}
.art .crumbs{display:flex;gap:8px;align-items:center;font:600 12px/1 Arial,sans-serif;
  letter-spacing:.08em;text-transform:uppercase;color:#6A6078;margin-bottom:28px}
.art .crumbs a{color:#0B6675;text-decoration:none}
.art .crumbs a:hover{text-decoration:underline}

.art h1{font-size:clamp(2rem,5vw,2.9rem);font-weight:600;letter-spacing:-.022em;line-height:1.1;margin:0 0 20px}
.art .standfirst{font-size:1.2rem;line-height:1.6;color:#2E2840;margin:0 0 18px}
.art .meta{font:600 12px/1 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;
  color:#6A6078;margin:0 0 40px;padding-bottom:28px;border-bottom:1px solid rgba(0,0,0,.1)}

.art .toc{background:#FFFDF7;border:1px solid rgba(0,0,0,.09);border-radius:14px;padding:22px 26px;margin:0 0 48px}
.art .toc h2{font:600 12px/1 Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;
  color:#6A6078;margin:0 0 14px;border:0;padding:0}
.art .toc ol{margin:0;padding-left:18px;display:grid;gap:9px}
.art .toc a{color:#0B6675;text-decoration:none;font-size:15px;line-height:1.45}
.art .toc a:hover{text-decoration:underline}

.art section{margin:0 0 44px;scroll-margin-top:88px}
.art h2{font-size:1.6rem;font-weight:600;letter-spacing:-.015em;line-height:1.25;margin:0 0 18px}
.art h3{font-size:1.15rem;font-weight:600;margin:30px 0 12px}
.art p{font-size:17px;line-height:1.75;margin:0 0 18px;color:#241F35}
.art ul{margin:0 0 20px;padding-left:22px;display:grid;gap:11px}
.art li{font-size:17px;line-height:1.7;color:#241F35}

.art blockquote{margin:28px 0;padding:22px 26px;background:#FFFDF7;border-left:3px solid #12A8B8;
  border-radius:0 12px 12px 0;font-size:18px;line-height:1.65;color:#0F0C0A}
.art blockquote cite{display:block;margin-top:10px;font-size:14px;font-style:normal;color:#6A6078}
.art .callout{margin:26px 0;padding:20px 24px;background:rgba(18,168,184,.07);
  border:1px solid rgba(18,168,184,.3);border-radius:12px;font-size:16px;line-height:1.65;color:#0F0C0A}

.art .faq-block{border-top:1px solid rgba(0,0,0,.1);padding-top:40px}
.art details{border-bottom:1px solid rgba(0,0,0,.08);padding:16px 0}
.art summary{cursor:pointer;font-weight:600;font-size:17px;line-height:1.5;list-style:none}
.art summary::-webkit-details-marker{display:none}
.art summary::after{content:'+';float:right;color:#6A6078;font-weight:400}
.art details[open] summary::after{content:'\\2212'}
.art details p{margin:12px 0 4px;color:#2E2840}

.art .cta-block{margin:56px 0;padding:34px 30px;background:#0D0B14;border-radius:18px;text-align:center}
.art .cta-block h2{color:#fff;margin:0 0 12px;font-size:1.45rem}
.art .cta-block p{color:#B9B2CE;font-size:16px;margin:0 auto 24px;max-width:460px}
.art .cta-btn{display:inline-block;background:#fff;color:#0D0B14;text-decoration:none;
  font:700 13px/1 Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;
  padding:16px 26px;border-radius:10px}
.art .cta-btn:hover{background:#F1EEF9}

.art .hub-lead{margin:0 0 44px}
.art .hub-lead a{display:block;padding:26px 28px;background:#FFFDF7;border:1px solid rgba(18,168,184,.4);
  border-radius:16px;text-decoration:none;box-shadow:0 10px 30px rgba(13,11,20,.05)}
.art .hub-lead .tag{display:inline-block;font:700 11px/1 Arial,sans-serif;letter-spacing:.12em;
  text-transform:uppercase;color:#0B6675;margin-bottom:10px}
.art .hub-lead strong{display:block;font-size:1.35rem;font-weight:600;color:#0F0C0A;margin-bottom:8px}
.art .hub-lead span{display:block;font-size:15.5px;line-height:1.6;color:#4A4360}

.art .related{border-top:1px solid rgba(0,0,0,.1);padding-top:40px}
.art .related h2{font-size:1.15rem;margin-bottom:20px}
.art .related ul{list-style:none;padding:0;display:grid;gap:12px}
.art .related a{display:block;padding:20px 22px;background:#FFFDF7;border:1px solid rgba(0,0,0,.09);
  border-radius:13px;text-decoration:none;transition:border-color .15s,transform .15s}
.art .related a:hover{border-color:rgba(0,0,0,.28);transform:translateY(-1px)}
.art .related strong{display:block;font-size:16.5px;font-weight:600;color:#0F0C0A;margin-bottom:5px}
.art .related span{display:block;font-size:14.5px;line-height:1.6;color:#4A4360}
`;
