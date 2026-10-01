# E Ashok Kumar – Portfolio (React + Vite)

## Run in VS Code
1. Install Node.js (LTS) from nodejs.org.
2. In VS Code: File > Open Folder > select this `portfolio` folder.
3. Open the terminal (Ctrl + `) and run: `npm install`
4. Run: `npm run dev` and open the localhost URL shown (usually http://localhost:5173).
5. Check production build: `npm run build`

## Add your files (in `src/assets/`)
- `profile.jpg` (also accepts .png/.webp) – your photo
- `E_Ashok_Kumar_Resume.pdf` – your resume
If missing, the site shows a placeholder and a disabled resume button; it will not crash.

## Customize (everything is in `src/data/portfolioData.js`)
- Name, intro, About text, email, phone, location: `profile`
- LinkedIn / GitHub: `socials` (replace `your-username`)
- Skills: `skillCategories` | Projects: `projects` (copy one object; set `github`/`demo` to '' to hide a button)
- Project filter tabs: `projectFilters` (must match names in each project's `categories`)
- Education, achievements, certifications: `education`, `achievements`, `certifications`
- Colors and fonts: CSS variables at the top of `src/index.css`
- Favicon: replace the link in `index.html`, or put a file in `public/`

## Keeping it responsive
Add content only through the data file and reuse existing components/classes (`.card`, `.grid-2`, `.grid-3`, `.btn`, `.tag`). Avoid fixed pixel widths; use `max-width`, `%`, grid and `clamp()`.

## GitHub
1. Install Git, create a free account and a new empty repo on github.com.
2. In the project terminal:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```
Later changes: `git add .` → `git commit -m "Update"` → `git push`.

## Deploy
- Vercel: sign in with GitHub at vercel.com > Add New Project > import the repo > Deploy (Vite is auto-detected).
- Netlify: app.netlify.com > Add new site > Import from GitHub > build command `npm run build`, publish directory `dist` > Deploy.

## Contact form (visitors can message you)
Without setup, the form opens the visitor's email app addressed to you. To receive messages directly in your inbox:
1. Create a free account at formspree.io and click New Form (use your email).
2. Copy the form URL (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `contactForm.endpoint` in `src/data/portfolioData.js`, then redeploy.

## Changing your profile photo
Permanent: copy the new image into `src/assets/`, then set `photo: 'your-file-name.png'` in `profile` inside `src/data/portfolioData.js`.
Quick try-out: open the site with `?edit` (e.g. `http://localhost:5173/?edit`), click "Change photo" under your picture. This preview is saved only in your own browser; visitors never see the button.
