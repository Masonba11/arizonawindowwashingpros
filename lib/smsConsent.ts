/** Shared A2P SMS consent copy and form payload helpers. */

export const SMS_CONSENT_DISCLOSURE =
  'By checking this box, I agree to receive recurring informational and promotional text messages from Arizona Window Washing Pros, including quotes, appointment updates, service reminders, and special offers. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to unsubscribe. Consent is not a condition of purchase.'

export type SmsConsentPayload = {
  sms_consent: 'yes' | 'no'
  sms_consent_timestamp: string
}

/** Build Web3Forms / submission fields for SMS consent status (always recorded). */
export function buildSmsConsentFields(consented: boolean): SmsConsentPayload {
  return {
    sms_consent: consented ? 'yes' : 'no',
    sms_consent_timestamp: new Date().toISOString(),
  }
}

/** Human-readable line for message bodies / email content. */
export function formatSmsConsentMessageLine(consented: boolean, timestamp: string): string {
  return `SMS consent: ${consented ? 'YES' : 'NO'} (recorded ${timestamp})`
}
