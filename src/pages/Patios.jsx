import { business, IMG_BASE } from '../data/siteData'
import { PageHero, WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'

const gallery = [
  `${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.06-PM-2.jpeg`,
  `${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.10-PM.jpeg`,
  `${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.09-PM-3.jpeg`,
  `${IMG_BASE}/2026/04/2-1.webp`,
  `${IMG_BASE}/2026/04/1.webp`,
]

const listA = [
  'Bespoke Patio Design & Complete Installation',
  'Natural Stone, Sandstone, Slate, and Granite Paving',
  'Contemporary Porcelain Tiling and External Grouting',
  'Professional Re-pointing and Joint Restoration',
  'Sunken Paving Correction and Slab Leveling',
]

const listB = [
  'Sub-base Reinforcement and Foundation Stabilization',
  'Step Construction and Retaining Wall Repairs',
  'Patio Drainage Systems and Soakaway Corrections',
  'Weed Removal, Deep Cleaning, and Protective Sealing',
  'Surface Leveling and Long-Term Foundation Stabilization',
]

export default function Patios() {
  return (
    <>
      <PageHero
        title="Patio solutions you can trust every time"
        text="Patios can be compromised by natural factors such as severe weather conditions, shifting soil, or poor initial installation. Whatever the cause, it is essential to address any sinking slabs, cracking joints, or surface instability promptly to avoid further deterioration and more costly structural issues for your outdoor living space."
        image={gallery[0]}
      />

      <section className="section service-detail">
        <div className="container">
          <h3>{business.name} | PATIOS</h3>
          <p>
            At {business.name}, we understand the inconvenience and potential risks that even
            minor patio damage or poor site preparation can create. Our dedicated patio
            installation and restoration services are designed to quickly and effectively resolve
            any issues, helping to maintain the strength, beauty, and long-term stability of your
            outdoor spaces.
          </p>

          <h4>Complete Groundwork Solutions</h4>
          <div className="numbered-list">
            <div>
              <strong>1. Surface Leveling and Subsidence Repair:</strong>
              <p>
                If left unresolved, shifting earth or sinking paving stones can compromise the
                structure and cause dangerous trip hazards or water pooling. Our experienced team
                carries out detailed inspections to identify foundational shifts and stabilize
                the sub-base, helping to prevent further damage to your property.
              </p>
            </div>
            <div>
              <strong>2. Slab Replacement and Stone Restoration:</strong>
              <p>
                Cracked, loose, or broken patio slabs can reduce the effectiveness of your
                landscape's drainage and ruin its overall usability. We specialize in precision
                slab replacement and stone restoration, renewing your patio's durability and
                resistance against heavy foot traffic and harsh weather conditions.
              </p>
            </div>
            <div>
              <strong>3. Pointing and Joint Restoration:</strong>
              <p>
                Damaged mortar, eroding grout, or loose jointing sand can impact both the look of
                your final surface and its long-term stability. Our repair and installation
                services restore the integrity of the joints, preventing stubborn weed growth and
                maintaining a clean, reliable, and solid finish.
              </p>
            </div>
            <div>
              <strong>4. Drainage and Runoff Correction:</strong>
              <p>
                Poor water management on your patio can lead to severe pooling, damp issues, and
                foundation erosion. We provide corrective drainage solutions, surface grading, and
                proper runoff channeling to ensure water flows efficiently away from your
                property, protecting your foundations.
              </p>
            </div>
          </div>

          <div className="service-gallery">
            {gallery.map((src) => (
              <img src={src} alt="Patio project" key={src} />
            ))}
          </div>

          <p className="section-lead">
            We undertake all patio design, installation, and repair including but not limited to:
          </p>
          <div className="cover-columns two">
            <ul>
              {listA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul>
              {listB.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
