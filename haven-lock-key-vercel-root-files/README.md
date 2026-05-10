# Haven Lock & Key Website

This is a Vite + React + Tailwind website for Haven Lock & Key.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

## Deploy on Vercel

1. Upload this whole project folder to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Vercel should auto-detect Vite.
5. Use these settings if Vercel asks:
   - Framework Preset: **Vite**
   - Build Command: **npm run build**
   - Output Directory: **dist**
6. Click Deploy.

## Important edits before publishing

Open `src/App.jsx` and replace:

```js
const phone = '647-555-0199';
const businessEmail = 'havenlockandkey@gmail.com';
```

with your real business phone number and email.
