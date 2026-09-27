import { beforeAfterImages, galleryExtraImages, IMG_BASE } from '../data/siteData'
import { PageHero, WhyChooseUs, FreeInspection, GetInTouch, FinalCTA } from '../components/SharedSections'

export default function Gallery() {
  const allImages = [...beforeAfterImages, ...galleryExtraImages]

  return (
    <>
      <PageHero
        title="Gallery"
        text="A selection of our recent block paving, resin, patio, fencing, landscaping and pressure washing projects."
        image={`${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.05-PM-1.jpeg`}
      />

      <section className="section gallery-page">
        <div className="container">
          <div className="gallery-masonry">
            {allImages.map((src, i) => (
              <img src={src} alt={`Project ${i + 1}`} key={src + i} loading="lazy" />
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
