import type { NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

/**
 * Pages Router fallback for dev/prod when the server cannot load App Router error UI.
 * App routes still use app/error.tsx and app/global-error.tsx.
 */
function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <div style={{ padding: 48, textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>
        {statusCode === 404 ? 'Page not found' : 'Something went wrong'}
      </h1>
      <p style={{ color: '#555' }}>
        {statusCode ? `Error ${statusCode}` : 'An unexpected error occurred.'}
      </p>
    </div>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? (err as { statusCode?: number }).statusCode : 404
  return { statusCode: statusCode ?? 500 }
}

export default ErrorPage
