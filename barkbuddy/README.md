# BarkBuddy website

Static after-sales website for BarkBuddy. The site currently contains four pages:

- `index.html` — home
- `products.html` — products
- `resources.html` — videos and manuals
- `support.html` — FAQs and contact form

## Local preview

From the repository root:

```bash
python3 -m http.server 4173 --directory barkbuddy
```

Then open <http://127.0.0.1:4173/>.

## Content editing checklist

Before production deployment, confirm or replace:

- Brand positioning, navigation labels, and homepage headline
- Product names, specifications, feature copy, and real product images
- Installation videos and downloadable manuals
- FAQs, warranty terms, and troubleshooting guidance
- Support email, phone number, service hours, and form destination
- Any customer testimonials
- Legal pages, privacy statement, and copyright details if required

## Known pre-deployment issues

- Product and team imagery is loaded from a Trae text-to-image endpoint. Store approved images locally before launch so the site does not depend on that temporary service.
- The contact form currently simulates a successful submission in the browser and does not send data anywhere.
- Video and manual actions are placeholders and need real files or URLs.
- Phone numbers, names, testimonials, and company details appear to be sample content and must be verified.
- No production hosting target or custom domain has been selected yet.

## Deployment baseline

The site has no build step and can be hosted directly from the `barkbuddy/` directory on GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any static web host. Choose the target after content and domain requirements are confirmed.
