import { business, IMG_BASE } from '../data/siteData'
import { PageHero, WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'

const gallery = [
  `${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.01-PM-1-1.jpeg`,
  `${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.01-PM-2-1.jpeg`,
  `${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.01-PM-4.jpeg`,
  `${IMG_BASE}/2026/06/8-7.jpeg`,
  `${IMG_BASE}/2026/06/8-8.jpeg`,
]

export default function Landscaping() {
  return (
    <>
      <PageHero
        title="Landscaping services you can trust"
        subtitle="Hardscaping, soft interiors & garden design"
        text="Extreme Landscaping and Gardening Solutions Ltd supplies and installs high-quality hardscaping, fencing, and turfing solutions. We also provide low-maintenance, weather-resistant landscaping systems designed for long-lasting performance and year-round appeal."
        image={gallery[0]}
      />

      <section className="section service-detail">
        <div className="container">
          <h3>{business.name} | LANDSCAPING</h3>
          <p>
            At Extreme Landscaping and Gardening Solutions Ltd, we understand that a
            high-quality exterior involves more than just a driveway. Professional landscaping,
            fencing, and turfing play an essential role in protecting your property from the
            elements and preserving its structural integrity. Our specialist services ensure
            these components remain in excellent condition, enhancing both the performance and
            curb appeal of your outdoor space.
          </p>

          <h4>Garden Maintenance &amp; Drainage</h4>
          <div className="numbered-list">
            <div>
              <strong>1. Professional Installation:</strong>
              <p>
                Properly designed landscapes are essential for effective water management. At
                Extreme Landscaping and Gardening Solutions Ltd, our specialists install
                high-quality drainage and landscaping systems tailored to your property's layout,
                ensuring efficient water flow and protection against soil erosion.
              </p>
            </div>
            <div>
              <strong>2. Repair and Restoration:</strong>
              <p>
                From minor repairs to full seasonal maintenance, Extreme Landscaping and
                Gardening Solutions Ltd promptly resolves landscaping issues to prevent water
                buildup, lawn saturation, and potential damage to your property's foundation.
              </p>
            </div>
          </div>

          <h4>Fencing and Border Solutions</h4>
          <div className="numbered-list">
            <div>
              <strong>1. Fence Installation and Repair:</strong>
              <p>
                Fencing acts as a protective barrier and privacy screen for your home while
                significantly improving its appearance. At Extreme Landscaping and Gardening
                Solutions Ltd, our installation and repair services ensure your boundaries remain
                strong, durable, and visually appealing.
              </p>
            </div>
            <div>
              <strong>2. Retaining Wall &amp; Border Maintenance:</strong>
              <p>
                Borders and retaining walls help maintain soil stability while providing a clean,
                finished appearance to your garden. At Extreme Landscaping and Gardening
                Solutions Ltd, we offer repair and maintenance services to keep your hardscaping
                in excellent condition, helping to prevent structural shifts and unwanted pest
                intrusion.
              </p>
            </div>
          </div>

          <div className="service-gallery">
            {gallery.map((src) => (
              <img src={src} alt="Landscaping project" key={src} />
            ))}
          </div>

          <p>
            At Extreme Landscaping and Gardening Solutions Ltd, your outdoor environment depends
            on a complete groundwork system, including paving, drainage, fencing, and turfing. We
            provide comprehensive services for all these components, including the installation
            of new surfaces such as resin-bound, tarmac, and block paving systems.
          </p>
          <p>
            We also offer full garden drainage and irrigation replacement solutions tailored to
            your requirements. Our landscaping projects are designed with the correct gradients
            to ensure efficient water runoff, quickly directing heavy rainfall away from your
            property while also considering the impact on neighboring drainage systems where
            applicable.
          </p>
          <p>
            For new builds and complete renovations, we supply a wide range of fencing styles and
            timber products, including closeboard, overlap, decorative trellis, and heavy-duty
            gate options. Our landscaping systems also include matching edging, sleepers, gravel
            boards, and a full range of exterior accessories, providing a clean and professional
            finishing touch to any property.
          </p>
        </div>
      </section>

      <WhyChooseUs />
      <FreeInspection />
      <GetInTouch />
      <FinalCTA />
    </>
  )
}
