/**
 * Web3Forms free tier only accepts submissions that originate from the browser.
 * Do not call their API from Next.js route handlers — it returns "not allowed" from server IPs.
 *
 * Important: For JavaScript `fetch`, Web3Forms requires `Content-Type: application/json`.
 * Using `x-www-form-urlencoded` triggers a 301 redirect and often breaks fetch (CORS / non-JSON body).
 * @see https://docs.web3forms.com/getting-started/troubleshooting
 */

const FALLBACK_ACCESS_KEY = 'd7d10cb9-80ac-4561-8ce4-75872ef4f92c'

function getAccessKey(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()
  return fromEnv && fromEnv.length > 0 ? fromEnv : FALLBACK_ACCESS_KEY
}

export type Web3FormsSubmitResult = {
  success: boolean
  message?: string
}

function normalizeWeb3FormsResult(raw: unknown): Web3FormsSubmitResult {
  if (!raw || typeof raw !== 'object') {
    return { success: false, message: 'Empty response from email service.' }
  }
  const o = raw as Record<string, unknown>

  if (typeof o.success === 'boolean') {
    return {
      success: o.success,
      message: typeof o.message === 'string' ? o.message : undefined,
    }
  }

  const body = o.body
  if (body && typeof body === 'object') {
    const b = body as Record<string, unknown>
    if (typeof b.success === 'boolean') {
      return {
        success: b.success,
        message: typeof b.message === 'string' ? b.message : undefined,
      }
    }
  }

  return { success: false, message: 'Unexpected response from email service.' }
}

export async function submitWeb3FormsFromBrowser(
  fields: Record<string, string>,
  options?: { accessKey?: string }
): Promise<Web3FormsSubmitResult> {
  const keyOverride = options?.accessKey?.trim()
  const payload: Record<string, string> = {
    access_key: keyOverride && keyOverride.length > 0 ? keyOverride : getAccessKey(),
    ...fields,
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const raw = await response.text()

  try {
    const parsed: unknown = JSON.parse(raw)
    return normalizeWeb3FormsResult(parsed)
  } catch {
    console.warn('Web3Forms non-JSON response', response.status, raw.slice(0, 400))
    return {
      success: false,
      message:
        'Could not read the email service response. Please call us or try again in a moment.',
    }
  }
}
