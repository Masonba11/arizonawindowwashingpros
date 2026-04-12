'use client'

/**
 * Root-level errors replace the root layout; keep styles self-contained (no Tailwind from layout).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          fontFamily: 'system-ui, sans-serif',
          background: '#f9fafb',
        }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: '#111' }}>
          Something went wrong
        </h2>
        <p style={{ color: '#4b5563', marginBottom: 24, textAlign: 'center', maxWidth: 400 }}>
          {process.env.NODE_ENV === 'development' && error.message
            ? error.message
            : 'Please try again.'}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: '12px 24px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
