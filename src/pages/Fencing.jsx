import { business, IMG_BASE } from '../data/siteData'
import { PageHero, WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'

const gallery = [
  `${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.02-PM-3.jpeg`,
  `${IMG_BASE}/2026/04/14.webp`,
  `${IMG_BASE}/2026/04/12.webp`,
  `${IMG_BASE}/2026/04/11.webp`,
  `${IMG_BASE}/2026/04/9.webp`,
  `${IMG_BASE}/2026/04/8.webp`,
  `${IMG_BASE}/2026/04/6.webp`,
  `${IMG_BASE}/2026/04/5.webp`,
  `${IMG_BASE}/2026/04/4.webp`,
  `${IMG_BASE}/2026/04/2.webp`,
]

export default function Fencing() {
  return (
    <>
      <PageHero
        title="Fencing installation & repair you can trust"
        text="Extreme Landscaping and Gardening Solutions Ltd specialises in comprehensive fencing installations, panel repairs, and detailed boundary work. Whether restoring a deteriorated fence line or ensuring reliable security and privacy with expertly installed heavy-duty panels, our team is fully equipped to handle these specialist landscaping tasks with precision and care."
        image={gallery[0]}
      />

      <section className="section service-detail">
        <div className="container">
          <h3>{business.name} | FENCING</h3>
          <p>
            A well-maintained boundary is essential for both the security and privacy of your
            property. Extreme Landscaping and Gardening Solutions Ltd provides specialist fencing
            services to ensure your perimeter remains structurally sound, fully functional, and
            visually appealing.
          </p>

          <h4>Our Fencing &amp; Boundary Solutions</h4>
          <div className="numbered-list">
            <div>
              <strong>1. Panel and Post Repair:</strong>
              <p>
                Over time, wooden fencing can deteriorate due to weather exposure, rot, or high
                winds. At Extreme Landscaping and Gardening Solutions Ltd, our specialists carry
                out repairs to resolve issues such as leaning posts, broken panels, and weakened
                support structures.
              </p>
            </div>
            <div>
              <strong>2. Gravel Board &amp; Kick Plate Installation:</strong>
              <p>
                Properly installed gravel boards help prevent moisture from the ground from
                rotting your fence panels, extending the life of your installation. At Extreme
                Landscaping and Gardening Solutions Ltd, we install or replace these protective
                barriers to maintain the strength and reliability of your fencing system.
              </p>
            </div>
            <div>
              <strong>3. Custom Gate Installation:</strong>
              <p>
                A secure gate serves as a primary access point and a protective barrier for your
                home. At Extreme Landscaping and Gardening Solutions Ltd, we provide professional
                installation of high-quality gates to ensure your property remains secure and
                easy to access.
              </p>
            </div>
            <div>
              <strong>4. Boundary Reinforcement:</strong>
              <p>
                Damaged or deteriorating fence lines can affect both security and curb appeal. At
                Extreme Landscaping and Gardening Solutions Ltd, we inspect, reinforce, or replace
                entire sections to ensure they meet modern durability standards and improve the
                overall look of your garden.
              </p>
            </div>
          </div>

          <h4>Why Choose Extreme Landscaping and Gardening Solutions Ltd for Fencing?</h4>
          <div className="numbered-list">
            <div>
              <strong>1. Specialist Expertise:</strong>
              <p>
                Our skilled professionals have extensive experience in fencing installation and
                restoration, delivering precise and long-lasting solutions.
              </p>
            </div>
            <div>
              <strong>2. Thorough Inspections:</strong>
              <p>
                We carry out detailed site surveys to accurately identify the best materials and
                layouts for your specific land boundaries.
              </p>
            </div>
            <div>
              <strong>3. Quality Workmanship:</strong>
              <p>
                From post-setting to decorative trellis work, we use high-quality,
                pressure-treated timber and expert craftsmanship to ensure durable, reliable
                results.
              </p>
            </div>
          </div>

          <div className="service-gallery">
            {gallery.map((src) => (
              <img src={src} alt="Fencing project" key={src} />
            ))}
          </div>

          <h4>Safeguard Your Fencing Today</h4>
          <p>
            Don't overlook the importance of a well-maintained fence. Contact Extreme Landscaping
            and Gardening Solutions Ltd for professional fencing and boundary services. Let us
            ensure your perimeter is in optimal condition, delivering security, privacy, and
            complete peace of mind for your property.
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
