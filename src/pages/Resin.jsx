import { business, IMG_BASE } from '../data/siteData'
import { PageHero, WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'

const gallery = [
  `${IMG_BASE}/2026/04/img7-1.jpg`,
  `${IMG_BASE}/2026/04/img6-1.jpg`,
  `${IMG_BASE}/2026/04/img10-1.jpg`,
  `${IMG_BASE}/2026/04/img12-1.jpg`,
  `${IMG_BASE}/2026/04/1be716ee-a4de-4823-ba4f-5ae19e44fb2d-2.jpg`,
]

export default function Resin() {
  return (
    <>
      <PageHero
        title="Professional resin driveway services"
        text={`If your existing driveway, pathway, or patio has suffered significant wear, cracking, or structural damage beyond simple maintenance, ${business.name} provides comprehensive resin surfacing solutions for a wide range of property types. Whether you require targeted surface restoration or a complete new resin installation, you can rely on us to handle your requirements with a full and professional service.`}
        image={gallery[0]}
      />

      <section className="section service-detail">
        <div className="container">
          <h3>{business.name} | RESIN SURFACING</h3>
          <p>
            Investing in a new resin surface is a major decision for any property owner. At{' '}
            {business.name}, we understand the importance of a strong, reliable, and visually
            appealing foundation. Our comprehensive resin installation services are tailored to
            your specific needs, delivering expert workmanship and durable materials designed to
            last for years to come.
          </p>

          <h4>Customized Solutions</h4>
          <p>
            At {business.name}, we recognize that every property is different, which is why we
            provide a variety of resin colors, textures, and finishes to match your preferences
            and suit the design of your home or business. Our experienced team works closely with
            you to understand your requirements, offering expert advice to help you choose the
            most suitable surfacing solution.
          </p>

          <h4>Our Process</h4>
          <div className="numbered-list">
            <div>
              <strong>1. Consultation:</strong>
              <p>
                We start with a detailed consultation to evaluate your requirements, explore
                available material options, and answer any questions or concerns you may have
                about the installation process.
              </p>
            </div>
            <div>
              <strong>2. Tailored Proposal:</strong>
              <p>
                Following the consultation, {business.name} provides a detailed proposal
                outlining the full scope of work, selected materials, project schedule, and
                transparent pricing for your approval.
              </p>
            </div>
            <div>
              <strong>3. Efficient Installation:</strong>
              <p>
                {business.name}'s skilled professionals carry out each installation with
                precision and efficiency, following industry standards and strict safety
                protocols to deliver a high-quality, seamless final result.
              </p>
            </div>
            <div>
              <strong>4. Quality Assurance:</strong>
              <p>
                Once the work is complete, {business.name} performs detailed inspections to
                ensure the new resin surface meets our high-quality standards and fully satisfies
                your expectations.
              </p>
            </div>
          </div>

          <h4>Why Choose {business.name}?</h4>
          <div className="numbered-list">
            <div>
              <strong>Expertise and Experience:</strong>
              <p>
                Our team brings years of industry experience and the expertise needed to manage
                resin bound and bonded installations of all levels of complexity.
              </p>
            </div>
            <div>
              <strong>Quality Materials:</strong>
              <p>
                {business.name} sources premium-quality UV-stable resins and natural aggregates
                from trusted suppliers, ensuring long-lasting durability and a stunning aesthetic
                finish.
              </p>
            </div>
            <div>
              <strong>Customer-Centric Approach:</strong>
              <p>
                We prioritize clear communication, professionalism, and complete customer
                satisfaction, ensuring a smooth and seamless experience from beginning to end.
              </p>
            </div>
          </div>

          <div className="service-gallery">
            {gallery.map((src) => (
              <img src={src} alt="Resin surfacing project" key={src} />
            ))}
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
