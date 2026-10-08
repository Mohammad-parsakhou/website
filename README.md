# Mohammad Parsakhou: personal website

A one-page, responsive portfolio built with plain HTML, CSS and JavaScript.
No build step, no frameworks, no dependencies (only Google Fonts).

```
personal-website/
├── index.html        page structure (sections, navigation)
├── css/styles.css    design: colours, fonts, layout, dark mode
├── js/content.js     ALL your personal info (edit this one)
├── js/main.js        puts content.js on the page, menu + smooth scroll
├── assets/           put your photo and resume here
└── .nojekyll         tells GitHub Pages to serve files as-is
```

## Customize it (everything is in `js/content.js`)

Anything in `[square brackets]` is a placeholder. It shows on the page with a
dashed amber highlight. Replace it, brackets included, and the highlight goes away.

| What | Field in `content.js` |
|---|---|
| Name | `name`, `initials` |
| Titles under your name | `roles` |
| Hero line and short intro | `headline`, `intro` (the intro is a draft from your skills list) |
| Photos | put images in `assets/`, then set `photo` (hero), `aboutPhoto` (About), `lifePhoto` (Beyond work) and the `life.gallery` `src` values |
| Resume button | copy a PDF to `assets/resume.pdf`, then set `resume: "assets/resume.pdf"` |
| About me | `about.summary`, `background`, `journey`, `interests`, `motivation`, `currentFocus` |
| My story | `story.chapters` (when, title, text, learned, links) |
| Beyond work | `life.text`, `life.hobbies`, `life.gallery` |
| French | everything under `SITE_FR` at the bottom of `content.js` |
| Skills cards | `skills` (title, description, "why it helps", tags, icon) |
| Projects | `projects` (title, role, description, tags, url; set `url: ""` to hide the button) |
| Contact | `contact.email`, `contact.linkedin`, `contact.github` (empty GitHub hides it) |

Colours and fonts are the tokens at the top of `css/styles.css` (`--accent` is the blue).

Open `index.html` in any browser to preview your edits.

## Publish on GitHub Pages

1. Create a repository on GitHub. For the address `https://<username>.github.io`,
   name it exactly `<username>.github.io`; any other name gives
   `https://<username>.github.io/<repo-name>/`.
2. Upload everything inside this folder (including `.nojekyll`) to the repository root
   (Add file → Upload files, or `git push`).
3. In the repository go to **Settings → Pages**, set **Source** to
   *Deploy from a branch*, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at the address shown on that page.

All paths are relative, so the site works from either address without changes.
