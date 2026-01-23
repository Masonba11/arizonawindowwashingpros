# Arizona Window Washing Pros

A production-ready, SEO-focused Next.js website for Arizona Window Washing Pros, a local window washing company serving Mesa, Gilbert, Queen Creek, and Chandler, Arizona.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── contact/          # Contact page
│   ├── about/            # About page
│   ├── reviews/          # Reviews page
│   ├── services/         # Service pages
│   └── locations/        # Location pages (SEO-targeted)
├── components/           # Reusable React components
│   ├── ContactForm.tsx   # Contact form component
│   ├── ContactCTA.tsx    # Call-to-action component
│   ├── Header.tsx        # Site header with navigation
│   ├── Footer.tsx        # Site footer
│   └── Layout.tsx        # Main layout wrapper
├── lib/                  # Utility functions and constants
│   ├── constants.ts      # Business info, services, locations
│   └── seo.ts            # SEO helper functions
└── data/                 # Contact form submissions (created at runtime)
```

## Customization Guide

### Where to Edit Business Information (NAP)

All business information is centralized in `/lib/constants.ts`. Edit the `BUSINESS_INFO` object to update:

- Business name
- Phone number
- Email address
- Service areas
- Business address
- Business hours
- Website URL

**Example:**
```typescript
export const BUSINESS_INFO = {
  name: 'Arizona Window Washing Pros',
  phone: '(480) 000-0000',
  // ... other fields
}
```

### Where to Change City/Service Lists

**Services:** Edit the `SERVICES` array in `/lib/constants.ts`

**Locations:** Edit the `LOCATIONS` array in `/lib/constants.ts`

**Important:** When adding new locations, you'll also need to:
1. Create a new page in `/app/locations/[location-slug]/page.tsx`
2. Update the navigation in `/components/Header.tsx`
3. Update the sitemap (it's auto-generated, but verify)

### Contact Form

The contact form is located in `/components/ContactForm.tsx` and is used throughout the site.

**How it works:**
- Submissions are sent to `/api/contact` (POST)
- In development, submissions are:
  - Logged to the console
  - Saved to `/data/contact-submissions.json` (created automatically)
- In production, you should:
  - Integrate with an email service (SendGrid, Resend, etc.)
  - Save to a database
  - Integrate with a CRM

**Spam Protection:**
- Honeypot field (`company`) - hidden from users, catches bots
- Basic validation (required fields, email format)

**To customize the form:**
- Edit `/components/ContactForm.tsx`
- Modify fields, validation, or styling as needed

## SEO Features

### Implemented SEO Elements

- ✅ Metadata (title, description) on every page
- ✅ OpenGraph and Twitter Card metadata
- ✅ JSON-LD structured data:
  - LocalBusiness schema (all pages)
  - FAQPage schema (location pages)
  - BreadcrumbList schema (service and location pages)
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt
- ✅ Exact-match keywords in H1s (location pages)
- ✅ Internal linking structure
- ✅ Mobile-responsive design

### Location Pages SEO

Each location page targets a specific keyword:
- Mesa: "Mesa Window Washing"
- Gilbert: "Gilbert Window Washing"
- Queen Creek: "Window Washing Queen Creek"
- Chandler: "Chandler Window Washing"

These exact phrases appear in:
- Page H1
- Page title
- Meta description
- Page content

## Pages Overview

### Main Pages
- `/` - Homepage with hero, services, locations, process, reviews teaser
- `/about` - Company story, values, why choose us
- `/contact` - Contact form, business hours, service areas, FAQ
- `/reviews` - Customer reviews with ratings

### Service Pages
- `/services` - Service listing page
- `/services/window-washing`
- `/services/screen-cleaning`
- `/services/track-sill-cleaning`
- `/services/hard-water-spot-removal`

### Location Pages (SEO-targeted)
- `/locations` - Location listing page
- `/locations/mesa-window-washing`
- `/locations/gilbert-window-washing`
- `/locations/window-washing-queen-creek`
- `/locations/chandler-window-washing`

## API Routes

### `/api/contact` (POST)

Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "480-555-1234",
  "email": "john@example.com",
  "city": "Mesa",
  "service": "Window Washing",
  "message": "Optional message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your submission!"
}
```

## Styling

The site uses Tailwind CSS with custom utility classes defined in `/app/globals.css`:

- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary button
- `.section-padding` - Consistent section spacing
- `.container-custom` - Max-width container with padding

Color scheme uses a primary blue (`primary-600`, etc.) defined in `tailwind.config.ts`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## Next Steps for Production

1. **Update Business Information:**
   - Edit `/lib/constants.ts` with real NAP data
   - Update phone number, email, address

2. **Set Up Contact Form:**
   - Integrate email service (Resend, SendGrid, etc.)
   - Or connect to a CRM
   - Update `/app/api/contact/route.ts`

3. **Add Google Maps:**
   - Replace map placeholder in `/app/contact/page.tsx`
   - Add Google Maps embed code

4. **Update Reviews:**
   - Replace mock reviews in `/app/reviews/page.tsx` with real reviews
   - Update Google Business link

5. **Analytics:**
   - Add Google Analytics
   - Add Google Search Console verification

6. **Content:**
   - Review and customize all page content
   - Add real customer testimonials
   - Update images (if adding any)

## Support

For questions or issues, refer to the Next.js documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## License

This project is proprietary and confidential.






