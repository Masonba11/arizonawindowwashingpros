# Deployment Instructions

## Push to GitHub

After creating your GitHub repository, run these commands:

```bash
# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in (or create an account)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your site will be live in minutes!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link your project
```

## Environment Variables

No environment variables are required for this project. The contact form saves to local JSON files in development.

## Post-Deployment

After deployment:
1. Your site will have a URL like: `https://your-project.vercel.app`
2. You can add a custom domain in Vercel settings
3. The site will auto-deploy on every push to main branch

## Important Notes

- The contact form saves submissions to `/data/contact-submissions.json` (local development)
- For production, consider integrating with an email service (Resend, SendGrid, etc.)
- Update the website URL in `/lib/constants.ts` if needed
- All SEO metadata and schemas are configured and ready






