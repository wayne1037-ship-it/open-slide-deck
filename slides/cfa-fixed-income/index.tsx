import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#1a1a2e', accent: '#1e40af' },
  fonts: {
    display: 'system-ui, -apple-system, sans-serif',
    body: 'system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 140, body: 36 },
  radius: 12,
};

const palette = {
  bg: design.palette.bg,
  text: design.palette.text,
  accent: design.palette.accent,
  accentLight: '#dbeafe',
  muted: '#64748b',
  surface: '#f8fafc',
  border: '#e2e8f0',
  success: '#16a34a',
  warning: '#d97706',
};

const fill = { width: '100%', height: '100%', fontFamily: 'var(--osd-font-body)', background: 'var(--osd-bg)', color: 'var(--osd-text)' } as const;

const SectionTitle: Page = ({ title, subtitle, number }: { title: string; subtitle?: string; number?: string }) => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    {number && <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, color: 'var(--osd-accent)', fontWeight: 600, marginBottom: 24, letterSpacing: '0.1em' }}>{number}</div>}
    <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)', fontWeight: 800, margin: 0, lineHeight: 1.1, color: 'var(--osd-text)' }}>{title}</h1>
    {subtitle && <p style={{ fontSize: 'var(--osd-size-body)', color: palette.muted, marginTop: 32, maxWidth: 1200, lineHeight: 1.5 }}>{subtitle}</p>}
  </div>
);

const ContentPage: Page = ({ title, bullets, accentColor }: { title: string; bullets: string[]; accentColor?: string }) => (
  <div style={{ ...fill, padding: 120, display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, margin: 0, color: accentColor || 'var(--osd-accent)', lineHeight: 1.15 }}>{title}</h2>
    <div style={{ marginTop: 56, flex: 1 }}>
      {bullets.map((b, i) => (
        <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 28, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 20, color: 'var(--osd-accent)', fontWeight: 600, flexShrink: 0, marginTop: 4 }}>▸</span>
          <span style={{ fontSize: 32, lineHeight: 1.5, color: palette.text }}>{b}</span>
        </div>
      ))}
    </div>
  </div>
);

const ZhSlide: Page = ({ title, cn, en, example }: { title: string; cn: React.ReactNode; en?: string; example?: string }) => (
  <div style={{ ...fill, padding: '100px 120px', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
      <span style={{ fontSize: 22, fontWeight: 600, color: 'var(--osd-accent)', background: palette.accentLight, padding: '6px 16px', borderRadius: 6 }}>中文</span>
      <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 48, fontWeight: 700, margin: 0, color: 'var(--osd-text)' }}>{title}</h2>
    </div>
    {en && <p style={{ fontSize: 24, color: palette.muted, lineHeight: 1.6, marginBottom: 20, paddingLeft: 20, borderLeft: '3px solid var(--osd-accent)' }}>{en}</p>}
    <div style={{ fontSize: 30, lineHeight: 1.7, color: palette.text, flex: 1 }}>{cn}</div>
    {example && (
      <div style={{ marginTop: 'auto', background: palette.surface, border: '1px solid var(--osd-accent)', borderRadius: 12, padding: '24px 32px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--osd-accent)', marginBottom: 12 }}>📝 例題 Example</div>
        <div style={{ fontSize: 26, lineHeight: 1.6, color: palette.text }}>{example}</div>
      </div>
    )}
  </div>
);

const titleBox = {
  background: `linear-gradient(135deg, ${palette.accentLight}, transparent)`,
  borderLeft: `6px solid var(--osd-accent)`,
} as const;

const TitleSlide = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <div style={{ fontSize: 28, color: 'var(--osd-accent)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 24 }}>CFA® LEVEL I</div>
    <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 160, fontWeight: 800, margin: 0, lineHeight: 0.98, color: 'var(--osd-text)', letterSpacing: '-0.04em' }}>Fixed Income<br />Review</h1>
    <p style={{ fontSize: 'var(--osd-size-body)', color: palette.muted, marginTop: 48, maxWidth: 1000, lineHeight: 1.5 }}>Readings 47–65 · Complete Exam Review with Chinese Explanations</p>
    <div style={{ marginTop: 64, display: 'flex', gap: 32, fontSize: 22, color: palette.muted }}>
      <span><span style={{ color: 'var(--osd-accent)', fontWeight: 600 }}>61</span> slides</span>
      <span><span style={{ color: 'var(--osd-accent)', fontWeight: 600 }}>19</span> readings</span>
    </div>
  </div>
);

const ReadingDivider = ({ num, title }: { num: string; title: string }) => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <div style={{ fontSize: 32, color: 'var(--osd-accent)', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 16 }}>READING {num}</div>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 100, fontWeight: 800, margin: 0, lineHeight: 1.05, color: 'var(--osd-text)' }}>{title}</h2>
  </div>
);

const S1: Page = () => <TitleSlide />;

const S2: Page = () => (
  <ReadingDivider num="47" title="Fixed-Income Securities: Defining Elements" />
);

const S3: Page = () => (
  <ContentPage title="Bond Indenture & Features" bullets={[
    'Bond indenture: legal contract between issuer and bondholder',
    'Key features: par value, coupon rate, maturity date, currency denomination',
    'Settlement date vs. issue date — know the distinction',
    'Coupon payment frequency: annual, semi-annual, quarterly',
    'Zero-coupon bonds: issued at discount, no periodic coupon'
  ]} />
);

const S4: Page = () => (
  <ContentPage title="Bond Classification & Market Sectors" bullets={[
    'Issuer types: sovereign, quasi-government, corporate (financial/non-financial)',
    'Credit quality: investment grade (BBB−/Baa3+) vs. high-yield',
    'Maturity: money market (≤ 1yr), capital market (> 1yr)',
    'Coupon structure: fixed-rate, floating-rate (reference rate + spread), zero-coupon',
    'Global bonds: domestic, foreign, Eurobonds (distinct from Eurocurrency)'
  ]} />
);

const S48: Page = () => (
  <ZhSlide title="固定收益證券：定義要素" en="Fixed-Income Securities: Defining Elements — Key concepts include bond indenture, coupon structures, classification by issuer/credit/maturity, and accrued interest mechanics." cn={<span>
    <p style={{ marginBottom: 16 }}>債券的核心條款都在<b>契約書</b>（indenture）中：面額（par value）、票面利率（coupon rate）、到期日（maturity）。</p>
    <p>分類方式：<b>發行者</b>（政府/公司）、<b>信用品質</b>（投資級 vs 高收益）、<b>到期年限</b>（貨幣市場 vs 資本市場）、<b>票息結構</b>（固定/浮動/零息）。</p>
  </span>} example="A 10-year bond with 8% annual coupon, par value $1,000, is issued at 98.25. After 3 months, accrued interest = ? 應計利息 = 1,000 × 8% × (90/360) = $20." />
);

const S5: Page = () => (
  <ReadingDivider num="48" title="Fixed-Income Markets: Issuance, Trading, and Funding" />
);

const S6: Page = () => (
  <ContentPage title="Primary & Secondary Markets" bullets={[
    'Primary market: new issuance via public offering or private placement',
    'Underwriters: investment banks buy and resell to investors',
    'Secondary market: trading previously issued bonds (dealer vs. agency markets)',
    'Bonds trade OTC (dealer-based), not on centralized exchanges',
    'Corporate bond issuance trend: move from investment-grade to high-yield'
  ]} />
);

const S7: Page = () => (
  <ContentPage title="Funding & Repo Markets" bullets={[
    'Repurchase agreement (repo): sell security with agreement to repurchase at higher price',
    'Repo rate = implicit borrowing cost; repo margin (haircut) protects lender',
    'Repos are the primary funding tool for bond dealers',
    'Reverse repo: buying securities with agreement to sell back',
    'Matched-book repo: dealer matches borrowers and lenders'
  ]} />
);

const S49: Page = () => (
  <ZhSlide title="固定收益市場：發行、交易與融資" en="Fixed-Income Markets: Primary and secondary markets, underwriters, dealer-based OTC trading, repo agreements as dealer funding mechanism." cn={<span>
    <p style={{ marginBottom: 16 }}><b>初級市場</b>：新債發行，經由承銷商（underwriter）銷售。<b>次級市場</b>：債券在櫃檯市場（OTC）交易，由經銷商報價。</p>
    <p><b>附買回協議</b>（repo）是經銷商主要融資工具：賣出債券並約定未來以較高價格買回，差額即為隱含利息。</p>
  </span>} example="Dealer sells $10M Treasury with 2% haircut for 7-day repo at 1.5%. Cash received = $9.8M. Repurchase price = $9.8M × (1 + 1.5% × 7/360) = $9,802,858." />
);

const S8: Page = () => (
  <ReadingDivider num="49" title="Introduction to Fixed-Income Valuation" />
);

const S9: Page = () => (
  <ContentPage title="Bond Pricing Fundamentals" bullets={[
    'Bond price = PV of expected future cash flows (coupons + principal)',
    'Discount rate = market discount rate (yield-to-maturity concept)',
    'Price-yield relationship: inverse and convex (not linear)',
    'Premium bond: coupon rate > market discount rate (P > par)',
    'Discount bond: coupon rate < market discount rate (P < par)'
  ]} />
);

const S10: Page = () => (
  <ContentPage title="Yield Measures & Matrix Pricing" bullets={[
    'Yield-to-maturity (YTM): IRR of bond cash flows assuming held to maturity',
    'Current yield = annual coupon / bond price (ignores capital gain/loss)',
    'Simple yield = coupon + straight-line amortization / price',
    'Matrix pricing: estimating YTM of non-traded bonds from comparable traded bonds',
    'Flat price (clean) vs. full price (dirty = clean + accrued interest)'
  ]} />
);

const S50: Page = () => (
  <ZhSlide title="固定收益評價導論" en="Bond valuation: PV of cash flows, YTM, matrix pricing, clean vs. dirty price, and the inverse convex price-yield relationship." cn={<span>
    <p style={{ marginBottom: 16 }}><b>債券價格</b> = 未來現金流量折現值。折現率即為<b>到期收益率</b>（YTM）。價格與殖利率呈<b>反向且凸性</b>關係。</p>
    <p>票面利率 &gt; YTM → <b>溢價</b>（價格 &gt; 面額）<br />票面利率 &lt; YTM → <b>折價</b>（價格 &lt; 面額）</p>
  </span>} example="3-year, 5% annual coupon, par $1,000. If YTM = 4%: Price = 50/1.04 + 50/1.04² + 1,050/1.04³ = $1,027.75 (premium bond)." />
);

const S11: Page = () => (
  <ReadingDivider num="50" title="Introduction to Asset-Backed Securities" />
);

const S12: Page = () => (
  <ContentPage title="ABS Overview & Securitization Process" bullets={[
    'Securitization: pooling assets and issuing securities backed by pool cash flows',
    'Special Purpose Vehicle (SPV): bankruptcy-remote entity that holds assets',
    'True sale: transfer of assets from originator to SPV (legal isolation)',
    'Credit enhancement: internal (subordination, overcollateralization, reserve) vs. external (surety bond, LOC)',
    'Tranching: senior (AAA) → mezzanine → subordinated/equity (first-loss piece)'
  ]} />
);

const S13: Page = () => (
  <ContentPage title="Mortgage & Non-Mortgage ABS" bullets={[
    'Residential MBS: pass-through securities (agency vs. non-agency)',
    'Prepayment risk: contraction risk (rates ↓ → faster prepayment) vs. extension risk (rates ↑ → slower prepayment)',
    'CMO: PAC/TAC bonds manage prepayment uncertainty within bands',
    'Non-mortgage ABS: auto loans, credit cards, student loans, CDOs',
    'Key difference: amortizing (auto loans) vs. non-amortizing (credit cards) collateral'
  ]} />
);

const S51: Page = () => (
  <ZhSlide title="資產基礎證券導論" en="Asset-Backed Securities: securitization, SPV, tranching, credit enhancement, RMBS prepayment risk, non-mortgage ABS." cn={<span>
    <p style={{ marginBottom: 16 }}><b>證券化</b>：將資產池（房貸、車貸等）的現金流量包裝成證券。透過<b>特殊目的機構</b>（SPV）達成破產隔離。</p>
    <p><b>分券</b>（tranching）：優先級（senior）→ 中間級（mezzanine）→ 次順位/權益層（first-loss）。</p>
  </span>} example="Auto loan pool: 5yr amortizing loans. Investors receive monthly P&I from borrowers. 20% subordination tranche absorbs first losses, protecting senior tranche holders." />
);

const S14: Page = () => (
  <ReadingDivider num="51" title="Understanding Fixed-Income Risk and Return" />
);

const S15: Page = () => (
  <ContentPage title="Sources of Bond Return & Risk" bullets={[
    'Sources of return: coupon income, capital gain/loss, reinvestment income',
    'Reinvestment risk: coupons reinvested at lower rates reduce total return',
    'Price risk (interest rate risk): bond prices fall when rates rise',
    'Horizon yield: actual realized return over investment horizon',
    'Immunization: matching duration to horizon to offset price and reinvestment risk'
  ]} />
);

const S16: Page = () => (
  <ContentPage title="Duration & Convexity" bullets={[
    'Macaulay duration: weighted-average time to cash flows (years)',
    'Modified duration: % price change per 1% change in YTM (~Macaulay/1+YTM)',
    'Effective duration: for bonds with embedded options (callable/puttable)',
    'Key rate duration: sensitivity to 1 bp change at specific maturities',
    'Convexity: measures curvature of price-yield; positive convexity desirable'
  ]} />
);

const S52: Page = () => (
  <ZhSlide title="固定收益風險與報酬" en="Sources of bond return: coupon, capital gain/loss, reinvestment income. Duration measures price sensitivity; convexity adjusts for curvature." cn={<span>
    <p style={{ marginBottom: 16 }}>債券報酬來源：<b>票息收入</b> + <b>資本利得/損失</b> + <b>再投資收益</b>。<b>利率風險</b>（價格風險）與<b>再投資風險</b>方向相反。</p>
    <p><b>存續期間</b>（duration）：衡量價格對殖利率變動的敏感度。<b>凸性</b>（convexity）：修正存續期間的估計誤差。</p>
  </span>} example="10-yr bond, modified duration = 7.2. If YTM ↑ 1%, price ≈ −7.2% (first-order). Add convexity adjustment. If convexity = 60, total change ≈ −7.2% + 0.5 × 60 × 0.01² = −7.17%." />
);

const S17: Page = () => (
  <ReadingDivider num="52" title="Fundamentals of Credit Analysis" />
);

const S18: Page = () => (
  <ContentPage title="Credit Risk & Bond Ratings" bullets={[
    'Credit risk = default risk + loss severity (loss given default × probability)',
    'Credit ratings: Moody\'s (Aaa-C), S&P (AAA-D), Fitch (AAA-D)',
    'Investment grade: BBB−/Baa3 and above; below is non-investment grade',
    'Rating agencies consider: industry, competitive position, financial ratios, governance',
    'Rating transition matrix: probability of moving from one rating to another'
  ]} />
);

const S19: Page = () => (
  <ContentPage title="Credit Spreads & Analysis" bullets={[
    'Credit spread = yield on risky bond − yield on comparable risk-free bond',
    'Credit analysis: four Cs — Capacity, Collateral, Covenants, Character',
    'Corporate family rating (CFR) vs. issue-specific rating (loss severity)',
    'Spread decomposition: expected loss + liquidity premium + risk premium',
    'Credit migration: downgrade → spread widens → price falls'
  ]} />
);

const S53: Page = () => (
  <ZhSlide title="信用分析基礎" en="Credit analysis: evaluating default risk, credit ratings, four Cs framework, credit spreads, and recovery rates." cn={<span>
    <p style={{ marginBottom: 16 }}><b>信用風險</b> = 違約機率 × 違約損失率。<b>信用利差</b>（credit spread）= 風險債殖利率 − 無風險利率。</p>
    <p>信用分析<b>四C</b>：<b>C</b>apacity（償債能力）、<b>C</b>ollateral（擔保品）、<b>C</b>ovenants（限制條款）、<b>C</b>haracter（管理階層誠信）。</p>
  </span>} example="BBB-rated corporate bond YTM = 5.5%, comparable Treasury = 4.0%. Credit spread = 150 bps. If downgraded to BB, spread likely widens to 300+ bps → price falls." />
);

const S20: Page = () => (
  <ReadingDivider num="53" title="Derivative Markets and Instruments" />
);

const S21: Page = () => (
  <ContentPage title="Derivative Classification" bullets={[
    'Derivative: value derived from underlying asset/index/rate',
    'Forward commitment: forward, futures, swaps (obligation to transact)',
    'Contingent claim: options (right but not obligation to transact)',
    'Exchange-traded (futures, listed options) vs. OTC (forwards, swaps)',
    'Underlyings: equities, fixed income, currencies, commodities, credit'
  ]} />
);

const S22: Page = () => (
  <ContentPage title="Futures vs. Forwards: Key Differences" bullets={[
    'Futures: standardized, exchange-traded, centrally cleared, daily mark-to-market',
    'Forwards: customized, OTC, counterparty risk, settlement at maturity',
    'Margin: initial margin + maintenance margin for futures; variation margin',
    'Forward vs. futures price differs due to daily settlement (convexity adjustment)',
    'Swaps: series of forward contracts; plain vanilla = fixed-for-floating interest rate swap'
  ]} />
);

const S54: Page = () => (
  <ZhSlide title="衍生工具市場與工具" en="Derivatives: forwards, futures, options, swaps. Exchange vs. OTC, margin mechanics, and key differences between forward and futures contracts." cn={<span>
    <p style={{ marginBottom: 16 }}><b>衍生工具</b>：價值來自於標的資產。<b>遠期承諾</b>（forward/futures/swap）有履約義務；<b>選擇權</b>（option）有權利無義務。</p>
    <p>期貨在交易所交易、每<b>日市價結算</b>（mark-to-market）、有保證金機制；遠期合約為店頭市場、到期結算、有對手風險。</p>
  </span>} example="Interest rate swap: Company A pays fixed 3%/$10M notional, receives SOFR + spread. Net settlement each period. If SOFR = 4%, A receives net 1% × $10M × (days/360)." />
);

const S23: Page = () => (
  <ReadingDivider num="54" title="Basics of Derivative Pricing and Valuation" />
);

const S24: Page = () => (
  <ContentPage title="Forward & Futures Pricing" bullets={[
    'Forward price = S₀ × (1 + Rf)ᵀ for no-arbitrage; cost-of-carry model',
    'If carry benefits (dividends, convenience yield): F = S₀ × (1 + Rf − δ)ᵀ',
    'Value of forward contract at initiation = 0 (no money changes hands)',
    'During contract: value = Sₜ − PV(K) for long position',
    'Futures price ∼ forward price when interest rates uncorrelated with underlying'
  ]} />
);

const S25: Page = () => (
  <ContentPage title="Option Pricing Fundamentals" bullets={[
    'Option value = intrinsic value + time value (extrinsic)',
    'Intrinsic value: call = max(0, S−X); put = max(0, X−S)',
    'Put-call parity: C + PV(X) = P + S (European options, no dividends)',
    'Binomial model: two possible outcomes (up/down); risk-neutral pricing',
    'Black-Scholes-Merton: continuous-time model (key inputs: S, X, T, σ, Rf, div)'
  ]} />
);

const S55: Page = () => (
  <ZhSlide title="衍生工具定價與評價基礎" en="Derivative pricing: no-arbitrage principle, cost-of-carry, option intrinsic/time value, put-call parity, binomial and BSM models." cn={<span>
    <p style={{ marginBottom: 16 }}>遠期/期貨價格基於<b>無套利原則</b>：F = S₀ × (1 + Rf)ᵀ。若持有收益（股利、便利收益率），則 F = S₀ × (1 + Rf − δ)ᵀ。</p>
    <p>選擇權價值 = <b>內含價值</b> + <b>時間價值</b>。<b>買權賣權平價</b>（put-call parity）是基本定價關係。</p>
  </span>} example="Stock S = $50, X = $55 call trading at $2, put at $6, Rf = 5%, T = 1yr. Put-call parity check: C + PV(X) = 2 + 55/1.05 = $54.38; P + S = 6 + 50 = $56.00. Mispricing!" />
);

const S26: Page = () => (
  <ReadingDivider num="55" title="Risk Management Applications of Option Strategies" />
);

const S27: Page = () => (
  <ContentPage title="Basic Option Strategies" bullets={[
    'Protective put: long stock + long put (insurance against price decline)',
    'Covered call: long stock + short call (generate income, capped upside)',
    'Collar: long stock + long put (out-of-money) + short call (out-of-money)',
    'Bull spread: buy lower-strike call + sell higher-strike call',
    'Bear spread: buy higher-strike put + sell lower-strike put'
  ]} />
);

const S28: Page = () => (
  <ContentPage title="Advanced Strategies" bullets={[
    'Straddle: buy call and put at same strike (volatility bet)',
    'Strangle: buy OTM call + OTM put (cheaper than straddle, wider break-even)',
    'Butterfly spread: combination of three strikes (profit if price stays near middle)',
    'Calendar spread: buy longer-dated option, sell shorter-dated same strike',
    'Covered call writing enhances yield but caps upside — popular in low-vol environments'
  ]} />
);

const S56: Page = () => (
  <ZhSlide title="選擇權策略在風險管理之應用" en="Option strategies: protective put, covered call, collar, spread strategies, straddle, strangle. Applications for hedging, income, and speculation." cn={<span>
    <p style={{ marginBottom: 16 }}><b>保護性賣權</b>（protective put）= 股票 + 買權，鎖定下限。<b>掩護性買權</b>（covered call）= 股票 + 賣出買權，增加收益但限制漲幅。</p>
    <p><b>跨式部位</b>（straddle）：同時買 call 和 put（賭波動率）。<b>勒式</b>（strangle）：買 OTM call + OTM put（成本更低）。</p>
  </span>} example="Stock at $50. Buy June 50 call ($3) + June 50 put ($3). Straddle cost = $6. Break-evens: $44 and $56. Profit if stock moves >$6 in either direction by expiration." />
);

const S29: Page = () => (
  <ReadingDivider num="56" title="Introduction to Alternative Investments" />
);

const S30: Page = () => (
  <ContentPage title="Alternative Investments Overview" bullets={[
    'Categories: hedge funds, private equity, real estate, commodities, infrastructure',
    'Low liquidity, higher fees, lock-up periods, less regulation',
    'Potential benefits: diversification, return enhancement, inflation hedge',
    'Performance measurement issues: stale pricing, survivorship bias, selection bias',
    'Benchmark challenges: illiquid assets, manager-specific, style drift'
  ]} />
);

const S31: Page = () => (
  <ContentPage title="Hedge Fund & Private Equity Strategies" bullets={[
    'Hedge fund: long/short equity, event-driven, macro, relative value, distressed',
    'Private equity: leveraged buyout (LBO), venture capital, growth equity, distressed',
    'PE fund structure: 2/20 fee model (2% management, 20% performance above hurdle)',
    'J-curve effect: early negative returns from fees and slow deal deployment',
    'Due diligence: strategy consistency, risk management, operational infrastructure'
  ]} />
);

const S57: Page = () => (
  <ZhSlide title="另類投資導論" en="Alternative investments: hedge funds, private equity, real assets. Key characteristics: illiquidity, higher fees, J-curve, performance measurement biases." cn={<span>
    <p style={{ marginBottom: 16 }}>另類投資包括<b>對沖基金</b>、<b>私募股權</b>、<b>不動產</b>、<b>大宗商品</b>、<b>基礎建設</b>。</p>
    <p>特點：流動性低、費用高、資訊不透明。報酬衡量有<b>倖存者偏差</b>（survivorship bias）等問題。</p>
  </span>} example="J-curve: Year 1−2: −5% returns (fees + deal costs); Year 3−4: +8% (portfolio matures); Year 5+: +18% (exits). Net IRR over fund life = 12%." />
);

const S32: Page = () => (
  <ReadingDivider num="57" title="Real Estate and Infrastructure" />
);

const S33: Page = () => (
  <ContentPage title="Real Estate: Direct vs. Indirect" bullets={[
    'Direct: residential, commercial (office, retail, industrial, multifamily)',
    'Indirect: REITs, real estate operating companies (REOCs)',
    'REIT requirements: 90%+ income distribution, 75%+ real estate assets',
    'Valuation: NAV, income approach (DCF/DCF with terminal cap rate), comparable sales',
    'Key metrics: cap rate (NOI/property value), cash-on-cash return, IRR'
  ]} />
);

const S58: Page = () => (
  <ZhSlide title="不動產與基礎建設" en="Real estate: direct vs. indirect investment, REITs, valuation methods (NAV, income approach, comparable). Infrastructure as an asset class." cn={<span>
    <p style={{ marginBottom: 16 }}>不動產投資：<b>直接</b>（買實體不動產）vs <b>間接</b>（REITs 股票）。REITs 必須分配 90% 以上應稅所得。</p>
    <p><b>資本化率</b>（cap rate）= NOI / 不動產價值，反映市場報酬率。</p>
  </span>} example="REIT: Property NOI = $2M, cap rate = 6%. Implied property value = $2M/0.06 = $33.3M. If NOI grows 3%/yr, terminal value in 5yr = $2M×1.03⁵/(6%) = $38.6M." />
);

const S34: Page = () => (
  <ReadingDivider num="58" title="Portfolio Management: An Overview" />
);

const S35: Page = () => (
  <ContentPage title="Portfolio Approach & IPS" bullets={[
    'Portfolio approach: diversify across assets to optimize risk-return',
    'Investment Policy Statement (IPS): objectives (return, risk) + constraints (liquidity, horizon, regulatory, tax, unique)',
    'Risk tolerance: ability (financial capacity) vs. willingness (psychological)',
    'Strategic asset allocation (SAA): long-term target weights based on capital market expectations',
    'Tactical asset allocation (TAA): short-term deviations from SAA'
  ]} />
);

const S59: Page = () => (
  <ZhSlide title="投資組合管理：概述" en="Portfolio management: diversification, IPS (objectives and constraints), strategic vs. tactical asset allocation, risk tolerance." cn={<span>
    <p style={{ marginBottom: 16 }}><b>投資組合方法</b>：透過分散投資優化風險報酬。<b>投資政策說明書</b>（IPS）包含<b>目標</b>（報酬、風險）與<b>限制</b>（流動性、投資期間、稅務等）。</p>
    <p><b>策略性資產配置</b>（SAA）是長期目標；<b>戰術性調整</b>（TAA）是短期偏離。</p>
  </span>} example="IPS for 45-year-old investor: Return objective = CPI + 4%, risk tolerance = moderate, time horizon = 20yr, liquidity needs = $50K/yr for 5yr, constraint: max 50% equities." />
);

const S36: Page = () => (
  <ReadingDivider num="59" title="Portfolio Risk and Return: Part I" />
);

const S37: Page = () => (
  <ContentPage title="Risk & Return Measures" bullets={[
    'Holding period return (HPR): includes income + capital gain',
    'Arithmetic mean vs. geometric mean (time-weighted vs. dollar-weighted return)',
    'Variance and standard deviation: total risk measure',
    'Sharpe ratio: (portfolio return − Rf) / σ (risk-adjusted performance)',
    'Tracking error: standard deviation of active returns (portfolio − benchmark)'
  ]} />
);

const S38: Page = () => (
  <ContentPage title="Diversification & Efficient Frontier" bullets={[
    'Correlation coefficient ρ ranges from −1 to +1; lower ρ = greater diversification benefit',
    'Two-asset portfolio variance: w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂',
    'Minimum-variance portfolio: weights that minimize portfolio variance',
    'Efficient frontier: set of optimal portfolios (max return for given risk)',
    'Capital Market Line (CML): efficient frontier + risk-free asset (tangency portfolio)'
  ]} />
);

const S60: Page = () => (
  <ZhSlide title="投資組合風險與報酬（一）" en="Portfolio risk-return: HPR, Sharpe ratio, tracking error, efficient frontier, CML, diversification benefit from low-correlation assets." cn={<span>
    <p style={{ marginBottom: 16 }}><b>夏普比率</b>（Sharpe ratio）=（投資組合報酬 − 無風險利率）/ 標準差。<b>追蹤誤差</b>（tracking error）= 主動報酬（投資組合 − 基準）的標準差。</p>
    <p>分散投資效果取決於<b>相關係數</b> ρ。ρ 越低，風險分散效果越好。<b>效率前緣</b>（efficient frontier）上的投資組合在相同風險下有最高報酬。</p>
  </span>} example="Two assets: A σ=20%, B σ=15%, ρ=0.3. Minimum variance portfolio: w₁ = (σ₂²−ρσ₁σ₂)/(σ₁²+σ₂²−2ρσ₁σ₂) = (225−90)/(400+225−180) = 135/445 = 30.3% in A, 69.7% in B. σ = ?" />
);

const S39: Page = () => (
  <ReadingDivider num="60" title="Portfolio Risk and Return: Part II" />
);

const S40: Page = () => (
  <ContentPage title="CAPM & Systematic Risk" bullets={[
    'CAPM: E(Ri) = Rf + βi × [E(Rm) − Rf] (security market line equation)',
    'Beta = Cov(Ri, Rm) / Var(Rm) = sensitivity to market factor',
    'Systematic risk (market, non-diversifiable) vs. unsystematic (firm-specific) risk',
    'Only systematic risk is priced (rewarded with higher expected return)',
    'SML vs. CML: CML is efficient frontier + Rf; SML applies to all securities'
  ]} />
);

const S41: Page = () => (
  <ContentPage title="Arbitrage Pricing Theory & Factor Models" bullets={[
    'APT: multiple systematic factors explain expected returns',
    'Arbitrage condition: well-diversified portfolios with same factor exposure must have same return',
    'Single-factor vs. multi-factor models (Fama-French: market, size, value)',
    'Carhart four-factor model: adds momentum factor (up minus down)',
    'Factor loading (sensitivity) vs. factor risk premium (expected return per unit)'
  ]} />
);

const S61: Page = () => (
  <ZhSlide title="投資組合風險與報酬（二）" en="CAPM: E(R) = Rf + β×[E(Rm)−Rf]. SML, systematic vs. unsystematic risk, APT, Fama-French factor models." cn={<span>
    <p style={{ marginBottom: 16 }}><b>CAPM</b>：預期報酬 = 無風險利率 + β × 市場風險溢酬。<b>β</b> 衡量個股對市場的敏感度。只有<b>系統性風險</b>（市場風險）被定價。</p>
    <p><b>套利定價理論</b>（APT）：多因子模型。Fama-French 三因子：市場、市值（SMB）、價值（HML）。</p>
  </span>} example="Stock has β = 1.2, Rf = 3%, market risk premium = 6%. CAPM: E(R) = 3% + 1.2 × 6% = 10.2%. If actual expected return = 12%, stock is under-priced (above SML)." />
);

const S42: Page = () => (
  <ReadingDivider num="61" title="Basics of Portfolio Planning and Construction" />
);

const S62: Page = () => (
  <ContentPage title="Portfolio Construction Steps" bullets={[
    'Step 1: Understand investor & document in IPS (return/risk objectives + constraints)',
    'Step 2: Capital market expectations (asset class return, risk, correlation forecasts)',
    'Step 3: Strategic asset allocation (optimization, constraints, policy portfolio)',
    'Step 4: Implementation (manager selection, vehicle choice, rebalancing)',
    'Step 5: Monitoring & revision (rebalance triggers, performance evaluation)'
  ]} />
);

const S63: Page = () => (
  <ZhSlide title="投資組合規劃與建構基礎" en="Portfolio construction: IPS, capital market expectations, SAA, implementation, monitoring. Asset allocation is the primary determinant of return variability." cn={<span>
    <p style={{ marginBottom: 16 }}>Ibbotson 研究指出：資產配置解釋了投資組合報酬波動的 <b>90% 以上</b>。建構步驟從 IPS 開始，經由資本市場預期，到策略性資產配置與執行。</p>
    <p><b>再平衡</b>（rebalancing）方法：臨界值法（百分比偏離觸發）、日曆法（固定時間）。</p>
  </span>} example="Policy portfolio: 60% equity/30% bonds/10% alternatives (±5% rebalancing bands). If equity rises to 67%, rebalance by selling 2% equity to buy bonds/alternatives." />
);

const S43: Page = () => (
  <ReadingDivider num="62" title="Introduction to Asset Allocation" />
);

const S44: Page = () => (
  <ContentPage title="Asset Allocation Approaches" bullets={[
    'Mean-variance optimization (MVO): classic Markowitz, input-sensitive',
    'Black-Litterman model: combines market equilibrium with investor views',
    'Risk parity: allocate risk equally across asset classes (not capital)',
    'Factor-based allocation: target exposures to rewarded risk factors (value, size, carry, momentum)',
    'Goal-based allocation: separate sub-portfolios for each goal (retirement, education, legacy)'
  ]} />
);

const S45: Page = () => (
  <ContentPage title="Constraints & Practical Considerations" bullets={[
    'Liquidity constraints: unplanned cash needs, margin calls',
    'Time horizon: longer horizon → more ability to take risk',
    'Tax considerations: capital gains rate, tax-exempt vs. taxable accounts',
    'Legal/regulatory: ERISA, prudent investor rule, UCITS',
    'Currency risk: for global portfolios, consider hedging vs. unhedged'
  ]} />
);

const S64: Page = () => (
  <ZhSlide title="資產配置導論" en="Asset allocation: MVO, Black-Litterman, risk parity, factor-based, goal-based. Constraints include liquidity, horizon, tax, regulation, currency." cn={<span>
    <p style={{ marginBottom: 16 }}><b>平均數−變異數最佳化</b>（MVO）為傳統方法，但對輸入參數敏感。<b>Black-Litterman</b> 模型結合市場均衡與投資人觀點。<b>風險平價</b>（risk parity）配置風險而非資本。</p>
  </span>} example="Risk parity: 60/30/10 (equity/bonds/alternatives) portfolio. Equity σ=18%, bonds σ=6%, alternatives σ=12%. Risk contribution: equity = 60×18 = 1,080 (88%); bonds = 30×6 = 180 (15%); alternatives = 10×12 = 120 (10%). Rebalance to equal risk → ~25% equity, ~55% bonds, ~20% alternatives." />
);

const S46: Page = () => (
  <ReadingDivider num="63" title="Principles of Asset Allocation" />
);

const S65: Page = () => (
  <ContentPage title="SAA, TAA & Dynamic Allocation" bullets={[
    'Strategic asset allocation (SAA): long-term policy portfolio; primary driver of return',
    'Tactical asset allocation (TAA): short-term deviations based on market views',
    'Dynamic asset allocation: adjust weights based on market conditions or valuation',
    'Constant-weight: rebalance to fixed targets (buy low, sell high mechanically)',
    'Insured asset allocation: floor portfolio value, upside with upside participation'
  ]} />
);

const S66: Page = () => (
  <ContentPage title="Rebalancing & Implementation" bullets={[
    'Rebalancing methods: calendar, threshold (percentage/absolute), hybrid',
    'Rebalancing benefits: maintains risk profile, enforces discipline',
    'Rebalancing costs: transaction costs, taxes, opportunity cost (momentum)',
    'Implementation vehicles: separate accounts, mutual funds, ETFs, derivatives',
    'Passive vs. active management: efficient markets → passive; inefficiencies → active'
  ]} />
);

const S67: Page = () => (
  <ZhSlide title="資產配置原則" en="SAA, TAA, dynamic allocation, rebalancing methods, implementation vehicles, passive vs. active management debate." cn={<span>
    <p style={{ marginBottom: 16 }}><b>策略性資產配置</b>是長期目標配置，是報酬波動的主要驅動因素。<b>戰術性配置</b>是基於短期市場觀點的偏離。</p>
    <p><b>再平衡</b>方法：<b>日曆法</b>（固定時間）、<b>臨界值法</b>（偏離 thresholds）、<b>混合法</b>。再平衡維持風險水準但產生交易成本。</p>
  </span>} example="SAA = 70/30 equity/bonds. TAA view: expect equity outperformance → shift to 75/25. If equity returns 15% vs bonds 2%, TAA adds 5% × (0.12) = 60 bps of excess return." />
);

const S47: Page = () => (
  <ReadingDivider num="64" title="Technical Analysis" />
);

const S68: Page = () => (
  <ContentPage title="Technical Analysis: Core Principles" bullets={[
    'Technical analysis: study of market action (price, volume) to forecast direction',
    'Three premises: (1) price discounts everything, (2) price moves in trends, (3) history repeats',
    'Dow theory: primary trend (6+mo), secondary (3wk−3mo), minor (<3wk)',
    'Support: price level where buying pressure overcomes selling; resistance: opposite',
    'Breakout above resistance or below support signals trend change'
  ]} />
);

const S69: Page = () => (
  <ContentPage title="Chart Patterns & Indicators" bullets={[
    'Price patterns: head-and-shoulders (reversal), triangles (continuation), flags/pennants',
    'Candlestick: doji, hammer, engulfing, morning/evening star',
    'Moving averages: SMA vs. EMA; golden cross (bullish), death cross (bearish)',
    'Momentum oscillators: RSI (overbought >70, oversold <30), MACD',
    'Volume confirms price: rising price + rising volume = strong trend'
  ]} />
);

const S70: Page = () => (
  <ZhSlide title="技術分析" en="Technical analysis: Dow theory, support/resistance, chart patterns, candlesticks, moving averages, momentum oscillators, volume analysis." cn={<span>
    <p style={{ marginBottom: 16 }}><b>技術分析</b>研究價格與成交量行為來預測趨勢。三大前提：價格反映一切、價格依趨勢移動、歷史會重演。</p>
    <p><b>頭肩頂</b>（head-and-shoulders）為頭部反轉型態。<b>RSI</b> &gt; 70 超買、&lt; 30 超賣。<b>黃金交叉</b>（50日線突破200日線）為多頭訊號。</p>
  </span>} example="Golden cross: 50-day SMA crosses above 200-day SMA → bullish signal. Death cross: 50-day crosses below 200-day → bearish. In 2023, S&P 500 golden cross preceded +12% rally over next 3 months." />
);

const S71: Page = () => (
  <ReadingDivider num="65" title="Fintech in Investment Management" />
);

const S72: Page = () => (
  <ContentPage title="Fintech Applications in Investing" bullets={[
    'Big data: alternative data (satellite images, credit card transactions, web scraping)',
    'Artificial intelligence & ML: pattern recognition, NLP for sentiment, robo-advisors',
    'Blockchain/DLT: tokenization of assets, smart contracts, settlement efficiency',
    'Algorithmic trading: execution algorithms (VWAP, TWAP, implementation shortfall)',
    'Robo-advisors: automated portfolio management based on investor risk profile'
  ]} />
);

const S73: Page = () => (
  <ZhSlide title="金融科技在投資管理中的應用" en="Fintech: big data, AI/ML, blockchain, algorithmic trading, robo-advisors. Transforming how investment research, trading, and portfolio management are done." cn={<span>
    <p style={{ marginBottom: 16 }}>金融科技正在改變投資管理：<b>大數據</b>（衛星影像、信用卡數據、網頁資料）提供新資訊優勢；<b>AI/機器學習</b>用於模式辨識與情緒分析。</p>
    <p><b>區塊鏈</b>實現資產代幣化與智慧合約。<b>演算法交易</b>降低執行成本。<b>理財機器人</b>提供自動化投資組合管理。</p>
  </span>} example="Machine learning for credit analysis: Train model on 10,000 corporate bonds (features: financial ratios, industry, macro data). Model predicts 12-month default probability with 85% accuracy vs. 72% for traditional logistic regression." />
);

const S74: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 160px' }}>
    <div style={{ fontSize: 32, color: 'var(--osd-accent)', fontWeight: 700, marginBottom: 24, letterSpacing: '0.1em' }}>GOOD LUCK!</div>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 112, fontWeight: 800, margin: 0, lineHeight: 1.05, color: 'var(--osd-text)', textAlign: 'center' }}>CFA® Level I<br />Summary Review</h2>
    <p style={{ fontSize: 32, color: palette.muted, marginTop: 40, textAlign: 'center', maxWidth: 1000, lineHeight: 1.5 }}>
      Readings 47–65 · All topics covered with bilingual explanations
    </p>
    <div style={{ marginTop: 64, display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
      {['Fixed Income', 'Derivatives', 'Alternatives', 'Portfolio Mgmt', 'Wealth Planning', 'Fintech'].map(tag => (
        <span key={tag} style={{ fontSize: 22, color: 'var(--osd-accent)', background: palette.accentLight, padding: '10px 24px', borderRadius: 999, fontWeight: 500 }}>{tag}</span>
      ))}
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'CFA Level I Fixed Income Review',
  createdAt: '2026-06-03T12:00:00Z',
};

export default [
  S1,   // 0: Title
  S2,   // 1: R47 divider
  S3,   // 2: Bond Indenture
  S4,   // 3: Bond Classification
  S48,  // 4: R47 CN
  S5,   // 5: R48 divider
  S6,   // 6: Primary & Secondary
  S7,   // 7: Funding & Repo
  S49,  // 8: R48 CN
  S8,   // 9: R49 divider
  S9,   // 10: Pricing Fundamentals
  S10,  // 11: Yield Measures
  S50,  // 12: R49 CN
  S11,  // 13: R50 divider
  S12,  // 14: ABS Overview
  S13,  // 15: Mortgage & Non-Mortgage
  S51,  // 16: R50 CN
  S14,  // 17: R51 divider
  S15,  // 18: Sources of Return
  S16,  // 19: Duration & Convexity
  S52,  // 20: R51 CN
  S17,  // 21: R52 divider
  S18,  // 22: Credit Risk & Ratings
  S19,  // 23: Credit Spreads
  S53,  // 24: R52 CN
  S20,  // 25: R53 divider
  S21,  // 26: Derivative Classification
  S22,  // 27: Futures vs Forwards
  S54,  // 28: R53 CN
  S23,  // 29: R54 divider
  S24,  // 30: Forward Pricing
  S25,  // 31: Option Pricing
  S55,  // 32: R54 CN
  S26,  // 33: R55 divider
  S27,  // 34: Basic Strategies
  S28,  // 35: Advanced Strategies
  S56,  // 36: R55 CN
  S29,  // 37: R56 divider
  S30,  // 38: Alternatives Overview
  S31,  // 39: Hedge Fund & PE
  S57,  // 40: R56 CN
  S32,  // 41: R57 divider
  S33,  // 42: Real Estate
  S58,  // 43: R57 CN
  S34,  // 44: R58 divider
  S35,  // 45: Portfolio Overview
  S59,  // 46: R58 CN
  S36,  // 47: R59 divider
  S37,  // 48: Risk & Return Measures
  S38,  // 49: Diversification & Frontier
  S60,  // 50: R59 CN
  S39,  // 51: R60 divider
  S40,  // 52: CAPM & Systematic Risk
  S41,  // 53: APT & Factor Models
  S61,  // 54: R60 CN
  S42,  // 55: R61 divider
  S62,  // 56: Construction Steps
  S63,  // 57: R61 CN
  S43,  // 58: R62 divider
  S44,  // 59: Asset Allocation Approaches
  S45,  // 60: Constraints
  S64,  // 61: R62 CN
  S46,  // 62: R63 divider
  S65,  // 63: SAA, TAA & Dynamic
  S66,  // 64: Rebalancing
  S67,  // 65: R63 CN
  S47,  // 66: R64 divider
  S68,  // 67: Technical Analysis
  S69,  // 68: Chart Patterns
  S70,  // 69: R64 CN
  S71,  // 70: R65 divider
  S72,  // 71: Fintech Applications
  S73,  // 72: R65 CN
  S74,  // 73: Closing
] satisfies Page[];
