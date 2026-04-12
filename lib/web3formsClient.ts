/**
 * Web3Forms free tier only accepts submissions that originate from the browser.
 * Do not call their API from Next.js route handlers — it returns "not allowed" from server IPs.
 */

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  '0f32ed52-78cd-4ae4-8e56-df6c2b533b71'

export type Web3FormsSubmitResult = {
  success: boolean
  message?: string
}

export async function submitWeb3FormsFromBrowser(
  fields: Record<string, string>
): Promise<Web3FormsSubmitResult> {
  const params = new URLSearchParams({ access_key: ACCESS_KEY, ...fields })

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: params.toString(),
  })

  const contentType = response.headers.get('content-type') ?? ''
  const raw = await response.text()

  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(raw) as Web3FormsSubmitResult
    } catch {
      return { success: false, message: 'Invalid JSON from email service.' }
    }
  }

  console.warn('Web3Forms non-JSON response', contentType, raw.slice(0, 280))
  return {
    success: false,
    message:
      'Could not reach the email service (network, firewall, or browser extension). Please call us or try again.',
  }
}
