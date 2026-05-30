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

### Deployment

Code deployed using GitHub Page

## License

All content and branding belong to LoopKaka and Sangram Badi unless stated otherwise.
