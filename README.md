# Yogesh Kumar Saini — Portfolio

A clean, dark-themed personal portfolio built with plain HTML, Tailwind (via CDN) and vanilla JavaScript. It showcases experience, projects, skills, certifications and includes a contact form powered by EmailJS.

Live demo
- Open `index.html` locally (or deploy to GitHub Pages / Netlify / Vercel).

What I did
- Created a single-page portfolio with sections: Home, About, Experience, Projects, Skills, Certifications, Contact.
- Implemented UI niceties: top scroll progress bar, fade-up reveal, soft glow custom cursor, responsive mobile navigation, and a contact form with client-side validation and EmailJS integration.

Features
- Responsive layout with Tailwind utility classes (via CDN)
- Dark theme with custom color variables
- Hero section with downloadable resume and call-to-action
- Experience and Projects cards with hover lift and shadow
- Skills and tools listing using Font Awesome icons
- Contact form that sends emails through EmailJS (requires your keys)
- Small accessibility improvements (alt attributes, focus ring class)

Technologies
- HTML5
- TailwindCSS (CDN)
- Font Awesome
- Vanilla JavaScript
- EmailJS for contact form
- Optional: deploy on GitHub Pages, Netlify, or Vercel

Quick start (view locally)
1. Copy the project folder to your machine (or clone your repo).
2. Open `index.html` in your browser:
   - Double-click `index.html`, or
   - Serve it with a simple HTTP server (recommended for correct relative paths and APIs):
     - Python 3: `python -m http.server 8000` then open http://localhost:8000
     - Node (serve): `npx serve .` then open shown URL

Configure the contact form (EmailJS)
1. Create an account at https://www.emailjs.com.
2. Add an email service (e.g., Gmail, SMTP) — note the Service ID.
3. Create an email template matching the fields sent from the page. The template currently expects:
   - `from_name`
   - `email_id`
   - `message`
4. Replace the placeholders in the HTML:
   - `emailjs.init("PUBLIC_KEY");` → `emailjs.init("YOUR_PUBLIC_KEY");`
   - `emailjs.send("SERVICE_ID", "TEMPLATE_ID", templateParams)` → set your `SERVICE_ID` and `TEMPLATE_ID`.
5. Test sending messages from the contact form.

Important files / placeholders to update
- `index.html` — main page (the HTML you provided).
- Replace `PUBLIC_KEY`, `SERVICE_ID`, and `TEMPLATE_ID` in the inline script with values from EmailJS.
- Update `Yogesh Resume.pdf` (path/name) if you want a different filename or location.
- Replace `hero.jpg`, `profile.jpg`, and certification images with your actual images (paths in the HTML).
- External links:
  - GitHub: https://github.com/yogeshkumarsaini
  - LinkedIn: https://www.linkedin.com/in/yogesh-kumar-saini-1754931b9
  - Contact email and phone are already present in the Contact section.

Deployment
- GitHub Pages:
  - Push the repository to GitHub.
  - In the repo Settings → Pages, set the source branch to `main` (or `gh-pages`) and root.
- Netlify / Vercel:
  - Drag & drop the folder or use the repo import flow — both support static HTML sites out of the box.

Accessibility & performance notes
- Images include alt attributes; ensure the text is descriptive.
- Consider adding `rel="noopener noreferrer"` for external links with `target="_blank"`.
- For better performance, replace CDN Tailwind with a built Tailwind CSS file if you add many custom utilities (reduces runtime CSS).
- Consider lazy-loading heavy images (loading="lazy") and optimizing image sizes.

Improvements you may want next
- Replace inline Tailwind CDN usage with a build step (Tailwind CLI / PostCSS) to remove unused styles.
- Add analytics or form spam protection (e.g., reCAPTCHA) if needed.
- Add internationalization or theme toggle (dark/light).
- Add unit/integration tests for the contact flow if you integrate it into a backend.

Contributing
- This is a personal portfolio; contributions are optional.
- If you keep this repo public and accept contributions, open PRs against `main` and include a short description of changes.

License
- Add a LICENSE file if you want to set a license (e.g., MIT). Example:
  - `MIT License — © 2025 Yogesh Kumar Saini`

Contact
- Email: yogeshkumarsaini1085@gmail.com
- Phone: +91 8430151085
- GitHub: https://github.com/yogeshkumarsaini
- LinkedIn: https://www.linkedin.com/in/yogesh-kumar-saini-1754931b9

---

If you want, I can:
- generate a ready-to-deploy GitHub Pages configuration,
- produce a small CI workflow to auto-deploy on push,
- or create a cleaned production build using Tailwind CLI. I'll proceed with whichever you'd like next.
