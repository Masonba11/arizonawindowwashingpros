# Contact Form Debugging Guide

## Current Form Flow

1. **User fills out form** → Client-side validation (name, phone, email required)
2. **Form submits** → POST to `/api/contact` with JSON payload
3. **API validates** → Checks required fields and email format
4. **API sends to Web3Forms** → Attempts to send email via Web3Forms API
5. **API saves locally** → Always saves submission to `data/contact-submissions.json`
6. **API returns success** → Always returns `{success: true}` unless validation fails
7. **Form redirects** → Redirects to `/thank-you` page on success

## Testing the Form

### 1. Test API Route Directly
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "480-555-1234",
    "email": "test@example.com",
    "city": "Mesa",
    "service": "Exterior Window Cleaning",
    "message": "Test message"
  }'
```

Expected response:
```json
{"success":true,"message":"Thank you for your submission! We'll contact you soon."}
```

### 2. Check Browser Console
Open DevTools (F12) → Console tab, then submit the form. Look for:
- `"Submitting form..."`
- `"API Response: {status: 200, data: {...}}"`
- `"Form submitted successfully, redirecting..."`

### 3. Check Network Tab
Open DevTools → Network tab, then submit the form. Look for:
- POST request to `/api/contact`
- Status should be 200
- Response should be JSON with `success: true`

### 4. Check Vercel Logs
In Vercel Dashboard → Your Project → Functions → `/api/contact`:
- Look for `"Contact Form Submission:"`
- Look for `"Web3Forms response status:"`
- Check for any errors

## Common Issues

### Form Button Doesn't Work
- Check if button is disabled: `disabled={isSubmitting || submitStatus === 'success'}`
- Check browser console for JavaScript errors
- Verify all required fields are filled

### Form Submits but No Redirect
- Check browser console for redirect errors
- Verify `/thank-you` page exists
- Check if router.push is working

### Web3Forms Not Receiving Emails
- Check Vercel function logs for Web3Forms errors
- Verify access key is correct: `cc2a600a-378f-4b13-819f-b44b924ef328`
- Check Web3Forms dashboard to see if domain is whitelisted
- **Note**: Form still works even if Web3Forms fails - submissions are saved locally

### API Returns Error
- Check validation: name, phone, email are required
- Email must be valid format
- Check Vercel logs for detailed error messages

## Form Always Saves Locally

Even if Web3Forms fails, the form submission is saved to:
`/data/contact-submissions.json`

This ensures no submissions are lost.








