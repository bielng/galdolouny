// Centralised site content & assets.
// Images are referenced from the live site's media library so the
// project doesn't need to bundle large binary assets.
export const IMG_BASE = 'https://extremelandscapingandgardeningsolutions.co.uk/wp-content/uploads'

export const business = {
  name: 'Extreme Landscaping & Gardening Solutions Ltd',
  tagline: 'Your Complete Outdoor Maintenance Specialists.',
  phoneFreephone: '0800 0014840',
  phoneMobile: '07555 142033',
  email: 'extremelandscaping@mail.com',
  companyReg: '16898435',
  logo: `${IMG_BASE}/2026/06/Gemini_Generated_Image_lcllflcllflcllfl-removebg-preview.png`,
}

export const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'BLOCK PAVING', to: '/block-paving' },
  { label: 'RESIN', to: '/resin' },
  { label: 'PATIOS', to: '/patios' },
  { label: 'LANDSCAPING', to: '/landscaping' },
  { label: 'FENCING', to: '/fencing' },
  { label: 'PRESSURE WASHING', to: '/pressure-wash' },
  { label: 'GALLERY', to: '/gallery' },
  { label: 'CUSTOMER REVIEWS', to: '/reviews' },
  { label: 'CONTACT', to: '/contact' },
]

export const services = [
  {
    slug: 'block-paving',
    title: 'Block Paving',
    image: `${IMG_BASE}/2026/04/7f85e937-77c7-4a8c-9c08-3d02d5bd198c-1.jpg`,
    summary:
      'Block paving is constantly exposed to changing weather conditions, which can lead to weed growth, or loose units over time. Addressing these issues promptly helps maintain a level surface and protects your property from costly drainage problems and structural instability.',
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    image: `${IMG_BASE}/2026/04/Image_fx-11-3-1024x717.jpg`,
    summary:
      "Landscapes are constantly exposed to seasonal changes, overgrown vegetation, and soil erosion, which can lead to drainage issues or garden decline over time. Prompt upkeep preserves the layout and prevents costly damage to your property's exterior and structural boundaries.",
  },
  {
    slug: 'fencing',
    title: 'Fencing',
    image: `${IMG_BASE}/2026/04/Image_fx-4-3-1024x717.jpg`,
    summary:
      'Fencing is constantly exposed to high winds, ground moisture, and wood rot, which can cause leaning posts or broken panels over time. Prompt repairs secure your boundary and prevent more costly structural failure or security risks to your property.',
  },
  {
    slug: 'resin',
    title: 'Resin',
    image: `${IMG_BASE}/2026/04/1be716ee-a4de-4823-ba4f-5ae19e44fb2d-1024x756.jpg`,
    summary:
      'Resin surfaces are constantly exposed to UV rays, heavy footfall, and changing temperatures, which can lead to fading or surface wear over time. Prompt care maintains the porous finish and prevents pooling water from causing costly base instability.',
  },
  {
    slug: 'pressure-wash',
    title: 'Pressure Washing',
    image: `${IMG_BASE}/2026/04/patio-cleaning.jpg`,
    summary:
      'Exterior surfaces left unmaintained accumulate thick layers of moss, slick algae, embedded grime, and stubborn oil stains over time, which create severe slip hazards and prematurely degraded materials. Prompt pressure washing thoroughly sanitizes and restores the area completely.',
  },
]

export const whatWeCover = [
  [
    'Landscaping',
    'Block Paving',
    'Tarmac Driveways',
    'Resin Bound Surfaces',
    'Bespoke Patios',
    'Fencing Solutions',
    'Driveway Restoration',
    'Slab Laying',
  ],
  [
    'Natural Stone & Sandstone',
    'Pressure Washing',
    'Contemporary Porcelain Tiling',
    'Sub-base Reinforcement',
    'Ground Stabilization',
    'Surface Leveling',
    'Site Clearance & Excavation',
    'Path Construction',
  ],
  [
    'Edging Kerbs & Borders',
    'Drainage Correction',
    'Soakaway Installation',
    'Gravel Driveways',
    'Hardstanding Repairs',
    'Re-pointing & Joint Restoration',
    'Secure Boundary Fencing',
    'Turfing & Lawn Restoration',
  ],
]

export const coreValues = [
  {
    title: 'Quality Comes First',
    text: 'We use top-grade materials combined with skilled craftsmanship on every project, whether we are laying a new patio or completely transforming a landscape.',
  },
  {
    title: 'Reliability',
    text: 'We pride ourselves on punctuality and ensuring every project—from resin installations to deep pressure washing—is completed within the agreed schedule.',
  },
  {
    title: 'Trust',
    text: 'We prioritize clear, honest communication and focus on building lasting customer relationships through transparency.',
  },
]

export const beforeAfterImages = Array.from({ length: 22 }, (_, i) => {
  const n = i + 1
  const suffix = n === 8 ? '8-1' : n === 9 ? '9-1' : n === 18 ? '18-1' : String(n)
  return `${IMG_BASE}/2026/06/${suffix}.jpg`
})

export const galleryExtraImages = [
  `${IMG_BASE}/2026/06/8-28.jpeg`,
  `${IMG_BASE}/2026/06/8-25.jpeg`,
  `${IMG_BASE}/2026/04/WhatsApp-Image-2026-06-29-at-3.24.05-PM-1.jpeg`,
  `${IMG_BASE}/2026/04/12.webp`,
]

export const reviews = [
  {
    title: 'Stunning Driveway Transformation!',
    name: 'David L',
    text: "We couldn't be happier with our new resin bound driveway. The team from Extreme Landscaping & Gardening Solutions Ltd was professional, punctual, and highly skilled. They cleared away our old, cracked concrete base and prepared a flawless sub-base before laying the resin. The seamless finish has completely transformed the front of our property, and we've already had several neighbors asking for their details. Highly recommended!",
  },
  {
    title: 'Flawless Porcelain Patio & Landscape Design',
    name: 'Sarah & Mark',
    text: 'Our back garden was an uneven, overgrown mess until this team stepped in. They handled the entire landscaping project from scratch, including extensive site clearance and surface leveling. They installed a stunning new natural stone patio with immaculate jointing and border details. The attention to detail during the groundwork prep gives us absolute confidence that this patio is built to last. Brilliant workmanship!',
  },
  {
    title: 'Extremely High-Quality Block Paving',
    name: 'James H',
    text: 'I hired Extreme Landscaping & Gardening Solutions Ltd to install a block paving parking area for my commercial property. Their team worked with incredible efficiency, keeping disruption to an absolute minimum. They installed deep edging kerbs and integrated proper drainage to prevent water pooling. The lines are incredibly straight, the blocks are perfectly level, and the pricing was completely transparent from day one.',
  },
  {
    title: 'Professional Fencing & Secure Boundaries',
    name: 'Emma R',
    text: 'After a severe storm brought down our old boundary line, we needed a reliable contractor fast. The team arrived promptly to provide a free estimate and started the fencing installation right on schedule. They used premium-grade, heavy-duty fence panels and deeply anchored posts. The boundary is now completely secure, looks fantastic, and is strong enough to withstand any future weather. A fantastic, stress-free experience.',
  },
  {
    title: 'Incredible Pressure Washing Restoration',
    name: 'Michael',
    text: 'I thought our old tarmac driveway and concrete pathways needed to be completely replaced, but the pressure washing service from this company worked miracles. They used commercial-grade deep cleaning systems to blast away years of slick algae, thick moss, and deep oil stains. The surface looks almost brand new, and they cleared away all the debris afterward, leaving the site spotless. Outstanding value for money!',
  },
  {
    title: 'Perfect Tarmac Driveway and Edging',
    name: 'Robert',
    text: 'Extreme Landscaping & Gardening Solutions Ltd just finished installing a new tarmac driveway at our property, and the results are exceptional. They took great care with the initial excavation and sub-base stabilization, ensuring proper water runoff and drainage integration. The final finish is perfectly smooth, hard-wearing, and the crisp edging kerbs give the entire front garden a neat, executive look. Professional service from start to finish.',
  },
  {
    title: 'Complete Garden Overhaul & New Patio',
    name: 'Claire',
    text: 'I am absolutely thrilled with the complete landscaping service provided by this team. They removed a massive amount of old soil, leveled out our sloping lawn, put up beautiful new boundary fencing, and laid a gorgeous sandstone patio. They work with so much care and precision, leaving the site completely clean at the end of every day. If you want a reliable company that does not cut corners, this is the one.',
  },
]
