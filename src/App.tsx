import { useState } from 'react';

const PRACTICE = [
  { name: 'Corporate & Commercial', note: 'Company formation, shareholder agreements, commercial contracts and regulatory filings for growing businesses.' },
  { name: 'Property & Real Estate', note: 'Title searches, deeds of assignment, governor’s consent and tenancy matters across Lagos and the South-West.' },
  { name: 'Litigation & Arbitration', note: 'Representation before the High Courts, Court of Appeal and arbitral panels — prepared early, argued carefully.' },
  { name: 'Family & Estates', note: 'Wills, letters of administration, family trusts and the settlement of estates with discretion.' },
  { name: 'Employment & Labour', note: 'Contracts, handbooks, workplace investigations and defence of claims at the National Industrial Court.' },
  { name: 'Notarial Services', note: 'Notarisation, authentication and apostille of documents for use within Nigeria and abroad.' },
] as const;

const COUNSEL = [
  { name: 'Babatunde Eyiola, SAN', role: 'Principal Counsel', note: 'Called to the Bar in 1988. Senior Advocate of Nigeria since 2012. Argues appeals and leads commercial disputes.' },
  { name: 'Chiamaka Obi', role: 'Senior Associate', note: 'Property and estates practice. LL.M (Lagos). Known for untangling title problems others decline.' },
  { name: 'Yusuf Danjuma', role: 'Associate', note: 'Employment and regulatory work. Writes the chamber’s monthly labour-law note for clients.' },
  { name: 'Adaeze Nwosu', role: 'Associate', note: 'Company secretarial and compliance. Manages filings at CAC, SEC and the Lagos State lands registry.' },
] as const;

const MATTERS = [
  ['2025', 'Advised a fintech on its Series A documents and CAC restructuring.', 'Corporate'],
  ['2024', 'Secuted a family estate settlement over contested letters of administration.', 'Estates'],
  ['2024', 'Defended a logistics company in a 41-claimant industrial court action.', 'Labour'],
  ['2023', 'Recovered possession of a Victoria Island property after 6 years of dispute.', 'Property'],
  ['2023', 'Arbitrated a supply disagreement between two FMCG distributors.', 'Arbitration'],
] as const;
export default function App() {
  const [sent, setSent] = useState(false);
  return (
    <div className="ec">
      <header className="mast">
        <div className="mast-in">
          <a className="wordmark" href="#top">Eyiola &amp; Chambers<small>Barristers · Solicitors · Notaries</small></a>
          <a className="mtel" href="tel:012345678">Minute enquiries<b>01 234 5678</b></a>
        </div>
        <nav className="mnav">
          <a className="on" href="#top">Home</a><a href="practice.html">Practice areas</a><a href="#counsel">Counsel</a><a href="#matters">Matters</a><a href="#consult">Request consultation</a>
        </nav>
      </header>
      <section className="hero" id="top">
        <div>
          <h1>Counsel measured by the matters, not the noise.</h1>
          <p className="lede">A Lagos firm of nine, practising company, property, estate and dispute work since 1994. We take fewer files than we could and finish the ones we take.</p>
          <a className="hcta" href="#consult">Request a consultation</a>
        </div>
        <div className="hfacts">
          <div><b>31</b><span>years at the bar, without interruption</span></div>
          <div><b>4</b><span>practice groups, each led by a senior lawyer</span></div>
          <div><b>₦0</b><span>for the first half-hour on any new enquiry</span></div>
        </div>
      </section>
      <section className="sect-h" id="practice">
        <h2>Practice areas</h2><a href="practice.html">All areas in detail →</a>
      </section>
      <section className="practice">
        <div className="pgrid">
          {PRACTICE.slice(0, 6).map((p) => (
            <div className="pcell" key={p.name}><h3>{p.name}</h3><p>{p.note}</p></div>
          ))}
        </div>
      </section>
      <section className="band" id="counsel">
        <div className="b-in">
          <div className="sect-h"><h2>Counsel</h2></div>
          <div className="cgrid">
            {COUNSEL.map((c) => (
              <article className="ccard" key={c.name}>
                <span className="mono-init serif" aria-hidden="true">{c.name[0]}</span>
                <h3>{c.name}</h3>
                <p className="role">{c.role}</p>
                <p className="cnote">{c.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="matters" id="matters">
        <div className="sect-h"><h2>Representative matters</h2></div>
        <div className="led">
          {MATTERS.map((m) => (
            <div className="lrow" key={m[1]}>
              <span className="lyr serif">{m[0]}</span>
              <span className="lbody">{m[1]}</span>
              <span className="ltag">{m[2]}</span>
            </div>
          ))}
        </div>
        <p className="lfoot">Details anonymised to the extent our undertakings require. References available on request.</p>
      </section>
      <section className="consult" id="consult">
        <div className="cs-in">
          <div>
            <h2>Request a consultation</h2>
            <p>Set out the matter in your own words. A lawyer — not a portal — replies within one working day. Privileged from the moment you write.</p>
          </div>
          {sent ? (
            <div className="csok serif">Your request is logged. Counsel will respond within one working day.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Full name<input required placeholder="Your name" /></label>
              <label>Email<input required type="email" placeholder="you@example.com" /></label>
              <label>Nature of matter<select required defaultValue="">
                <option value="" disabled>Choose an area</option>
                {PRACTICE.map((p) => <option key={p.name}>{p.name}</option>)}
                <option>Other</option>
              </select></label>
              <label>Summary<textarea rows={3} required placeholder="A paragraph is enough for the first pass." /></label>
              <button type="submit">Send request</button>
            </form>
          )}
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Eyiola &amp; Chambers · 6 Marina Court, Lagos Island · BN 1994/A</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}