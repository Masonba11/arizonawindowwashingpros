import { NextRequest, NextResponse } from 'next/server'

/**
 * Web3Forms rejects server-side requests on the free plan. All forms submit
 * from the browser via `submitWeb3FormsFromBrowser` in `@/lib/web3formsClient`.
 */
export async function POST(request: NextRequest) {
  try {
    await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  return NextResponse.json(
    {
      success: false,
      error:
        'Server-side forwarding is disabled: Web3Forms only accepts browser-originated requests on the free plan. Use the contact form on this site.',
    },
    { status: 501 }
  )
}
