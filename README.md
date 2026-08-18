# Ronan Ibbotson — Portfolio

A 4-page static site (Home, Education, Experience, Projects) built with
plain HTML/CSS — no build step, so it works on GitHub Pages as-is.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`, or `<your-username>.github.io`
   if you want it at the root of your GitHub domain).
2. Upload everything in this folder to the repo, keeping the folder
   structure (`index.html`, `education.html`, `experience.html`,
   `projects.html`, and the `css/`, `js/`, `assets/` folders all at the
   top level).
3. On GitHub: go to **Settings → Pages**, set **Source** to "Deploy from
   a branch," pick `main` and `/ (root)`, then save.
4. GitHub gives you a URL like `https://<your-username>.github.io/portfolio/`
   (or just `https://<your-username>.github.io/` for a `.github.io` repo)
   within a minute or two.

## Adding your own content

- **Profile photo:** drop your photo into `assets/` (e.g. `assets/profile.jpg`),
  then in `index.html` replace the `<div class="photo-placeholder">` block
  with `<img src="assets/profile.jpg" alt="Ronan Ibbotson" class="hero__photo-img">`.
- **Project photos:** same idea in `projects.html` — replace a
  `<div class="project-image-placeholder">` block with an `<img>` tag.
- **Projects:** each project is one `<article class="project-card">` in
  `projects.html`. Duplicate the block to add more, or delete one to have
  fewer. There's a dark note box at the top of that page explaining this
  in-context too — delete it once you're done.
- **Colors, fonts, spacing:** all defined once at the top of
  `css/style.css` under `:root`, so changing a hex value there updates
  the whole site.

## Optional decorative touches

A few small extras (the faint grid background, the little rotated
"tolerance stamp" tag by the photo, corner datum-mark styling, and the
gentle fade-in on page load) are visual flourishes, not core to the
layout. Each one is called out with a comment in both the HTML files and
in `css/style.css` (search for "DECORATIVE") so you can remove any of
them independently without breaking anything else.

## File structure

```
index.html        Home — profile photo, intro, buttons to other pages
education.html     Education + skills
experience.html    Work experience (3 roles)
projects.html       Placeholder project cards — swap in your own work
css/style.css       All styling, design tokens at the top
js/main.js          Small optional helper (nav active-state highlighting)
assets/             Put your photos here
```
