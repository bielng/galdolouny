import { Link } from 'react-router-dom'
import { business, navLinks } from '../data/siteData'
import { PhoneIcon, MailIcon, ArrowRightIcon } from './Icons'

export default function Footer() {
  const serviceLinks = navLinks.filter((l) =>
    ['BLOCK PAVING', 'RESIN', 'PATIOS', 'FENCING', 'LANDSCAPING', 'PRESSURE WASHING'].includes(
      l.label
    )
  )
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <h3>Ready to start your project?</h3>
          <Link to="/contact" className="btn btn-primary">
            Get a free quote
            <ArrowRightIcon />
          </Link>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-col footer-about">
          <img src={business.logo} alt={business.name} className="footer-logo" />
          <p>
            Extreme Landscaping & Gardening Solutions Ltd specializes in professional property
            transformations, including block paving, tarmac driveways, and pristine resin bound
            surfaces. Our expert team is dedicated to enhancing your home's curb appeal through
            precision landscaping, bespoke patios, and secure fencing installations. Using premium
            materials and proven techniques, we ensure every project is durable, aesthetic, and
            built to last.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick info</h4>
          <p className="footer-info-item">
            <PhoneIcon aria-hidden="true" />
            <span>
              <strong>Freephone</strong>
              <a href={`tel:${business.phoneFreephone.replace(/\s/g, '')}`}>
                {business.phoneFreephone}
              </a>
            </span>
          </p>
          <p className="footer-info-item">
            <PhoneIcon aria-hidden="true" />
            <span>
              <strong>Mobile</strong>
              <a href={`tel:${business.phoneMobile.replace(/\s/g, '')}`}>{business.phoneMobile}</a>
            </span>
          </p>
          <p className="footer-info-item">
            <MailIcon aria-hidden="true" />
            <span>
              <strong>Email us</strong>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </span>
          </p>
        </div>

        <div className="footer-col">
          <h4>Our services</h4>
          <ul className="footer-links">
            {serviceLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright &copy; {year} {business.name} (Comp Reg. # {business.companyReg}). All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}
