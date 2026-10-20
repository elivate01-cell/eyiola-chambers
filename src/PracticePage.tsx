const AREAS = [
  {
    area: 'Corporate & Commercial', body: 'Formation and restructuring at the CAC, shareholder and joint-venture agreements, supply and distribution contracts, and standing regulatory advice. We keep a company secretarial desk for filings so nothing lapses.',
    rows: ['Company incorporation & post-incorporation filings', 'Shareholder, JV and subscription agreements', 'Commercial contracts and reviews', 'Regulatory advisory (CAC, SEC, NIPC)'],
  },
  {
    area: 'Property & Real Estate', body: 'Searches, perfection and consent work at the Lagos lands registry, tenancy drafting and recovery actions. Our associates attend the registry in person — title problems are found by walking, not by guessing.',
    rows: ['Title searches & investigations', 'Deeds of assignment & governor’s consent', 'Tenancy agreements & recovery', 'Development & lease structuring'],
  },
  {
    area: 'Litigation & Arbitration', body: 'Commercial litigation in the state High Courts and Court of Appeal, and domestic arbitration where the clause allows. The principal leads argument; associates manage the file daily.',
    rows: ['Commercial & chancery actions', 'Appeals and appellate counsel', 'Domestic arbitration', 'Enforcement of awards and judgments'],
  },
  {
    area: 'Family & Estates', body: 'Wills drafted in plain language, letters of administration, family trusts, and the settlement of estates across customary and statutory claims — handled with the discretion such matters deserve.',
    rows: ['Wills & codicils', 'Letters of administration & probate', 'Family trusts & settlements', 'Customary-to-statutory transitions'],
  },
  {
    area: 'Employment & Labour', body: 'Contracts and handbooks built to the Labour Act, workplace investigations, and defence of claims before the National Industrial Court. A monthly client note keeps HR teams current.',
    rows: ['Employment contracts & policies', 'Disciplinary process & investigations', 'NICN defence & settlement', 'Redundancy & exit structuring'],
  },
  {
    area: 'Notarial Services', body: 'The chamber maintains three notaries public. Notarisation, authentication at the ministry, and apostille routing for documents used abroad — usually same-week.',
    rows: ['Notarisation & certification', 'Authentication & legalisation', 'Apostille routing', 'Oaths & affirmations'],
  },
] as const;

const FEES = [
  ['First consultation (30 min)', 'No charge'],
  ['Corporate retainers', 'From ₦250,000 / month'],
  ['Property perfection files', 'Quoted per title'],
  ['Litigation appearances', 'Per brief, quoted in writing'],
] as const;
export default function PracticePage() {
  return (
    <div className="ec">
      <header className="mast">
        <div className="mast-in">
          <a className="wordmark" href="index.html">Eyiola &amp; Chambers<small>Barristers · Solicitors · Notaries</small></a>
          <a className="mtel" href="tel:012345678">Minute enquiries<b>01 234 5678</b></a>
        </div>
        <nav className="mnav">
          <a href="index.html">← Home</a><a className="on" href="#areas">Practice areas</a><a href="index.html#counsel">Counsel</a><a href="index.html#consult">Request consultation</a>
        </nav>
      </header>
      <section className="p-hero">
        <div className="p-hero-in">
          <p className="kick">Practice areas · full detail</p>
          <h1>Six areas, one standard of file-keeping.</h1>
          <p>Every matter is opened with a written scope and a fee note. Nothing is done to a client’s file that has not first been said to the client.</p>
        </div>
      </section>
      <section className="areas" id="areas">
        {AREAS.map((a, i) => (
          <article className="arow" key={a.area}>
            <span className="anum serif">{String(i + 1).padStart(2, '0')}</span>
            <div className="amain">
              <h2>{a.area}</h2>
              <p>{a.body}</p>
            </div>
            <ul className="arows-list">
              {a.rows.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <section className="fees">
        <div className="sect-h"><h2>Fees, plainly</h2></div>
        <table className="ftab">
          <tbody>{FEES.map((f) => <tr key={f[0]}><td>{f[0]}</td><td>{f[1]}</td></tr>)}</tbody>
        </table>
        <p className="lfoot">Disbursements are itemised separately. No fee changes without written notice to you.</p>
      </section>
      <section className="consult" id="consult">
        <div className="cs-in">
          <div>
            <h2>Start with a consultation</h2>
            <p>Half an hour, no charge, in person or on a call. Bring the documents you have; we will tell you honestly which you still need.</p>
          </div>
          <div className="csok serif">Use the consultation form on the home page — it routes straight to counsel’s diary.</div>
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Eyiola &amp; Chambers · 6 Marina Court, Lagos Island · BN 1994/A</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}