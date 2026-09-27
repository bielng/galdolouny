import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../components/Icons'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <h1>404</h1>
        <p style={{ margin: '0 auto 1.6em', color: 'var(--ink-soft)' }}>
          Sorry, we couldn't find the page you were looking for. It may have moved, or the link
          might be out of date.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to home
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  )
}
