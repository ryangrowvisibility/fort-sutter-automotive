import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 447-7182";
const TEL = "tel:+19164477182";
const ADDRESS = "1705 19th St, Sacramento, CA 95811";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Fort%20Sutter%20Automotive&query_place_id=ChIJ4VSy9t3QmoARgcS3fAcBtl0";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=1705%2019th%20St%2C%20Sacramento%2C%20CA%2095811";
const FACEBOOK = "https://www.facebook.com/p/Fort-Sutter-Automotive-100057331995161/";

const services = [
  { icon: "drop", name: "Oil Changes", text: "Oil and filter changes on your schedule, with a quick look at fluids, belts and tires so small problems get caught early." },
  { icon: "disc", name: "Brake Repair", text: "Pads, rotors and brake service. We show you what's worn, tell you what can wait, and quote the job before we touch it." },
  { icon: "waves", name: "Exhaust Repair", text: "Leaks, rattles, and exhaust getting into the cabin. One customer drove with the windows down until Nick found and fixed hers while she waited.", featured: true },
  { icon: "search", name: "Engine Diagnostics", text: "Check engine light or a problem you can't pin down? We diagnose it properly and explain it in plain English before recommending anything." },
  { icon: "cog", name: "Tune-Ups", text: "Plugs, filters and the scheduled work that keeps an engine running smoothly and efficiently for years." },
  { icon: "car", name: "Maintenance for the Whole Family", text: "Routine service for every car in the household. Many of our customers have trusted us with their family's vehicles for years, some for decades." },
];

const reviews = [
  { name: "Candy C.", job: "Customer for 45 years", text: "I've been going to Fort Sutter for 45 years. Nick is the third owner and has followed in the footsteps of the other two. The service is impeccable, reliable, and above all honest." },
  { name: "Mina P.", job: "Customer for 3 years", text: "I've been going to Nick and Anna for all my automotive troubles. They're accommodating with scheduling and do repairs in a timely manner. A friendly, welcoming family-owned shop. As a woman I used to worry about being overcharged, and I have never once felt that way here." },
  { name: "Nicole S.", job: "Exhaust repair", text: "Having a trustworthy mechanic matters. Years ago Nick fixed a problem that had exhaust coming into the cabin, while I waited and for a reasonable price. They've been my go-to ever since." },
  { name: "Melanie L.", job: "Repeat customer", text: "The amount of trust I have in this business far surpasses any experience I've had in similar situations. I wouldn't take my car anywhere else." },
  { name: "Brian O.", job: "Repair", text: "Very fast and honest." },
  { name: "Nicolas R.", job: "Repeat customer", text: "Always an amazing experience and the best work." },
];

const reasons = [
  { icon: "heart", title: "Family-owned", text: "Nick and Anna run the shop, and you'll deal with them directly." },
  { icon: "thumb", title: "Honest estimates", text: "We recommend what your car needs, not what pads a bill." },
  { icon: "award", title: "NAPA AutoCare Center", text: "Part of the NAPA AutoCare network of independent shops." },
  { icon: "clock", title: "Timely repairs", text: "Flexible scheduling, and many jobs done while you wait." },
];

const steps = [
  { title: "Call the shop", text: `Call ${PHONE}, Monday to Friday, 8 a.m. to 5 p.m. Tell us what the car is doing.` },
  { title: "Drop it off or wait", text: "Bring it to 1705 19th St in Midtown. For smaller jobs you can often wait while we work." },
  { title: "Hear it straight", text: "We explain what we found and give you a fair price. Nothing gets done until you say so." },
  { title: "Drive away confident", text: "Your car is ready when we said it would be, and we stand by the work." },
];

const faqs = [
  { q: "Where are you located?", a: "1705 19th St, Sacramento, CA 95811, in Midtown between downtown and East Sacramento." },
  { q: "What are your hours?", a: "Monday to Friday, 8 a.m. to 5 p.m. We're closed Saturday and Sunday." },
  { q: "Is Fort Sutter Automotive really family-owned?", a: "Yes. Nick is the shop's third owner and runs it with Anna. One of our customers has been coming here for 45 years, through all three owners." },
  { q: "Will you try to upsell me?", a: "No. We tell you what your car needs and what can wait. Our customers say they've never felt overcharged here." },
  { q: "Can I wait while my car is repaired?", a: "For many smaller jobs, yes. Call ahead and we'll tell you whether yours is a wait-while-you-go repair." },
  { q: "Are you a NAPA AutoCare Center?", a: "Yes, Fort Sutter Automotive is a NAPA AutoCare Center." },
  { q: "Do you work on all the cars in my household?", a: "Yes. We handle routine maintenance and repairs for everyday cars, and many families bring us every vehicle they own." },
];

const area = ["Midtown", "Downtown Sacramento", "East Sacramento", "Land Park", "Greater Sacramento"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Fort Sutter Automotive",
  telephone: "+1-916-447-7182",
  address: { "@type": "PostalAddress", streetAddress: "1705 19th St", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95811", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 38.569034, longitude: -121.4845508 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "59" },
  sameAs: [FACEBOOK, MAPS],
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
};

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-head text-[1.35rem] font-bold ${light ? "text-white" : "text-ink"}`}>Fort Sutter</span>
      <span className={`mt-1 text-sm font-semibold ${light ? "text-white/70" : "text-brand"}`}>Automotive &middot; Midtown Sacramento</span>
    </span>
  );
}

function Arrow() {
  return <span className="nub"><Icon name="arrow" className="h-4 w-4" /></span>;
}

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hidden border-b border-line bg-tint text-[15px] text-muted md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-brand" /> {ADDRESS}</span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4 text-brand" /> Mon to Fri, 8 a.m. to 5 p.m.</span>
            <span className="flex items-center gap-2"><Icon name="award" className="h-4 w-4 text-brand" /> NAPA AutoCare Center</span>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" aria-label="Fort Sutter Automotive home"><Wordmark /></a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">Our Shop</a>
            <a href="#location" className="hover:text-brand">Location</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="num hidden font-bold text-ink hover:text-brand md:inline">{PHONE}</a>
            <a href={TEL} className="btn btn-cta btn-plain hidden !min-h-[46px] md:inline-flex">Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-full bg-cta text-white md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-6 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1 text-sm font-semibold text-brand-dark">
                <Icon name="heart" className="h-4 w-4" /> Family-owned, trusted for decades
              </p>
              <h1 className="text-ink" style={{ fontSize: "clamp(2.25rem, 4.8vw, 3.6rem)" }}>
                Family-Owned Auto Repair in Midtown Sacramento
              </h1>
              <p className="lede mt-6 text-xl text-muted">
                Oil changes, brakes, exhaust and engine diagnostics from Nick, Anna and the crew at 19th Street. Honest estimates, fair prices and repairs done on time, the way this shop has worked through three owners.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE} <Arrow /></a>
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn btn-line">Get directions <span className="nub"><Icon name="route" className="h-4 w-4" /></span></a>
              </div>
              <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-semibold text-ink">
                <Stars className="h-5 w-5" />
                <span className="num">4.8 from 59 Google reviews</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>NAPA AutoCare Center</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Family-owned</span>
              </p>
            </div>

            <figure className="card p-8 md:p-10">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-5 font-head text-[1.4rem] leading-snug text-ink">
                &ldquo;I&apos;ve been going to Fort Sutter for 45 years. The service is impeccable, reliable, and above all honest.&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft font-head font-bold text-brand-dark">C</span>
                <span><span className="block font-bold">Candy C.</span><span className="block text-[15px] text-muted">Google review</span></span>
              </figcaption>
              <dl className="mt-6 grid grid-cols-2 gap-3 text-[15px]">
                <div className="rounded-xl bg-tint p-3.5"><dt className="text-muted">Hours</dt><dd className="font-bold">Mon to Fri, 8 to 5</dd></div>
                <div className="rounded-xl bg-tint p-3.5"><dt className="text-muted">Find us</dt><dd className="font-bold">19th St, Midtown</dd></div>
              </dl>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why drivers trust us" className="border-y border-line bg-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star", label: "4.8 stars on Google", sub: "59 reviews" },
              { icon: "award", label: "NAPA AutoCare", sub: "Center" },
              { icon: "heart", label: "Family-owned", sub: "Nick & Anna" },
              { icon: "users", label: "Decades of regulars", sub: "one for 45 years" },
            ].map((t) => (
              <li key={t.label} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={t.icon} className="h-5 w-5" /></span>
                <span><span className="block font-bold leading-tight">{t.label}</span><span className="text-[15px] text-muted">{t.sub}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <h2 className="text-3xl md:text-[2.5rem]">What we take care of</h2>
              <p className="lede mt-4 text-lg text-muted">Everyday repair and maintenance for the cars Sacramento families actually drive.</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`card card-hover reveal flex flex-col p-7 ${s.featured ? "ring-2 ring-brand" : ""}`}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <h3 className="mt-5 text-xl">{s.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-2 font-bold text-brand-dark hover:text-brand">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl md:text-[2.5rem]">Rated 4.8 from 59 Google reviews</h2>
                <p className="lede mt-4 text-lg text-muted">Honest, trustworthy, family. That&apos;s what Midtown drivers keep saying.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line shrink-0">Read all reviews on Google <Arrow /></a>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="card reveal flex flex-col p-7">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-head font-bold text-brand-dark">{r.name[0]}</span>
                    <span><span className="block font-bold">{r.name}</span><span className="block text-[15px] text-muted">{r.job}</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="text-3xl md:text-[2.5rem]">A Midtown shop with a long memory</h2>
              <div className="lede mt-6 space-y-5 text-lg text-muted">
                <p>Fort Sutter Automotive has been fixing cars on 19th Street for a long time. One of our customers has been coming here for 45 years, through three owners. Today the shop is run by Nick, its third owner, together with Anna.</p>
                <p>Nick has kept what made the place worth coming back to: careful work, fair prices and straight answers. You talk to the people who will work on your car, they explain what&apos;s wrong in plain language, and they never push repairs you don&apos;t need.</p>
                <p>It&apos;s a small, welcoming, family-owned shop, the kind where people feel safe dropping off their car and where nobody worries about being overcharged.</p>
              </div>
            </div>
            <ul className="grid content-start gap-5 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r.title} className="card reveal p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cta text-white"><Icon name={r.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg">{r.title}</h3>
                  <p className="mt-1 text-muted">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="reveal text-3xl md:text-[2.5rem]">How it works</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="card reveal p-7">
                  <span className="num font-head text-4xl font-bold text-brand">{i + 1}</span>
                  <h3 className="mt-3 text-xl">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="text-3xl md:text-[2.5rem]">Visit us on 19th Street</h2>
              <p className="lede mt-4 text-lg text-muted">We&apos;re at <strong className="text-ink">{ADDRESS}</strong>, an easy drop-off for anyone living or working in Midtown and downtown.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.map((a) => <li key={a} className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 font-semibold text-brand-dark"><Icon name="pin" className="h-4 w-4" /> {a}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn btn-line">Get directions <span className="nub"><Icon name="route" className="h-4 w-4" /></span></a>
              </div>
            </div>
            <div className="reveal overflow-hidden rounded-[18px] shadow-[0_18px_40px_-28px_oklch(0.35_0.05_45/0.4)]">
              <iframe title="Map to Fort Sutter Automotive, 1705 19th St, Sacramento" src="https://maps.google.com/maps?q=1705%2019th%20St%2C%20Sacramento%2C%20CA%2095811&z=15&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="reveal text-3xl md:text-[2.5rem]">Frequently asked questions</h2>
            <div className="card mt-10 divide-y divide-line">
              {faqs.map((f) => (
                <details key={f.q} className="px-7 py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl md:text-[2.5rem]">Ready for a mechanic you can trust?</h2>
              <p className="mt-3 text-lg text-white/85">Call Nick and Anna at {PHONE}. Open Monday to Friday, 8 a.m. to 5 p.m.</p>
            </div>
            <a href={TEL} className="btn bg-white text-lg text-brand-dark hover:bg-brand-soft"><Icon name="phone" className="h-5 w-5" /> Call {PHONE} <span className="nub !bg-brand-soft"><Icon name="arrow" className="h-4 w-4" /></span></a>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-white/75">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <Wordmark light />
            <p className="mt-4 max-w-sm">Fort Sutter Automotive F/D, Inc. Family-owned auto repair in Midtown Sacramento. NAPA AutoCare Center.</p>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Fort Sutter Automotive on Facebook" className="mt-5 inline-grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><Icon name="facebook" className="h-5 w-5" /></a>
          </div>
          <div>
            <h3 className="text-lg text-white">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li><a href={TEL} className="num hover:text-white">{PHONE}</a></li>
              <li>{ADDRESS}</li>
              <li>Mon to Fri: 8 a.m. to 5 p.m.</li>
              <li>Sat &amp; Sun: Closed</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-white">Google reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white">Services</h3>
            <ul className="mt-3 space-y-2">{services.map((s) => <li key={s.name}><a href="#services" className="hover:text-white">{s.name}</a></li>)}</ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm text-white/55">&copy; {new Date().getFullYear()} Fort Sutter Automotive. Sacramento, California.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 md:hidden">
        <a href={TEL} className="btn btn-cta btn-plain !min-h-[48px]"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-plain !min-h-[48px]"><Icon name="route" className="h-5 w-5" /> Directions</a>
      </div>
    </>
  );
}
