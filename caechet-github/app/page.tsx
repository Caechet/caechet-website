import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'CÆCHET™ — A Retention Agency.',
  description: 'Cæchet is a retention-first marketing agency. Email, SMS, subscriptions, loyalty — for DTC brands doing $1M–$50M+.',
}

const CALENDLY_URL = 'https://calendly.com/dxniel-monte/introductory-call-caechet'
const CALENDLY_EMBED = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=fcf1b8&text_color=0a0a0a&primary_color=2048c8`

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="#" className="word">Cæchet<span className="tm">®</span></a>
        <span className="ref-line">REF: C-RTN-2026 · A RETENTION AGENCY · EST. 2025</span>
        <div className="links">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="/free-month">Free Month</a>
        </div>
        <a href={CALENDLY_URL} target="_blank" rel="noopener" className="cta">Book →</a>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-top">
          <div className="left-block">
            <div className="stamp-row">
              <span className="stamp cobalt">A Retention Agency</span>
              <span className="stamp">For DTC Operators</span>
            </div>
          </div>
          <div className="right-block">
            <div className="ref">VOL. 01 / EDITION 26</div>
            <div className="stamp-row">
              <span className="stamp">EST. 2025 // NYC // MIA</span>
            </div>
          </div>
        </div>

        <div className="hero-center">
          <div className="hero-wordmark reveal d-1">Cæchet<sup>®</sup></div>
          <div className="hero-tagline reveal d-2">
            <span className="rule"></span>
            <span className="phrase">Retain or <span className="alt">die.</span></span>
            <span className="rule"></span>
          </div>
        </div>

        <div className="hero-manifesto-label">
          <span className="ref">§ The Manifesto</span>
          <span className="ref-r">Five Truths · Read Twice</span>
        </div>

        <div className="hero-manifesto">
          <div className="m-cell">
            <span className="num">N° 001</span>
            <span className="stamp tag">Method</span>
            <div className="body">We don&apos;t pitch.<br/>We <span className="alt">audit.</span></div>
          </div>
          <div className="m-cell">
            <span className="num">N° 002</span>
            <span className="stamp tag">Principle</span>
            <div className="body">The <span className="alt">second purchase</span> is the whole game.</div>
          </div>
          <div className="m-cell">
            <span className="num">N° 003</span>
            <span className="stamp tag">Diagnosis</span>
            <div className="body">Acquisition fills the bucket. Retention fixes the <span className="alt">hole.</span></div>
          </div>
          <div className="m-cell">
            <span className="num">N° 004</span>
            <span className="stamp tag">Promise</span>
            <div className="body">No <span className="strike">PM tax.</span> No <span className="strike">junior</span> in a queue.</div>
          </div>
          <div className="m-cell">
            <span className="num">N° 005</span>
            <span className="stamp tag">The Filter</span>
            <div className="body">Four new brands a quarter. <span className="alt">That&apos;s it.</span></div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-label">
          <span>§ Trusted by</span>
          <span className="right">8–9 figure operators · 70+ brands</span>
        </div>
        <div className="marquee-track-wrap">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <>
                <img key={`hv-${i}`} src="/assets/brands/hoodville.png" alt="Hoodville" />
                <span className="sep"></span>
                <img key={`sb-${i}`} src="/assets/brands/scentbird.png" alt="Scentbird" />
                <span className="sep"></span>
                <img key={`tr-${i}`} src="/assets/brands/true-religion.png" alt="True Religion" />
                <span className="sep"></span>
                <img key={`ko-${i}`} src="/assets/brands/konscious.png" alt="Konscious" />
                <span className="sep"></span>
                <img key={`lo-${i}`} src="/assets/brands/loops.png" alt="Loops" />
                <span className="sep"></span>
                <img key={`ly-${i}`} src="/assets/brands/lym.png" alt="Love Your Melon" />
                <span className="sep"></span>
                <img key={`lb-${i}`} src="/assets/brands/les-belles.png" alt="Les Belles" />
                <span className="sep"></span>
                <img key={`ry-${i}`} src="/assets/brands/rythm.png" alt="rythm" />
                <span className="sep"></span>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <span className="ref">§01 — The Receipts</span>
              <span className="mono up" style={{fontSize:'11px'}}>Read across · top to bottom</span>
            </div>
            <div className="right">
              <span className="stamp">Industry Benchmark</span>
            </div>
          </div>
          <div className="stat-row">
            <span className="ord">N° 001 / Tracked</span>
            <div className="big">$100<sup>M+</sup></div>
            <div className="desc"><b>Lifecycle revenue, tracked.</b> Across 70+ DTC brands. 11 years of practice.</div>
          </div>
          <div className="stat-row">
            <span className="ord">N° 002 / Benchmark</span>
            <div className="big">40<sup>%</sup></div>
            <div className="desc"><b>What top operators pull</b> from email + SMS alone. We get you there without leaning harder on paid.</div>
          </div>
          <div className="stat-row">
            <span className="ord">N° 003 / Capacity</span>
            <div className="big">4<sup>/qtr</sup></div>
            <div className="desc"><b>New accounts per quarter.</b> Senior operator, full ownership, every brand. No exceptions.</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <span className="ref ref-cobalt">§03 — What We Run</span>
              <span className="mono up" style={{fontSize:'11px',color:'var(--cobalt)',opacity:.7}}>Four channels · one engine</span>
            </div>
            <div className="right">
              <span className="stamp">Full Lifecycle</span>
            </div>
          </div>
          <div className="svc-list">
            <div className="svc-row">
              <span className="svc-num">N° 01</span>
              <span className="svc-name">Email <span className="desc">Campaigns + flows. The compounding core — where 20%+ of revenue should live.</span></span>
              <span className="svc-arrow">↗</span>
            </div>
            <div className="svc-row">
              <span className="svc-num">N° 02</span>
              <span className="svc-name">SMS <span className="desc">Pattern-interrupt → benefit → CTA. Another 15% when it&apos;s run right.</span></span>
              <span className="svc-arrow">↗</span>
            </div>
            <div className="svc-row">
              <span className="svc-num">N° 03</span>
              <span className="svc-name">Subscriptions <span className="desc">Churn reduction, replenishment, upsell automation. Predictable recurring revenue.</span></span>
              <span className="svc-arrow">↗</span>
            </div>
            <div className="svc-row">
              <span className="svc-num">N° 04</span>
              <span className="svc-name">Loyalty Program <span className="desc">Tiers, rewards, VIP triggers, birthday flows. The system that makes the second purchase happen.</span></span>
              <span className="svc-arrow">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="receipts sec-pad" id="work">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <span className="ref ref-cobalt">§02 — Selected Work</span>
              <span className="mono up" style={{fontSize:'11px',color:'var(--cobalt)',opacity:.7}}>Four exhibits · four categories</span>
            </div>
            <div className="right">
              <span className="stamp">Not For Display Only</span>
            </div>
          </div>
          <div className="work-grid">
            <article className="case" data-exhibit="EXHIBIT N° 01 / 04">
              <div className="case-artifact">
                <img src="/assets/case-artifacts/les-belles-takeover.jpg" alt="Les Belles Klaviyo inbox takeover dashboard" />
                <span className="stamp-bl">Klaviyo · Inbox Takeover</span>
              </div>
              <div className="case-inner">
                <div className="top"><div>
                  <div className="cat">Luxury Intimate Apparel · 2025</div>
                  <div className="name">Les Belles</div>
                </div></div>
                <p className="quoteline">Deliverability got us in the door. Automation is how we took over the house.</p>
                <div className="case-stats">
                  <div className="stat"><div className="n">+138%</div><div className="l">Deliverability score</div></div>
                  <div className="stat"><div className="n">$287K</div><div className="l">Attributed Q4 rev</div></div>
                  <div className="stat"><div className="n">+75%</div><div className="l">YoY rev Sept–Dec</div></div>
                </div>
              </div>
            </article>
            <article className="case" data-exhibit="EXHIBIT N° 02 / 04">
              <div className="case-artifact">
                <img src="/assets/case-artifacts/sweet-honey-attribution.jpg" alt="Sweet Honey Farm Klaviyo attribution dashboard" />
                <span className="stamp-bl">Klaviyo · Attribution Summary</span>
              </div>
              <div className="case-inner">
                <div className="top"><div>
                  <div className="cat">Private Wellness Community · 2026</div>
                  <div className="name">Sweet Honey</div>
                </div></div>
                <p className="quoteline">Didn&apos;t reinvent the wheel. Refused to accept mediocrity.</p>
                <div className="case-stats">
                  <div className="stat"><div className="n">45%</div><div className="l">Email attribution</div></div>
                  <div className="stat"><div className="n">+175%</div><div className="l">Revenue growth</div></div>
                  <div className="stat"><div className="n">×2</div><div className="l">Channel dominance</div></div>
                </div>
              </div>
            </article>
            <article className="case" data-exhibit="EXHIBIT N° 03 / 04">
              <div className="case-artifact">
                <img src="/assets/case-artifacts/upful-blends-klaviyo.jpg" alt="Upful Blends Klaviyo analytics dashboard" />
                <span className="stamp-bl">Klaviyo · 60-Day Performance</span>
              </div>
              <div className="case-inner">
                <div className="top"><div>
                  <div className="cat">Organic Herbal Wellness · 2026</div>
                  <div className="name">Upful Blends</div>
                </div></div>
                <p className="quoteline">Loyal community, leaky funnel. We unified every touchpoint into one engine.</p>
                <div className="case-stats">
                  <div className="stat"><div className="n">+17%</div><div className="l">Total rev / 60d</div></div>
                  <div className="stat"><div className="n">+36%</div><div className="l">Conversion lift</div></div>
                  <div className="stat"><div className="n">5→1</div><div className="l">Silos unified</div></div>
                </div>
              </div>
            </article>
            <article className="case" data-exhibit="EXHIBIT N° 04 / 04">
              <div className="case-artifact">
                <img src="/assets/case-artifacts/true-religion-2chainz.jpg" alt="True Religion 2 Chainz campaign" />
                <span className="stamp-bl">Campaign · 2 Chainz</span>
              </div>
              <div className="case-inner">
                <div className="top"><div>
                  <div className="cat">Apparel · 9-Figure Scale</div>
                  <div className="name">True Religion</div>
                </div></div>
                <p className="quoteline">Lift it 10% in six months. We cleared 15% in five.</p>
                <div className="case-stats">
                  <div className="stat"><div className="n">45%</div><div className="l">Retention rev MoM</div></div>
                  <div className="stat"><div className="n">35%</div><div className="l">Email + SMS MoM</div></div>
                  <div className="stat"><div className="n">+5%</div><div className="l">Mobile &amp; loyalty</div></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* LOOKBOOK */}
      <section className="lookbook" id="sends">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <span className="ref">§04 — Selected Sends</span>
              <span className="mono up" style={{fontSize:'11px'}}>Inbox receipts · last 90 days</span>
            </div>
            <div className="right"><span className="stamp">For Editorial Review</span></div>
          </div>
          <div className="lookbook-intro">
            <h4>The inbox is the front door. <span className="alt">Make it land.</span></h4>
            <div className="meta">
              Recent sends across<br/>4 brands · 4 categories
              <b>10 of 200+</b>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="lookbook-track">
            {[
              { img:'lym-monochrome', alt:'LYM Monochrome Collection', n:'001', copy:'The Monochrome Collection — head-to-pom, one seamless color', date:'03.18.26 · Drop' },
              { img:'lb-set-season', alt:'Les Belles Set Season', n:'002', copy:'Set Season — the matching set moment is entirely yours', date:'05.14.26 · Collection' },
              { img:'shf-running-shoe', alt:'Sweet Honey Farm Running Shoe', n:'003', copy:'The best running shoe you never had — for the operator', date:'02.21.26 · Product' },
              { img:'ub-sea-elements', alt:'Upful Blends Sea Elements', n:'004', copy:'Sea Elements deep dive — 92 of 102 minerals, one capsule', date:'04.04.26 · Education' },
              { img:'lym-mothers-day', alt:"LYM Mother's Day", n:'005', copy:'Hi Mom, we got you — gift card moment with LOVEMOM', date:'05.10.26 · Holiday' },
              { img:'lb-vacation', alt:'Les Belles Vacation Ready Edit', n:'006', copy:'Pack This — the 5-piece travel trousseau, beach to bar', date:'05.18.26 · Edit' },
              { img:'ub-heavy-no-more', alt:'Upful Blends Heavy No More', n:'007', copy:"Let the body flow — heavy, bloated, backed up? We got you.", date:'05.16.26 · Reset' },
              { img:'shf-gear', alt:'Sweet Honey Farm Gear', n:'008', copy:"It's not just merch. It's a statement.", date:'02.06.26 · Brand' },
              { img:'lb-spring-staples', alt:'Les Belles Spring Staples', n:'009', copy:'Staple Season — your spring wardrobe, simplified', date:'05.04.26 · Edit' },
              { img:'shf-engine', alt:'Sweet Honey Farm You Are The Engine', n:'010', copy:'You are the engine. These are the tires.', date:'01.23.26 · Hero' },
            ].map((card) => (
              <div key={card.n} className="lookbook-card">
                <div className="phone">
                  <div className="screen">
                    <div className="status">
                      <span className="time">9:41</span>
                      <span className="icons"><span></span><span></span><span className="battery"></span></span>
                    </div>
                    <div className="scroll"><img src={`/assets/emails/${card.img}.jpg`} alt={card.alt} /></div>
                  </div>
                </div>
                <div className="meta">
                  <div className="index">N° {card.n} / 10</div>
                  <div className="campaign">{card.copy}</div>
                  <div className="date">{card.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="lookbook-foot">
            <span>Sample selection · campaigns &amp; flows</span>
            <span className="scroll-hint">Drag to scroll</span>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="quote-band">
        <div className="wrap">
          <div className="quote-body">
            The kind of agency<br/>
            I wished <em>existed</em><br/>
            when I was in-house.
          </div>
          <div className="credit">
            <span className="ref ref-cobalt" style={{borderTop:'1px solid var(--cobalt)',borderBottom:'1px solid var(--cobalt)',padding:'6px 14px',display:'inline-block'}}>— Daniel Monte · Founder · 2026</span>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="founder" id="founder">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <span className="ref">§05 — The Operator</span>
              <span className="mono up" style={{fontSize:'11px'}}>Every angle of the game</span>
            </div>
            <div className="right"><span className="stamp">REF: DM-OPS / 11Y</span></div>
          </div>
          <div className="founder-grid">
            <div className="name-block">
              <div className="ref">Subject N° 01</div>
              <div className="name-row">
                <div className="name">Daniel<br/>Monte<sup>™</sup></div>
                <div className="founder-photo-wrap">
                  <img className="founder-photo" src="/assets/daniel-monte-cutout.png" alt="Daniel Monte, Founder of Cæchet" />
                </div>
              </div>
              <div className="role">Founder · 11 yrs · NYC</div>
            </div>
            <div className="cred-list">
              <div className="cred">
                <div className="k">In-House</div>
                <div className="v"><b>True Religion · Scentbird.</b> Owned email + SMS P&amp;L in-house. Built the team that built the system.</div>
              </div>
              <div className="cred">
                <div className="k">Agency</div>
                <div className="v"><b>The Snow Agency.</b> Scaled retention for 8/9-figure DTCs. Acquired by Avenue Z.</div>
              </div>
              <div className="cred">
                <div className="k">SaaS</div>
                <div className="v"><b>Sendlane.</b> Built the tools brands run on. Direct partner status with the platforms that matter.</div>
              </div>
              <div className="cred">
                <div className="k">The Edge</div>
                <div className="v"><b>Every side of the table.</b> Brand, agency, platform, partner — preferred rates passed to every client.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <span className="ref ref-cobalt">§06 — The Process</span>
              <span className="mono up" style={{fontSize:'11px',color:'var(--cobalt)',opacity:.7}}>Cold to compounding · 30 days</span>
            </div>
            <div className="right"><span className="stamp">Four steps · no more</span></div>
          </div>
          <div className="process-list">
            {[
              { n:'01', tag:'Week 0 / Free', name:'Audit.', desc:'Live walkthrough of your account. Deliverability, flows, segments, list health, attribution. You leave with a 90-day plan whether we work together or not.', when:'60 minutes' },
              { n:'02', tag:'Weeks 1–2 / Onboarding', name:'Plan.', desc:'Lifecycle blueprint. Calendar, segmentation, KPI targets, ESP migration if needed. Approved by you before a single email goes out.', when:'14 days' },
              { n:'03', tag:'Weeks 3–6 / Live', name:'Build.', desc:'Seven must-have flows live. Pop-ups optimized. First 28-campaign cycle launches. Reporting dashboard wired to your data sources.', when:'4 weeks' },
              { n:'04', tag:'Month 2+ / Ongoing', name:'Optimize.', desc:'Weekly calls. A/B testing every send. Monthly + quarterly reviews. Compounding revenue every cycle. The flywheel takes over.', when:'Ongoing' },
            ].map((step) => (
              <div key={step.n} className="step">
                <div className="ord-stack">
                  <span className="n">{step.n}</span>
                  <span className="tag">{step.tag}</span>
                </div>
                <div>
                  <div className="name">{step.name}</div>
                  <div className="desc">{step.desc}</div>
                </div>
                <div className="when">Duration<br/><b>{step.when}</b></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="filter">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <span className="ref ref-cobalt">§07 — The Filter</span>
              <span className="mono up" style={{fontSize:'11px',color:'var(--cobalt)',opacity:.7}}>Four new brands · quarter</span>
            </div>
            <div className="right"><span className="stamp">For DTC Operators Only</span></div>
          </div>
          <div className="filter-grid">
            <div className="filter-col">
              <div className="col-tag">FIT / N°01</div>
              <div className="pre">→ A Fit, if you are…</div>
              <h3>$1M–$50M+<br/>DTC operator.</h3>
              <ul>
                <li><b>Past Validation</b>Orders to compound on. Real revenue, real history.</li>
                <li><b>Already on Shopify</b>Or open to migrating — we&apos;ll do the move on us if you qualify.</li>
                <li><b>Attribution Under 30%</b>Clear path to where the top operators live.</li>
                <li><b>Tired of Agency Fly-Bys</b>Senior operator on Slack — not a junior in a queue.</li>
              </ul>
            </div>
            <div className="filter-col">
              <div className="col-tag">NOT FIT / N°02</div>
              <div className="pre">× Not a fit, if you…</div>
              <h3>Want a quick fix or a discount hammer.</h3>
              <ul>
                <li><b>Discount-Hammer Agency</b>We won&apos;t train your list to wait for sales.</li>
                <li><b>6-Week Project, Then Gone</b>Compounding revenue takes 90 days minimum to read.</li>
                <li><b>Pre-Revenue or &lt; $50K MRR</b>Get to product-market fit first. We&apos;ll send resources.</li>
                <li><b>No Buy-In for Retention</b>If your founder/CMO isn&apos;t bought in, we&apos;ll spin our wheels.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer" id="offer">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <span className="ref">§08 — The Offer</span>
              <span className="mono up" style={{fontSize:'11px'}}>No pitch · no contract</span>
            </div>
            <div className="right"><span className="stamp">Free</span></div>
          </div>
          <h2>Free hour.<br/>No <span className="strike">pitch</span>. Just useful things.</h2>
          <div className="offer-grid">
            <div className="offer-items">
              {[
                { n:'N° 001', title:'Live account audit.', sub:'Deliverability · flows · segmentation · attribution. 60 minutes.' },
                { n:'N° 002', title:'90-day plan.', sub:'Prioritized roadmap, written, yours to keep.' },
                { n:'N° 003', title:'Retain or Die · eBook.', sub:'41 pages — calendar, frameworks, full lifecycle map.' },
                { n:'N° 004', title:'ESP migration, on us.', sub:'Done-for-you flows, lists, segments, deliverability — if MRR over $1K/mo.' },
              ].map((item) => (
                <div key={item.n} className="offer-item">
                  <span className="n">{item.n}</span>
                  <div className="b"><b>{item.title}</b><small>{item.sub}</small></div>
                </div>
              ))}
            </div>
            <div className="offer-card">
              <span className="corner">N° 01 / Exit Value</span>
              <div>
                <span className="ref ref-cobalt">What you walk out with</span>
                <div className="head" style={{marginTop:'18px'}}>A <em>90-day</em><br/>retention plan.<br/>Written. <em>Yours.</em></div>
              </div>
              <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn">
                Book the free hour <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL / BOOK */}
      <section className="final">
        <div className="wrap">
          <span className="pre">— Your Move —</span>
          <h2>Book.</h2>
          <p className="sub">Leave with a plan.<br/>No upsell. No contract. No follow-up sequence in your inbox.</p>
          <div className="cal-frame">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_EMBED}
              style={{minWidth:'320px', height:'700px'}}
            ></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-word">Cæchet<sup>®</sup></div>
          <div className="foot-grid">
            <div className="foot-col">
              <h4>The Work</h4>
              <ul>
                <li><a href="#work">Receipts</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#founder">Founder</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>The Offer</h4>
              <ul>
                <li><a href="/free-month">Free Month</a></li>
                <li><a href={CALENDLY_URL} target="_blank" rel="noopener">Book</a></li>
                <li><a href="tel:7189307583">718.930.7583</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Elsewhere</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter / X</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Locations</h4>
              <ul>
                <li>NYC · MIA</li>
                <li>Remote-first</li>
                <li>EST. 2025</li>
              </ul>
            </div>
          </div>
          <div className="foot-bot">
            <span>Stay dangerous · Be human</span>
            <span>© 2026 Cæchet™ · A Retention Agency</span>
          </div>
        </div>
      </footer>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  )
}
