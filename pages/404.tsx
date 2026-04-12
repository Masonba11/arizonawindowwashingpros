/**
 * Pages Router 404 used by the server when ensuring static error routes.
 * App Router uses app/not-found.tsx for normal 404s when present.
 */
export default function Pages404() {
  return (
    <div style={{ padding: 48, textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>404 — Page not found</h1>
      <p style={{ color: '#555' }}>The page you requested does not exist.</p>
    </div>
  )
}
