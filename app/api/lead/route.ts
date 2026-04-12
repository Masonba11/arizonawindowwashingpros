import { NextResponse } from 'next/server'

/**
 * Web3Forms rejects server-side requests on the free plan. Use client-side
 * `submitWeb3FormsFromBrowser` from `@/lib/web3formsClient` instead.
 */
export async function POST(request: Request) {
  try {
    await request.json()
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 })
  }

  return NextResponse.json(
    {
      success: false,
      message:
        'Server-side lead forwarding is disabled. Submit from the browser form or call us directly.',
    },
    { status: 501 }
  )
}
