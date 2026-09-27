import { business, IMG_BASE } from '../data/siteData'
import { PageHero, WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'

const gallery = [
  `${IMG_BASE}/2026/04/8-1.webp`,
  `${IMG_BASE}/2026/04/7.webp`,
  `${IMG_BASE}/2026/04/6-1.webp`,
  `${IMG_BASE}/2026/04/5-1.webp`,
  `${IMG_BASE}/2026/04/4-1.webp`,
  `${IMG_BASE}/2026/04/3.webp`,
  `${IMG_BASE}/2026/04/2-2.webp`,
  `${IMG_BASE}/2026/04/1-1.webp`,
]

export default function PressureWash() {
  return (
    <>
      <PageHero
        title="Professional pressure washing solutions"
        text="Pressure washing is a cost-effective, low-maintenance restorative option suitable for a variety of uses, including residential driveways, private pathways, and commercial forecourts."
        image={gallery[0]}
      />

      <section className="section service-detail">
        <div className="container">
          <h3>{business.name} | PRESSURE WASHING</h3>
          <p>
            A professional pressure washing service is a low-maintenance and cost-effective
            restoration solution suitable for a wide range of applications. Modern techniques and
            commercial-grade equipment now provide improved cleaning depth and a longer lifespan
            for your outdoor surfaces. At {business.name}, we efficiently clean and restore your
            exterior spaces with high-quality and affordable pressure washing systems. We are
            pleased to offer the following pressure washing services:
          </p>

          <h4>Residential Exterior Cleaning</h4>
          <p>
            Small residential surface projects require a specialized cleaning approach. That is
            why {business.name} utilizes high-performance pressure washing and soft-washing
            systems for reliable and long-lasting results.
          </p>
          <p>
            Our system is built using adjustable-pressure machinery combined with eco-friendly
            cleaning agents, delivering a spotless, weed-free, and highly resilient finish.
            Pressure washing is an ideal solution for residential properties and various
            applications, including private driveways, brick patios, garden paths, decking, and
            parking areas.
          </p>
          <p>
            Due to its unique combination of speed of execution and long-term restorative
            strength, pressure washing remains our preferred choice for homeowners looking for a
            clean, professional finish that instantly enhances curb appeal.
          </p>

          <h4>Heavy-Duty Surface Restoration &amp; Deep Cleaning</h4>
          <p>
            High-pressure water jetting is one of the most widely used exterior maintenance
            systems. It consists of calibrated water streams directed at hard surfaces to strip
            away years of built-up grime, moss, algae, and stubborn stains, revealing a solid,
            pristine surface underneath.
          </p>
          <p>
            Professional pressure washing is significantly more effective and deep-penetrating
            than traditional manual scrubbing or loose-fill rinsing. Because it creates a
            completely clean, sealed-ready surface, it provides excellent drainage runoff and can
            be easily maintained or sealed by a professional if weather wear occurs over time.
            For property owners, pressure washing offers incredible value, a long service life
            for your existing hardstanding, and high performance under heavy daily foot and
            vehicle traffic.
          </p>

          <div className="service-gallery">
            {gallery.map((src) => (
              <img src={src} alt="Pressure washing project" key={src} />
            ))}
          </div>

          <p>
            We provide free quotes as standard, ensuring you have a clear understanding of all
            costs before any work begins. If you require targeted stain removal, a full driveway
            deep clean, or a comprehensive garden patio restoration, simply contact our friendly
            team to arrange an appointment.
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
