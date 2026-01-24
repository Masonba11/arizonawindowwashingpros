# Form Submission Debugging Guide

## Step-by-Step Troubleshooting

### 1. Check Browser Console (Most Important!)

**How to check:**
1. Open your website in a browser
2. Press `F12` (or right-click → Inspect → Console tab)
3. Fill out and submit the form
4. Look for these messages in the console:

**What you SHOULD see:**
```
Submitting form... {name: "...", email: "..."}
API Response: {status: 200, data: {success: true, ...}}
Form submitted successfully, redirecting...
```

**What indicates a problem:**
- ❌ No messages at all → Form submit handler isn't running
- ❌ Red error messages → JavaScript error preventing submission
- ❌ `API Response: {status: 400/500, ...}` → Server error
- ❌ `Form submission failed:` → API returned error

**Common browser console errors:**
- `Failed to fetch` → Network error, API route not reachable
- `Unexpected token` → JavaScript syntax error
- `Cannot read property` → Code error in form component

---

### 2. Check Network Tab

**How to check:**
1. Open DevTools (`F12`)
2. Go to **Network** tab
3. Fill out and submit the form
4. Look for a request named `contact` or `api/contact`

**What to look for:**

**✅ Good Request:**
- Method: `POST`
- Status: `200` (green)
- Type: `fetch` or `xhr`
- Response tab shows: `{"success": true, ...}`

**❌ Problem Indicators:**
- Status `404` → API route not found (check route.ts exists)
- Status `500` → Server error (check Vercel logs)
- Status `400` → Validation error (check required fields)
- Red/Canceled → Network error or CORS issue
- No request at all → Form not submitting (check form handler)

**Click on the request to see:**
- **Headers**: Shows what data was sent
- **Payload**: Shows the JSON body
- **Response**: Shows what the server returned

---

### 3. Check Vercel Function Logs

**How to access:**
1. Go to [vercel.com](https://vercel.com) and log in
2. Select your project: `az-window-washing`
3. Click **Functions** tab (or **Deployments** → latest deployment → **Functions**)
4. Click on `/api/contact` function
5. View **Logs** or **Runtime Logs**

**What you SHOULD see:**
```
Contact Form Submission: {name: "...", email: "...", ...}
Submitting to Web3Forms with access key: 0f32ed52...
Web3Forms response status: 200
Web3Forms response: {"success": true, "message": "..."}
Form submitted successfully via Web3Forms: {...}
```

**What indicates a problem:**
- ❌ `Web3Forms HTTP error: 400/403/401` → Access key issue
- ❌ `Web3Forms submission failed:` → Web3Forms rejected the request
- ❌ `Error submitting to Web3Forms:` → Network/API error
- ❌ `Contact form error:` → Validation or parsing error
- ❌ No logs at all → Function not being called

**Common Vercel log errors:**
- `401 Unauthorized` → Wrong or invalid access key
- `403 Forbidden` → Domain not whitelisted in Web3Forms
- `400 Bad Request` → Missing required fields in request
- `ECONNREFUSED` → Can't reach Web3Forms API

---

### 4. Test API Directly (Quick Test)

**Using curl (terminal):**
```bash
curl -X POST https://your-site.vercel.app/api/contact \
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

**Expected response:**
```json
{"success":true,"message":"Thank you for your submission! We'll contact you soon."}
```

**If you get an error:**
- Check the error message for clues
- Verify all required fields are included
- Make sure the deployment is live

**Using browser:**
1. Open browser console (`F12`)
2. Go to Console tab
3. Paste and run:

```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    name: 'Test User',
    phone: '480-555-1234',
    email: 'test@example.com',
    city: 'Mesa',
    service: 'Exterior Window Cleaning',
    message: 'Test'
  })
})
.then(r => r.json())
.then(data => console.log('Response:', data))
.catch(err => console.error('Error:', err))
```

---

### 5. Check Web3Forms Dashboard

**How to check:**
1. Go to [web3forms.com](https://web3forms.com)
2. Log in to your dashboard
3. Check **Submissions** section

**What to verify:**
- ✅ Access key: `0f32ed52-78cd-4ae4-8e56-df6c2b533b71` is active
- ✅ Your domain is whitelisted (Settings → Allowed Domains)
- ✅ Submissions are appearing in dashboard
- ✅ No rate limits or blocks

**If submissions aren't in dashboard:**
- The form data isn't reaching Web3Forms
- Check Vercel logs for Web3Forms errors
- Verify access key is correct

---

### 6. Common Issues Checklist

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Button does nothing when clicked | JavaScript error or form handler not working | Check browser console for errors |
| Form submits but shows error message | API validation failed or server error | Check Network tab response, check Vercel logs |
| Form submits successfully but no email | Web3Forms not receiving data | Check Vercel logs for Web3Forms errors, verify access key |
| Form redirects but no submission in Web3Forms | Web3Forms API call failing silently | Check Vercel function logs, verify domain whitelist |
| "Failed to fetch" error | API route not found or network issue | Verify `/app/api/contact/route.ts` exists, check deployment |
| Form works locally but not on Vercel | Environment difference, domain not whitelisted | Check Vercel logs, whitelist production domain in Web3Forms |

---

### 7. Quick Diagnostic Script

Add this temporarily to your ContactForm component to see detailed logs:

```typescript
// Add after line 50 in ContactForm.tsx (temporary debugging)
console.log('=== FORM SUBMISSION DEBUG ===')
console.log('Form data being sent:', {
  name: formData.name,
  phone: formData.phone,
  email: formData.email,
  city: formData.city,
  service: formData.service
})
console.log('Is submitting:', isSubmitting)
console.log('Submit status:', submitStatus)
```

---

## What to Check First

**Priority 1: Browser Console** (2 minutes)
- This tells you if the form is even trying to submit
- Look for errors or missing log messages

**Priority 2: Network Tab** (2 minutes)  
- This shows if the API call is being made
- Shows response status and data

**Priority 3: Vercel Logs** (5 minutes)
- This shows what's happening on the server
- Most important for Web3Forms issues

**Priority 4: Web3Forms Dashboard** (2 minutes)
- Confirms if submissions are arriving
- Check access key and domain settings

---

## Still Having Issues?

**Share these details:**
1. Browser console output (screenshot or copy/paste)
2. Network tab request/response (screenshot)
3. Any Vercel log errors (copy/paste)
4. What happens when you submit (button disabled? Error message? Redirect?)

This will help pinpoint the exact issue!






