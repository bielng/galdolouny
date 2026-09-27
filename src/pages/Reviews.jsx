import { useState } from 'react'
import { reviews, IMG_BASE } from '../data/siteData'
import { PageHero, WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'
import { QuoteIcon } from '../components/Icons'

export default function Reviews() {
  const [form, setForm] = useState({ name: '', heading: '', testimonial: '', rating: 5 })
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
      <PageHero
        title="Customer reviews"
        text="See what our customers have to say about working with us."
        image={`${IMG_BASE}/2026/04/12.webp`}
      />

      <section className="section reviews-page">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((r) => (
              <article className="review-card" key={r.name + r.title}>
                <QuoteIcon className="review-quote-icon" aria-hidden="true" />
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <p className="review-author">&mdash; {r.name}</p>
              </article>
            ))}
          </div>

          <div className="testimonial-form-wrap">
            <h3>Leave a Testimonial</h3>
            {submitted ? (
              <p className="form-success">Thank you for your feedback! Your testimonial has been submitted.</p>
            ) : (
              <form className="testimonial-form" onSubmit={handleSubmit}>
                <label>
                  Full Name <span className="req">*</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What is your full name?"
                    required
                  />
                </label>
                <label>
                  Heading
                  <input
                    type="text"
                    name="heading"
                    value={form.heading}
                    onChange={handleChange}
                    placeholder="A headline for your testimonial."
                  />
                </label>
                <label>
                  Testimonial <span className="req">*</span>
                  <textarea
                    name="testimonial"
                    rows="5"
                    value={form.testimonial}
                    onChange={handleChange}
                    placeholder="What do you think about us?"
                    required
                  />
                </label>
                <label>
                  Star Rating
                  <select name="rating" value={form.rating} onChange={handleChange}>
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option value={n} key={n}>
                        {n} Star{n > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </label>
                <button type="submit" className="btn btn-primary">
                  Submit Testimonial
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
