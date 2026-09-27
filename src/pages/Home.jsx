import { Link } from 'react-router-dom'
import {
  business,
  services,
  whatWeCover,
  beforeAfterImages,
  IMG_BASE,
} from '../data/siteData'
import { WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'
import { ArrowRightIcon, PhoneIcon, CheckIcon } from '../components/Icons'

const heroTrust = [
  'Free, no-obligation quotes',
  '14-day project review period',
  'No inspection charge',
  'Honest, transparent pricing',
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img
            src={`${IMG_BASE}/2026/06/8-11-1024x768.jpeg`}
            alt="Recently completed driveway and patio project"
          />
        </div>
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Professional landscaping &amp; paving services</h1>
            <h2>Trusted driveway, patio &amp; garden specialists</h2>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get a free quote
                <ArrowRightIcon />
              </Link>
              <a
                href={`tel:${business.phoneFreephone.replace(/\s/g, '')}`}
                className="btn btn-outline"
              >
                <PhoneIcon aria-hidden="true" />
                Call {business.phoneFreephone}
              </a>
            </div>
          </div>
        </div>
        <div className="hero-trustbar">
          <div className="container">
            {heroTrust.map((item) => (
              <div className="hero-trustbar-item" key={item}>
                <CheckIcon aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-intro">
        <div className="container">
          <h2>Complete property transformation &amp; surfacing solutions</h2>
          <p>
            From a single cracked patio slab to a full garden and driveway overhaul, our
            groundwork team covers every stage of the job &mdash; design, excavation, drainage
            and the finished surface.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.slug}>
                <div className="service-card-image">
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="service-card-body">
                  <h4>{s.title}</h4>
                  <p>{s.summary}</p>
                  <Link to={`/${s.slug}`} className="link-arrow">
                    Learn more
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section before-after">
        <div className="container">
          <h2>Before &amp; after</h2>
          <div className="before-after-grid">
            {beforeAfterImages.map((src, i) => (
              <img src={src} alt={`Before and after project ${i + 1}`} key={src + i} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section what-we-cover">
        <div className="container">
          <h3>What we cover</h3>
          <p className="section-intro">
            No matter the scale of the landscape project or the season, you can rely on our
            skilled team to deliver high-quality results. We work efficiently and with great
            care, ensuring minimal disruption to your property while maintaining the highest
            standards of workmanship throughout every project.
          </p>
          <div className="cover-columns">
            {whatWeCover.map((column, i) => (
              <ul key={i}>
                {column.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro-block">
        <div className="container">
          <h2>
            Welcome to {business.name}, your trusted specialists delivering first-class
            driveway, patio, and landscaping services. Finding a reliable contractor can be
            challenging, which is why we focus on experience, trust, and fair pricing to make
            your choice simple and stress-free.
          </h2>
          <h2 className="secondary">
            {business.name} has built a strong reputation for quality workmanship and friendly
            service. From bespoke patio design and secure fencing installations to complete new
            block paving, tarmac, and resin driveway systems, we handle every project with care,
            precision, and skill.
          </h2>
          <h2 className="secondary">
            We use only premium-grade materials, commercial-grade deep cleaning systems, and
            proven techniques to ensure durable, long-lasting results, providing every customer
            with complete confidence and peace of mind. Every project completed by{' '}
            {business.name}&mdash;from bespoke structural installations to professional pressure
            washing and exterior restoration&mdash;is built on quality materials and proven
            techniques, ensuring strength, reliability, and lasting performance for years to
            come.
          </h2>
          <Link to="/contact" className="btn btn-primary">
            Get a free quote
            <ArrowRightIcon />
          </Link>
          <div className="intro-gallery">
            <img src={`${IMG_BASE}/2026/06/8-11-1024x768.jpeg`} alt="Recent project" />
            <img src={`${IMG_BASE}/2026/06/8-28.jpeg`} alt="Recent project" />
            <img src={`${IMG_BASE}/2026/06/8-25.jpeg`} alt="Recent project" />
            <img
              src={`${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.05-PM-1.jpeg`}
              alt="Recent project"
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FreeInspection />
      <GetInTouch />
      <FinalCTA />
    </>
  )
}
