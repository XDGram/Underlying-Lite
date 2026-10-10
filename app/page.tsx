const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const Shield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.6 2.8 8.2 7 10 4.2-1.8 7-5.4 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-5" />
  </svg>
);

const features = [
  ["01", "Verified holdings", "Only allowlisted BSC contracts enter your analysis. No symbol matching or guesswork."],
  ["02", "True company exposure", "See multiple issuer wrappers collapse into the company they economically track."],
  ["03", "Clear concentration", "Understand where your priced stock exposure clusters, with every calculation visible."],
];

export default function Home() {
  return (
    <main>
      <div className="ambient" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="grid-glow" />
      </div>

      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Underlying home">
          <span className="brand-mark"><i /><i /><i /></span>
          UNDERLYING
        </a>
        <div className="nav-links">
          <a href="#preview">Portfolio</a>
          <a href="#how">How it works</a>
          <a href="#trust">Data &amp; trust</a>
        </div>
        <button className="wallet-button"><span />Connect wallet</button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Built for tokenized equities on BNB Chain</div>
          <h1>Your portfolio,<br /><em>decoded.</em></h1>
          <p className="hero-lede">
            Discover the companies behind your tokenized stocks—even when you hold them through different issuers.
          </p>
          <div className="hero-actions">
            <button className="primary-button uiverse-shadow-button">Connect wallet <Arrow /></button>
            <a className="text-button" href="#preview">Explore demo <span>↘</span></a>
          </div>
          <div className="read-only"><Shield /> Read-only analysis · You stay in control</div>
        </div>

        <div className="convergence" aria-label="Two NVIDIA token wrappers combining into one company exposure">
          <div className="flow-lines" aria-hidden="true">
            <svg viewBox="0 0 600 430" preserveAspectRatio="none">
              <path className="line-a" d="M105 115 C280 115 290 215 444 215" />
              <path className="line-b" d="M105 315 C280 315 290 215 444 215" />
              <circle className="traveler traveler-a" r="3"><animateMotion dur="4s" repeatCount="indefinite" path="M105 115 C280 115 290 215 444 215" /></circle>
              <circle className="traveler traveler-b" r="3"><animateMotion dur="4s" begin="-2s" repeatCount="indefinite" path="M105 315 C280 315 290 215 444 215" /></circle>
            </svg>
          </div>
          <div className="token-card token-one">
            <div className="token-icon">N</div>
            <div><small>bSTOCKS</small><strong>NVDAB</strong><span>$6,420.80</span></div>
          </div>
          <div className="token-card token-two">
            <div className="token-icon hollow">N</div>
            <div><small>ONDO</small><strong>NVDAon</strong><span>$3,814.20</span></div>
          </div>
          <div className="company-card">
            <div className="company-head">
              <div className="company-logo">NV</div>
              <div><small>UNDERLYING COMPANY</small><strong>NVIDIA</strong><span>NVDA</span></div>
              <div className="verified">✓</div>
            </div>
            <div className="company-value"><span>Combined exposure</span><strong>$10,235.00</strong></div>
            <div className="allocation"><span style={{ width: "41%" }} /></div>
            <div className="company-foot"><span>41% of priced exposure</span><em>2 positions → 1 company</em></div>
          </div>
          <span className="float-label label-one">ISSUER POSITION 01</span>
          <span className="float-label label-two">ISSUER POSITION 02</span>
        </div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-inner">
          <p>Wallets show tokens.</p>
          <span className="proof-rule" />
          <p className="accent-copy">Underlying shows what they mean.</p>
        </div>
      </section>

      <section className="preview-section shell" id="preview">
        <div className="section-heading">
          <div><span className="kicker">SAMPLE PORTFOLIO</span><h2>Five tokens.<br />Three companies.</h2></div>
          <p>Your issuers stay visible. Your true company-level exposure becomes impossible to miss.</p>
        </div>

        <div className="dashboard-card uiverse-glow-card">
          <div className="dashboard-top">
            <div><span className="uiverse-data-loader" /> DEMO DATA</div>
            <span>BNB SMART CHAIN <b>56</b></span>
          </div>
          <div className="stats-grid">
            <article><span>Stock-token positions</span><strong>5</strong><small>Across 3 issuers</small></article>
            <article><span>Underlying companies</span><strong>3</strong><small>True economic exposure</small></article>
            <article><span>Priced exposure</span><strong>$24,940</strong><small>100% coverage</small></article>
            <article className="warning-stat"><span>Largest concentration</span><strong>41.0%</strong><small>⚠ Above 25% threshold</small></article>
          </div>
          <div className="exposure-list">
            <div className="exposure-row featured-row">
              <div className="stock-id"><span className="stock-logo green">NV</span><div><strong>NVIDIA</strong><small>2 issuer positions</small></div></div>
              <div className="bar"><i style={{ width: "41%" }} /></div>
              <strong className="percent">41.0%</strong><span className="money">$10,235</span><button aria-label="Open NVIDIA details">↗</button>
            </div>
            <div className="issuer-chips"><span>bSTOCKS · NVDAB</span><span>ONDO · NVDAon</span><em>Combined exposure</em></div>
            <div className="exposure-row">
              <div className="stock-id"><span className="stock-logo">A</span><div><strong>Apple</strong><small>2 issuer positions</small></div></div>
              <div className="bar"><i style={{ width: "34%" }} /></div>
              <strong className="percent">34.0%</strong><span className="money">$8,480</span><button aria-label="Open Apple details">↗</button>
            </div>
            <div className="exposure-row">
              <div className="stock-id"><span className="stock-logo red">T</span><div><strong>Tesla</strong><small>1 issuer position</small></div></div>
              <div className="bar"><i style={{ width: "25%" }} /></div>
              <strong className="percent">25.0%</strong><span className="money">$6,225</span><button aria-label="Open Tesla details">↗</button>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="shell">
          <div className="section-heading compact">
            <div><span className="kicker">HOW IT WORKS</span><h2>Clarity in three steps.</h2></div>
            <p>No custody. No execution. Just a more truthful view of what your wallet represents.</p>
          </div>
          <div className="feature-grid">
            {features.map(([number, title, copy]) => (
              <article key={number}>
                <span className="feature-number">{number}</span>
                <div className="mini-visual"><span /><span /><i /></div>
                <h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section shell" id="trust">
        <div className="trust-card uiverse-glow-card">
          <span className="trust-icon"><Shield /></span>
          <div><span className="kicker">BUILT FOR TRANSPARENCY</span><h2>Know what is known.<br />See what isn’t.</h2></div>
          <div className="trust-points">
            <p><span>✓</span> Verified contracts only</p>
            <p><span>✓</span> Data source and freshness shown</p>
            <p><span>✓</span> Unpriced holdings kept separate</p>
            <p><span>✓</span> Issuer differences preserved</p>
          </div>
        </div>
      </section>

      <section className="final-cta shell">
        <span className="kicker">SEE BENEATH THE WRAPPERS</span>
        <h2>Your tokens tell one story.<br /><em>Your exposure tells another.</em></h2>
        <div className="hero-actions centered">
          <button className="primary-button uiverse-shadow-button">Connect wallet <Arrow /></button>
          <a className="text-button" href="#preview">Explore the demo <span>↘</span></a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand" href="#top"><span className="brand-mark"><i /><i /><i /></span>UNDERLYING</a>
          <p>Read-only portfolio intelligence for tokenized equities.</p>
          <div><a href="#how">How it works</a><a href="#trust">Data &amp; trust</a><a href="#">GitHub</a></div>
        </div>
        <div className="shell legal"><span>© 2026 Underlying</span><p>Not investment advice. Tokenized products may carry different legal, redemption, and liquidity terms.</p></div>
      </footer>
    </main>
  );
}
