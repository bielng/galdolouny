// Lightweight stroke-based icon set. Single source so icon weight/style
// stays consistent everywhere it's used across the site.
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 4h3.2l1.6 4.4-2 1.6a12.4 12.4 0 0 0 5.7 5.7l1.6-2 4.4 1.6v3.2c0 .9-.8 1.6-1.7 1.5C10.7 19.4 4.6 13.3 4 6.7 3.9 5.8 4.6 5 5.5 5H4.5z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5l8 6.2 8-6.2" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15.5" />
      <path d="M13.5 6l6 6-6 6" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5l4.8 4.8L19.5 6.7" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 6.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17.5h17" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </svg>
  )
}

export function QuoteIcon(props) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M9.5 6.5C6.2 7.7 4.3 10 4.3 13.1c0 2.4 1.6 4 3.6 4 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.6-2.9.3-1.6 1.6-3 3.3-3.7L9.5 6.5zm8.6 0c-3.3 1.2-5.2 3.5-5.2 6.6 0 2.4 1.6 4 3.6 4 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.6-2.9.3-1.6 1.6-3 3.3-3.7l-2.2-1z" />
    </svg>
  )
}
