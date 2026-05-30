# LoopKaka Website

Official homepage for **LoopKaka** by Sangram Badi.

Tagline: **Code ka chakkar, LoopKaka ke sath!**

This is a static, SEO-friendly website for showcasing LoopKaka courses, Sangram Badi's intro, and community/social links.

## Website Sections

- Hero section with LoopKaka branding and tagline
- About Sangram section
- YouTube and Udemy course cards
- Community and profile links
- Dark and light theme toggle
- Basic image download protection
- SEO metadata and structured data

## Tech Used

- **HTML5** for page structure
- **Tailwind CSS CDN** for styling
- **Vanilla JavaScript** for theme switching and basic image download protection
- **JSON-LD structured data** for SEO
- Static image assets for logo and profile image

No build step is required right now. The site can be opened directly in a browser.

## Project Structure

```text
.
├── index.html
├── README.md
├── .gitignore
└── assets
    ├── loopkaka-logo.png
    ├── protect-images.js
    ├── sangram-badi.png
    ├── theme.js
    └── tailwind-config.js
```

## Files

- `index.html`: Main website page, SEO metadata, layout, and content
- `assets/tailwind-config.js`: Tailwind design configuration
- `assets/theme.js`: Dark/light theme toggle logic
- `assets/protect-images.js`: Blocks right-click context menu on images and disables image dragging
- `assets/loopkaka-logo.png`: LoopKaka logo
- `assets/sangram-badi.png`: Sangram Badi profile image

## How To Run Locally

Open `index.html` directly in a browser.

Because Tailwind is loaded from CDN, internet access is required for the styling to load correctly.

Optional local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How To Add A New Course

Open `index.html` and find the `courses` section.

Duplicate one existing `<article>` course card and update:

- Platform label, for example `YouTube` or `Udemy`
- Category, for example `AI`, `API`, `Apps`
- Course title
- Course description
- Course link
- Button text

Also update the JSON-LD course list inside the `<head>` if the course should be included in SEO structured data.

## How To Update Social Links

Open `index.html` and update links in two places:

- The visible `Connect` section
- The `sameAs` array in the JSON-LD `Person` schema

Current links include:

- YouTube: `https://www.youtube.com/@LoopKaka`
- LinkedIn: `https://www.linkedin.com/in/sangrambadi/`
- GitHub: `https://github.com/LoopKaka`
- Discord: `https://discord.com/invite/BZwkqTsbND`
- WhatsApp: `https://www.whatsapp.com/channel/0029Vb8N8cK3gvWUWIITKL3o`
- Udemy: `https://www.udemy.com/user/sangram-badi/`

## How To Enhance This Website

Useful future improvements:

- Add a dedicated course detail page for each course
- Add blog/articles section for tutorials
- Add newsletter signup
- Add testimonials or learner outcomes
- Add course thumbnails
- Add sitemap.xml and robots.txt
- Move Tailwind from CDN to a local production build
- Add analytics such as Google Analytics, Plausible, or Cloudflare Web Analytics
- Add Open Graph absolute image URLs after hosting
- Add a custom `404.html` page

## SEO Notes

The site already includes:

- Page title
- Meta description
- Keywords
- Open Graph tags
- Twitter card tags
- JSON-LD `Person` schema
- JSON-LD `ItemList` and `Course` schema
- Descriptive image alt text

After hosting on `loopkaka.com`, update Open Graph image paths to absolute URLs if needed:

```html
<meta
  property="og:image"
  content="https://loopkaka.com/assets/loopkaka-logo.png"
/>
```

## Security Notes

The website is static and does not collect user input.

Current hardening includes:

- `referrer` policy
- External links use `rel="noopener noreferrer"`
- Images use `draggable="false"`
- Image right-click context menu is blocked with JavaScript
- No `innerHTML`, `eval`, inline event handlers, forms, or iframes

For stronger production security, replace the Tailwind CDN with a locally built CSS file.

Note: browser-based image download protection is only a deterrent. Users can still access public image files through browser developer tools or direct asset URLs.

## Free Hosting With Vercel

Recommended free hosting: **Vercel**.

This website is a static site, so Vercel can deploy it without any framework or build command.

Vercel account:

```text
badiz technology
```

Use Google/Gmail login with this account when accessing Vercel.

Repository:

```text
git@github.com:LoopKaka/loopkaka_website.git
```

### Push Code

If this is the first commit:

```bash
git add .
git commit -m "Add LoopKaka homepage"
git branch -M main
git remote add origin git@github.com:LoopKaka/loopkaka_website.git
git push -u origin main
```

If the remote already exists:

```bash
git remote set-url origin git@github.com:LoopKaka/loopkaka_website.git
git push -u origin main
```

### Import Project In Vercel

1. Go to `https://vercel.com`.
2. Sign in with GitHub.
3. Click `Add New...`.
4. Select `Project`.
5. Import the `LoopKaka/loopkaka_website` repository.
6. Use these settings:
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: leave empty
   - Output Directory: leave empty
   - Install Command: leave empty
7. Click `Deploy`.

After deployment, Vercel will provide a temporary URL like:

```text
https://loopkaka-website.vercel.app
```

## Domain Setup For Namecheap

Domain:

```text
loopkaka.com
```

In Namecheap:

1. Go to `Domain List`.
2. Click `Manage` for `loopkaka.com`.
3. Open `Advanced DNS`.
4. Remove default parking records if present.
5. Add these records.

### Option 1: Use Vercel DNS Records In Namecheap

Add this root domain record:

```text
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic
```

Add this `www` record:

```text
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

This keeps your domain registered at Namecheap while pointing the website to Vercel.

### Option 2: Use Vercel Nameservers

Vercel may also ask you to change your Namecheap nameservers to Vercel nameservers. If you choose this option:

1. Go to Namecheap `Domain List`.
2. Click `Manage` for `loopkaka.com`.
3. Find `Nameservers`.
4. Select `Custom DNS`.
5. Add the nameservers shown by Vercel.
6. Save.

Use this option only if you want Vercel to manage DNS for the domain.

## Configure Custom Domain In Vercel

1. Open the project in Vercel.
2. Go to `Settings`.
3. Open `Domains`.
4. Add:

```text
loopkaka.com
```

5. Add:

```text
www.loopkaka.com
```

6. Follow the DNS instructions shown by Vercel.
7. Wait for domain verification.
8. Vercel automatically provisions HTTPS certificates after DNS is correct.

## Recommended Domain Redirect

Recommended setup:

- Primary domain: `loopkaka.com`
- Redirect `www.loopkaka.com` to `loopkaka.com`

This keeps one canonical URL for SEO.

In Vercel:

1. Go to project `Settings`.
2. Open `Domains`.
3. Set `loopkaka.com` as the primary domain.
4. Ensure `www.loopkaka.com` redirects to the primary domain.

## Deployment Checklist

- Commit all files
- Push to GitHub
- Import GitHub repository in Vercel
- Deploy project in Vercel
- Add `loopkaka.com` and `www.loopkaka.com` in Vercel
- Add Vercel DNS records in Namecheap
- Wait for DNS propagation
- Confirm HTTPS is active in Vercel
- Test:
  - `https://loopkaka.com`
  - `https://www.loopkaka.com`

## License

All content and branding belong to LoopKaka and Sangram Badi unless stated otherwise.
