import { Link } from 'react-router-dom'
import { business, coreValues, IMG_BASE } from '../data/siteData'
import { ArrowRightIcon, CheckIcon, PhoneIcon, MailIcon } from './Icons'

export function WhyChooseUs() {
  return (
    <section className="section why-choose">
      <div className="container two-col">
        <div className="col-image">
          <img src={`${IMG_BASE}/2026/04/12.webp`} alt="Completed project" />
        </div>
        <div className="col-text">
          <h2>Why choose {business.name}</h2>
          <p>
            At {business.name}, our mission is straightforward: to deliver professional and
            reliable driveway, paving, and landscaping services that both homeowners and
            businesses can trust. Over the years, we have established a solid reputation for
            high-quality workmanship and results that stand the test of time.
          </p>
          <h3>Our core values guide everything we do</h3>
          <ul className="core-values">
            {coreValues.map((v) => (
              <li key={v.title}>
                <CheckIcon aria-hidden="true" />
                <strong>{v.title}</strong> &ndash; {v.text}
              </li>
            ))}
          </ul>
          <p>
            Finding a dependable outdoor and surfacing specialist shouldn't be a challenge. At{' '}
            {business.name}, we go the extra mile to provide reliable service and exceptional
            quality on every block paving, tarmac, and fencing project we undertake.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get a free quote
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function FreeInspection() {
  return (
    <section className="section free-inspection">
      <div className="container two-col reverse">
        <div className="col-text">
          <h2>Free site inspection &ndash; no obligation required</h2>
          <p>
            At {business.name}, we take immense pride in delivering top-tier paving,
            hardscaping, and landscaping services. Our experienced team utilizes premium tools
            and proven techniques to ensure every driveway, patio, and outdoor space is durable,
            aesthetically pleasing, and meticulously constructed.
          </p>
          <p>
            Every project is managed with complete care and meticulous attention to detail. We
            never rush or cut corners, because we understand that whether we are installing a
            resin bound surface, putting up secure boundary fencing, or performing a restorative
            pressure wash, precision is essential for enhancing your property's curb appeal and
            maintaining its long-term value.
          </p>
          <p>
            Ready to book your free site inspection? Simply click the button below to fill out
            our quick form, and the team at {business.name} will arrange a visit at a time that
            is most convenient for you.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get a free quote
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="col-image">
          <img src={`${IMG_BASE}/2026/06/8-5-1024x768.jpeg`} alt="Site inspection" />
        </div>
      </div>
    </section>
  )
}

export function GetInTouch() {
  return (
    <section className="section get-in-touch">
      <div className="container">
        <h2>Get a free quotation</h2>
        <p className="get-in-touch-text">
          Reach out to {business.name} for prompt and reliable driveway installation, surfacing,
          and landscaping services. Our skilled team is ready to conduct a comprehensive,
          no-obligation site inspection for your block paving, tarmac, or patio projects to
          provide an estimate you can depend on.
        </p>
        <div className="contact-cards">
          <a href={`tel:${business.phoneFreephone.replace(/\s/g, '')}`} className="contact-card">
            <span className="contact-card-icon">
              <PhoneIcon aria-hidden="true" />
            </span>
            <span>
              <h4>Freephone</h4>
              <p>{business.phoneFreephone}</p>
            </span>
          </a>
          <a href={`tel:${business.phoneMobile.replace(/\s/g, '')}`} className="contact-card">
            <span className="contact-card-icon">
              <PhoneIcon aria-hidden="true" />
            </span>
            <span>
              <h4>Mobile</h4>
              <p>{business.phoneMobile}</p>
            </span>
          </a>
          <a href={`mailto:${business.email}`} className="contact-card">
            <span className="contact-card-icon">
              <MailIcon aria-hidden="true" />
            </span>
            <span>
              <h4>Email us</h4>
              <p>{business.email}</p>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="container final-cta-inner">
        <h2>{business.name}</h2>
        <p>
          {business.name} proudly delivers high-quality paving, driveway, and landscaping
          solutions for both residential and commercial properties. Our dedicated team is
          committed to excellence, focusing on precision workmanship and complete customer
          satisfaction across every project, from bespoke patio installations and secure fencing
          to complete block paving and tarmac surfaces. By combining industry expertise with a
          passion for exterior transformations, we ensure that every resin driveway, landscaping,
          or pressure washing restoration project is executed to the highest standards, providing
          a professional finish that enhances the value and functionality of your property.
        </p>
        <p>
          Contact {business.name} today to schedule your free, no-obligation estimate, available
          for all properties.
        </p>
        <div className="final-cta-buttons">
          <Link to="/contact" className="btn btn-primary">
            Get a free estimate
            <ArrowRightIcon />
          </Link>
          <a
            href={`tel:${business.phoneFreephone.replace(/\s/g, '')}`}
            className="btn btn-outline"
          >
            <PhoneIcon aria-hidden="true" />
            Call us today
          </a>
        </div>
      </div>
    </section>
  )
}

export function PageHero({ title, subtitle, text, image }) {
  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero-media">
          <img src={image} alt="" aria-hidden="true" />
        </div>
      )}
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        {text && <p>{text}</p>}
        <Link to="/contact" className="btn btn-primary">
          Contact us
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  )
}
