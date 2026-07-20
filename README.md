# Her Birthday Website

A single-page, cinematic scrapbook website — her story, then your story together.

## How to open it

Double-click `index.html` to open it in any browser. That's it — no build step, no install.

## How to customize it (this is the only part you need)

Everything you'll want to change lives in **`js/content.js`**. Open it in any text
editor (Notepad, TextEdit, VS Code, etc). You'll find plain, labeled fields like:

```js
hero: {
  image: "assets/images/hero.svg",
  title: "Once upon a time,\nthere was a girl…",
  subtitle: "And then, somehow, our stories became one.",
  ...
}
```

To change a photo:
1. Drop your real photo into `assets/images/` (jpg, png, or webp all work — any filename).
2. Update the matching `image:` path in `content.js` to point to your new filename.

To change any text (titles, captions, dates, the birthday message):
- Just edit the text between the quotes in `content.js` and save.

You never need to touch `index.html`, `css/style.css`, or `js/main.js` — those
just render whatever is in `content.js`.

## What's currently placeholder

Every photo is currently a soft golden placeholder graphic labeled with its
filename (e.g. "BEFORE-WE-MET-01") so you can see exactly which image goes
where. All captions, dates, and locations are placeholder text too — written
in the intended tone so you can see how it will read once personalized.

## Structure

```
index.html            → page structure (rarely needs editing)
css/style.css          → all visual design (rarely needs editing)
js/content.js          → ALL text + photo paths — edit this
js/main.js             → renders content.js into the page (rarely needs editing)
assets/images/         → drop your real photos in here
```

## Sections, in order

1. Hero — opening portrait + title
2. Before We Met — her life before you
3. The Day We Met — the turning point
4. Our First Memories — early days, scrapbook layout
5. Our Journey Together — vertical timeline
6. The Little Things — everyday moments grid
7. Final Birthday Message — closing message to her

Each section's photo count is adjustable — add or remove an object from the
relevant array in `content.js` (e.g. `beforeWeMet.photos`, `journey.milestones`,
`littleThings.items`) and the layout will adapt automatically.
