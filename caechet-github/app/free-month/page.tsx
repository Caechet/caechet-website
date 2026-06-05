import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Free 30-Day Trial. No Growth, No Pay.',
  description: 'If we don\'t grow your email and SMS revenue in 30 days, you don\'t pay. Built for DTC brands doing $50K+/mo.',
}

const CALENDLY_URL = 'https://calendly.com/dxniel-monte/introductory-call-caechet'
const CALENDLY_EMBED = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=fcf1b8&text_color=0a0a0a&primary_color=2048c8`

export default function FreeMonth() {
  return (
    <>
      {/* NAV */}
      <nav className="nav-fm">
        <div className="nav-in">
          <a href="/" className="word">Cæchet<sup>®</sup></a>
          <a href="#book" className="cta">Start free month →</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-fm">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot"></span>
              <span className="ref">For DTC Operators · $50K+/mo · 30-Day Risk-Free Trial</span>
            </div>
            <h1>
              <span className="ln">If we don&apos;t grow your email and</span>
              <span className="ln">SMS revenue in 30 days,</span>
              <span className="ln"><em>you don&apos;t <span className="u">pay.</span></em></span>
            </h1>
            <p className="hero-sub">
              If you run a DTC brand doing <strong style={{color:'var(--cobalt)',fontWeight:800}}>$50K+ in monthly store revenue</strong>, this is for you. That&apos;s the guarantee — work directly with a 10-year retention operator and a dedicated team (strategist, designer, copywriter) building a backend tailored to your brand.
            </p>
            <div className="hero-cta-row">
              <a href="#book" className="btn">Book your free month <span className="arr">→</span></a>
              <a href="#how" className="btn-ghost">How it works</a>
            </div>
            <div className="hero-trust"><b>$100M+</b> tracked lifecycle revenue · <b>100+</b> DTC brands · <b>10 yrs</b></div>
          </div>
          <div className="video-card">
            <span className="video-tag">Watch · 0:45</span>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/QpALrreLu2s?si=81-E26ZOHSOtFwlk"
                title="Cæchet — Free Month"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </header>

      {/* GUARANTEE */}
      <section className="guarantee">
        <div className="wrap">
          <div className="stamp fill" style={{marginBottom:'28px'}}>The Guarantee</div>
          <div className="big">Grow in 30 days<br/>or <em>it&apos;s free.</em></div>
          <p className="sub">No long contracts. No setup fees to find out. If your email + SMS revenue doesn&apos;t move in the first 30 days, you pay nothing.</p>
        </div>
      </section>

      {/* HOW / TEAM */}
      <section className="sec" id="how">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>A dedicated team. <em>Not a queue.</em></h2>
            </div>
            <span className="stamp">Founder-Led</span>
          </div>
          <div className="team-grid">
            <div className="team-cell">
              <div className="role">Daniel<br/>Monte</div>
              <div className="d">10-year retention operator. Built retention departments for 100+ DTC brands and agencies. You work with him directly.</div>
            </div>
            <div className="team-cell">
              <div className="role">Strategist</div>
              <div className="d">Maps your lifecycle, segments, and offer calendar to a revenue target — built around your brand, not a template.</div>
            </div>
            <div className="team-cell">
              <div className="role">Designer</div>
              <div className="d">On-brand email + SMS creative that looks like your store and converts like a landing page.</div>
            </div>
            <div className="team-cell">
              <div className="role">Copywriter</div>
              <div className="d">Words that sell without burning your list — the voice your customers actually want in their inbox.</div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="sec steps">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>Cold to compounding <em>in 30 days.</em></h2>
            </div>
            <span className="stamp">No Risk</span>
          </div>
          <div className="step-list">
            <div className="step-row">
              <div>
                <div className="st">Audit &amp; Plan.</div>
                <div className="sd">We pull apart your account — deliverability, flows, segments, attribution — and build a tailored 30-day growth plan.</div>
              </div>
            </div>
            <div className="step-row">
              <div>
                <div className="st">Build &amp; Launch.</div>
                <div className="sd">Must-have flows go live, campaigns start shipping, creative + copy tuned to your brand. The backend the way it should&apos;ve been from day one.</div>
              </div>
            </div>
            <div className="step-row">
              <div>
                <div className="st">Grow — or you don&apos;t pay.</div>
                <div className="sd">We measure the lift against where you started. If email + SMS revenue doesn&apos;t grow in 30 days, the month is on us.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="sec offer">
        <div className="wrap">
          <div className="offer-card-fm">
            <div className="offer-in">
              <div>
                <h3>Your first month, <em>on the house</em> if we don&apos;t deliver.</h3>
                <p className="offer-sub">Scale your backend with a senior operator and a full team — and only pay once you&apos;ve seen it work.</p>
                <ul className="offer-list">
                  <li>Direct access to Daniel + your dedicated team</li>
                  <li>Custom retention strategy for your brand</li>
                  <li>Flows, campaigns, design &amp; copy — built and launched</li>
                  <li>Grow in 30 days or you don&apos;t pay</li>
                </ul>
                <a href="#book" className="btn" style={{marginTop:'40px'}}>Claim your free month <span className="arr">→</span></a>
              </div>
              <div className="offer-badge">
                <div className="bhead"><span>The Guarantee</span><span className="gtag">30 Days</span></div>
                <div className="bmain">
                  <div className="pct">$0</div>
                  <div className="pl">If we don&apos;t grow it</div>
                  <div className="pd">No upfront risk. No long contract. Pay only when your revenue moves.</div>
                </div>
                <div className="bfoot"><span>Risk-Free Trial</span><span className="stars">★★★★★</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-label">
          <span>Trusted by</span>
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

      {/* WORK */}
      <section className="receipts sec-pad" id="work">
        <div className="wrap">
          <div className="sec-header">
            <div className="left">
              <h3>Selected Work</h3>
              <span className="mono up" style={{fontSize:'11px',color:'var(--cobalt)',opacity:.7}}>Four brands · real results</span>
            </div>
          </div>
          <div className="work-grid">
            <article className="case">
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
            <article className="case">
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
            <article className="case">
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
            <article className="case">
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
      <section className="lookbook lookbook-fm" id="sends">
        <div className="wrap">
          <div className="lookbook-intro">
            <h4>The inbox is the front door. <span className="alt">Make it land.</span></h4>
            <div className="meta">Recent sends across<br/>4 brands · 4 categories<b>10 of 200+</b></div>
          </div>
        </div>
        <div className="wrap">
          <div className="lookbook-track">
            {[
              { img:'lym-monochrome', alt:'LYM Monochrome Collection', copy:'The Monochrome Collection — head-to-pom, one seamless color', date:'03.18.26 · Drop' },
              { img:'lb-set-season', alt:'Les Belles Set Season', copy:'Set Season — the matching set moment is entirely yours', date:'05.14.26 · Collection' },
              { img:'shf-running-shoe', alt:'Sweet Honey Farm Running Shoe', copy:'The best running shoe you never had — for the operator', date:'02.21.26 · Product' },
              { img:'ub-sea-elements', alt:'Upful Blends Sea Elements', copy:'Sea Elements deep dive — 92 of 102 minerals, one capsule', date:'04.04.26 · Education' },
              { img:'lym-mothers-day', alt:"LYM Mother's Day", copy:'Hi Mom, we got you — gift card moment with LOVEMOM', date:'05.10.26 · Holiday' },
              { img:'lb-vacation', alt:'Les Belles Vacation Ready Edit', copy:'Pack This — the 5-piece travel trousseau, beach to bar', date:'05.18.26 · Edit' },
              { img:'ub-heavy-no-more', alt:'Upful Blends Heavy No More', copy:"Let the body flow — heavy, bloated, backed up? We got you.", date:'05.16.26 · Reset' },
              { img:'shf-gear', alt:'Sweet Honey Farm Gear', copy:"It's not just merch. It's a statement.", date:'02.06.26 · Brand' },
              { img:'lb-spring-staples', alt:'Les Belles Spring Staples', copy:'Staple Season — your spring wardrobe, simplified', date:'05.04.26 · Edit' },
              { img:'shf-engine', alt:'Sweet Honey Farm You Are The Engine', copy:'You are the engine. These are the tires.', date:'01.23.26 · Hero' },
            ].map((card) => (
              <div key={card.img} className="lookbook-card">
                <div className="phone">
                  <div className="screen">
                    <div className="status">
                      <span className="time">9:41</span>
                      <span className="icons"><span></span><span></span><span className="battery"></span></span>
                    </div>
                    <div className="scroll"><img src={`/assets/emails/${card.img}.jpg`} alt={card.alt} loading="eager" decoding="async" /></div>
                  </div>
                </div>
                <div className="meta">
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

      {/* FOUNDER */}
      <section className="founder" id="founder">
        <div className="wrap">
          <div className="founder-grid">
            <div className="name-block">
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

      {/* FINAL / BOOK */}
      <section className="final-fm" id="book">
        <div className="wrap">
          <span className="pre">— Let&apos;s Scale Your Backend —</span>
          <h2>Start your<br/><em>free month.</em></h2>
          <p className="sub">The way it should have been built from day one. Grab a time below and we&apos;ll map your 30 days.</p>
          <div className="cal-frame">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_EMBED}
              style={{minWidth:'320px', height:'700px'}}
            ></div>
          </div>
          <div className="fine">GROW IN 30 DAYS OR YOU DON&apos;T PAY</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot-fm">
        <div className="wrap">
          <span className="w">Cæchet<sup>®</sup></span>
          <div className="meta">A Retention Agency · Est. 2025 · NYC // MIA</div>
        </div>
      </footer>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  )
}
