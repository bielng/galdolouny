import { useState } from 'react'
import { business, IMG_BASE } from '../data/siteData'
import { WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'
import { PhoneIcon, MailIcon } from '../components/Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-media">
          <img src={`${IMG_BASE}/2026/06/8-5-1024x768.jpeg`} alt="" aria-hidden="true" />
        </div>
        <div className="container">
          <h1>Contact us</h1>
          <h3>Contact details</h3>
          <p>
            If you have any enquiries or would like a no-obligation quote, please feel free to
            get in touch with us.
          </p>
        </div>
      </section>

      <section className="section contact-page">
        <div className="container two-col">
          <div className="col-text">
            <div className="contact-cards stacked">
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

          <div className="col-form">
            <h3>Get a free quotation</h3>
            {submitted ? (
              <p className="form-success">
                Thanks for getting in touch! We'll be in contact shortly to arrange your free,
                no-obligation quote.
              </p>
            ) : (
              <form className="quote-form" onSubmit={handleSubmit}>
                <label>
                  Full Name
                  <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
                </label>
                <label>
                  Tell us about your project
                  <textarea name="message" rows="5" value={form.message} onChange={handleChange} />
                </label>
                <button type="submit" className="btn btn-primary">
                  Request Free Quote
                </button>
              </form>
            )}
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
