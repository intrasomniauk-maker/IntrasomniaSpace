import type { Config, Context } from '@netlify/functions'

// Creates a SumUp checkout for the *actual* order total so the customer is
// charged the real cart amount instead of a fixed-price payment link.
//
// Requires two environment variables (set on the site):
//   - SUMUP_API_KEY        : secret API key used as a Bearer token
//   - SUMUP_MERCHANT_CODE  : the SumUp merchant code that receives the payment

const SUMUP_CHECKOUTS_URL = 'https://api.sumup.com/v0.1/checkouts'

interface CheckoutRequest {
  amount?: number
  currency?: string
  reference?: string
  description?: string
}

export default async (req: Request, _context: Context) => {
  const apiKey = process.env.SUMUP_API_KEY
  const merchantCode = process.env.SUMUP_MERCHANT_CODE

  if (!apiKey || !merchantCode) {
    return Response.json(
      { error: 'Payment is not configured. Missing SumUp credentials.' },
      { status: 500 },
    )
  }

  let body: CheckoutRequest
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const amount = Number(body.amount)
  const currency = (body.currency || 'GBP').toUpperCase()

  // Validate the amount server-side — never trust the client to set the price.
  if (!Number.isFinite(amount) || amount <= 0) {
    return Response.json({ error: 'Invalid amount.' }, { status: 400 })
  }

  const checkoutReference = body.reference || `INTRASOMNIA-${Date.now()}`

  const sumupResponse = await fetch(SUMUP_CHECKOUTS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      checkout_reference: checkoutReference,
      // SumUp expects the amount as a decimal in the major currency unit.
      amount: Number(amount.toFixed(2)),
      currency,
      merchant_code: merchantCode,
      description: body.description || 'INTRASOMNIA merchandise order',
    }),
  })

  if (!sumupResponse.ok) {
    const detail = await sumupResponse.text()
    console.error('SumUp checkout creation failed:', sumupResponse.status, detail)
    return Response.json(
      { error: 'Could not create payment. Please try again.' },
      { status: 502 },
    )
  }

  const checkout = await sumupResponse.json()

  // Only return what the client needs to mount the payment widget.
  return Response.json({
    checkoutId: checkout.id,
    reference: checkout.checkout_reference,
    amount: checkout.amount,
    currency: checkout.currency,
  })
}

export const config: Config = {
  path: '/api/create-checkout',
  method: 'POST',
}
