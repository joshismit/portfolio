# Vercel Deployment Guide

Your Next.js portfolio is ready to deploy! Here are two methods:

## Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to Vercel Dashboard**:
   - Visit https://vercel.com
   - Sign in with GitHub (recommended) or email

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Configure** (usually auto-detected):
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live!

## Method 2: Deploy via Vercel CLI (Using npx - No Installation)

1. **Login to Vercel**:
   ```bash
   npx vercel login
   ```

2. **Deploy**:
   ```bash
   npx vercel
   ```

3. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (first time)
   - Project name? (Press Enter for default)
   - Directory? (Press Enter for `./`)
   - Override settings? **No**

4. **For production deployment**:
   ```bash
   npx vercel --prod
   ```

## Important Notes

✅ **Build Status**: Your project builds successfully (`npm run build` passed)

✅ **Configuration**: 
- `next.config.ts` is properly configured
- Image optimization is set up for remote images
- All dependencies are in `package.json`

✅ **Environment Variables**: 
- Currently none required
- If you add any later, set them in Vercel Dashboard → Project → Settings → Environment Variables

## Post-Deployment

1. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Automatic Deployments**:
   - Every push to `main` branch will auto-deploy
   - Preview deployments for pull requests

3. **Performance**:
   - Vercel automatically optimizes Next.js apps
   - Edge functions and CDN are enabled by default

## Troubleshooting

- **Build fails**: Check build logs in Vercel Dashboard
- **Images not loading**: Verify `next.config.ts` remote patterns
- **Environment variables**: Add them in Vercel Dashboard if needed

## Quick Deploy Command

```bash
npx vercel --prod
```

Your portfolio will be live at: `https://your-project-name.vercel.app`

