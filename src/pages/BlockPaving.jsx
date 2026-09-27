import { business, IMG_BASE } from '../data/siteData'
import { PageHero, WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'

const gallery = [
  `${IMG_BASE}/2026/04/7f85e937-77c7-4a8c-9c08-3d02d5bd198c-1.jpg`,
  `${IMG_BASE}/2026/04/70e08247-8ea9-4ba6-9d92-aeb11e4d05ec.jpg`,
  `${IMG_BASE}/2026/04/cfb776e4-8d9c-4d0e-8f74-5f98d7865b71-1.jpg`,
]

export default function BlockPaving() {
  return (
    <>
      <PageHero
        title="Groundwork solutions you can trust"
        text={`${business.name} consists of a team of skilled groundwork professionals with extensive industry experience. We provide free, no-obligation quotes for all our services\u2014including expert block paving\u2014along with a 14-day review period, giving you ample time to reconsider or make any necessary adjustments to your project plans.`}
        image={gallery[0]}
      />

      <section className="section service-detail">
        <div className="container">
          <h3>{business.name} | BLOCK PAVING</h3>
          <p>
            At Extreme Landscaping and Gardening Solutions Ltd, we are committed to delivering
            high-quality groundwork solutions that focus on reliability, quality, and
            affordability. Our experienced team brings extensive knowledge and expertise to every
            project, ensuring your paving and landscaping requirements are handled with precision
            and care.
          </p>

          <h4>Our Services</h4>
          <div className="numbered-list">
            <div>
              <strong>1. Block Paving Installation:</strong>
              <p>
                Whether you are enhancing a new property or replacing an old driveway, Extreme
                Landscaping and Gardening Solutions Ltd provides installation services that ensure
                a strong, durable, and visually appealing finish. We work with a wide range of
                premium blocks and patterns to meet your personal preferences and property style.
              </p>
            </div>
            <div>
              <strong>2. Driveway and Patio Repairs:</strong>
              <p>
                Properly installed edging and drainage are vital for a long-lasting driveway.
                Extreme Landscaping and Gardening Solutions Ltd offers expert installation and
                repair services to ensure efficient water runoff, protecting your property's
                foundation from water-related damage.
              </p>
            </div>
            <div>
              <strong>3. Maintenance and Inspections:</strong>
              <p>
                Regular maintenance is essential for prolonging the beauty and integrity of your
                stonework. We perform thorough inspections to identify issues like drainage
                pooling or joint sand loss early, offering professional cleaning and sealing
                solutions to keep your driveway in excellent condition year-round.
              </p>
            </div>
            <div>
              <strong>4. Edging and Drainage Services:</strong>
              <p>
                Properly maintained gutters are vital for effective water drainage. Extreme
                Landscaping and Gardening Solutions Ltd offers installation, repair, and cleaning
                services to help protect your property from water-related damage.
              </p>
            </div>
          </div>

          <h4>Why Choose {business.name}?</h4>
          <div className="numbered-list">
            <div>
              <strong>1. Quality Workmanship:</strong>
              <p>
                Our team is made up of skilled professionals dedicated to delivering
                high-quality workmanship and precision-aligned paving on every project.
              </p>
            </div>
            <div>
              <strong>2. Transparent Pricing:</strong>
              <p>
                We offer clear and honest pricing, ensuring you receive excellent value for your
                investment without compromising on the quality of materials or labor.
              </p>
            </div>
            <div>
              <strong>3. Customer Satisfaction:</strong>
              <p>
                Your satisfaction is our top priority. We strive to exceed expectations by
                providing outstanding service and durable, high-impact results for your home's
                exterior.
              </p>
            </div>
          </div>

          <div className="service-gallery">
            {gallery.map((src) => (
              <img src={src} alt="Block paving project" key={src} />
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
