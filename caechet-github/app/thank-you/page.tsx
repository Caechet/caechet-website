import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "You're Booked. | Cæchet™",
  description: 'Your free month starts with one call. Here\'s what happens next.',
  robots: { index: false, follow: false },
}

export default function ThankYou() {
  return (
    <>
      {/* Google Ads Conversion — fires when someone lands on /thank-you after booking */}
      <Script id="gads-conversion" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
              'send_to': 'AW-18226556683/FJ4fCOmW5LscEIvejPND'
            });
          }
        `}
      </Script>
      {/* NAV */}
      <nav className="nav-fm">
        <div className="nav-in">
          <a href="/" className="word">Cæchet<sup>®</sup></a>
          <a href="/" className="cta">← Back to site</a>
        </div>
      </nav>

      {/* CONFIRMATION HERO */}
      <header className="ty-hero">
        <div className="wrap">
          <div className="ty-eyebrow">
            <div className="ty-check"></div>
            <span className="stamp fill">Booking Confirmed</span>
            <span className="stamp">30-Day Free Trial</span>
          </div>
          <h1 className="ty-headline">
            <span className="ln">You&apos;re on</span>
            <span className="ln">the <em>calendar.</em></span>
          </h1>
          <p className="ty-sub">
            Check your inbox — your Calendly confirmation with the video link is on its way.
            Here&apos;s what happens between now and the call.
          </p>
          <div className="ty-trust">
            <span className="item"><b>$100M+</b> tracked lifecycle revenue</span>
            <span className="ty-dot"></span>
            <span className="item"><b>100+</b> DTC brands</span>
            <span className="ty-dot"></span>
            <span className="item"><b>10 yrs</b> in retention</span>
          </div>
        </div>
      </header>

      {/* WHAT'S NEXT */}
      <section className="sec steps">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>Between now <em>and the call.</em></h2>
            </div>
            <span className="stamp">3 Steps</span>
          </div>
          <div className="step-list">
            <div className="step-row">
              <div>
                <div className="st">Check your inbox.</div>
                <div className="sd">Your Calendly confirmation has the video link. Add it to your calendar — the call runs exactly 30 minutes.</div>
              </div>
            </div>
            <div className="step-row">
              <div>
                <div className="st">On the call, we align.</div>
                <div className="sd">We map out exactly how to make use of the 30 days — your current setup, the gaps, priorities, and what growth looks like for your brand specifically.</div>
              </div>
            </div>
            <div className="step-row">
              <div>
                <div className="st">Your trial begins.</div>
                <div className="sd">30 days of Cæchet building and running your retention backend. Love what we build? Month 2 starts and we keep going. If not — no foul. The month is on us.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE REMINDER */}
      <section className="guarantee">
        <div className="wrap">
          <div className="stamp fill" style={{ marginBottom: '28px' }}>The Guarantee</div>
          <div className="big">
            Grow in 30 days<br />
            or <em>it&apos;s free.</em>
          </div>
          <p className="sub">
            You&apos;ve already made the right move. We&apos;ll take it from here.
          </p>
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

      {/* FOOTER */}
      <footer className="foot-fm">
        <div className="wrap">
          <span className="w">Cæchet<sup>®</sup></span>
          <div className="meta">A Retention Agency · Est. 2025 · NYC // MIA</div>
        </div>
      </footer>
    </>
  )
}
