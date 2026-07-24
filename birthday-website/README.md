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

## Sections, in order

1. Hero — opening portrait + title
2. **Chapter One** — Before We Met
3. **Chapter Two** — The Conversations That Started It
4. **Chapter Three** — The Day We Met
5. **Chapter Four** — Our First Memories
6. **Chapter Five** — The Little Things
7. **Chapter Six** — Our Journey Together
8. Final Birthday Message

Each section's photo count is adjustable — add or remove an object from the
relevant array in `content.js` (e.g. `beforeWeMet.photos`, `journey.milestones`,
`littleThings.items`, `conversations.chat.messages`) and the layout adapts automatically.

> **Note on "chapter numbers":** the site's internal chapter labels (One
> through Six, shown as the small eyebrow text above each heading) count
> Our First Chat as Chapter Two and The Little Things as Chapter Five. If
> you've been calling these by different numbers elsewhere, just match by
> content/heading rather than number.

## Chapter Two: Our First Chat

An animated recreation of your real first conversation — a typing indicator
plays, then each message slides in one at a time, in order, exactly like
watching it happen live. It plays once, the first time a visitor scrolls to
it, and won't restart if they scroll away and back. A "Continue our story →"
button fades in once the conversation finishes.

**Where to edit the conversation:** in `js/content.js`, under `conversations.chat`:

```js
conversations: {
  chat: {
    contactName: "Her ♡",
    date: "July 3, 2025",
    continueLabel: "Continue our story →",
    messages: [
      { sender: "me",  text: "Hiii 😆" },
      { sender: "her", text: "good morning 😆" },
      { sender: "me",  text: "finally nagreply ka na! 😂😂" },
      {
        sender: "her",
        text: "ay totoo ba yung sinend mo na emoji before hahahaha",
        replyTo: "finally nagreply ka na! 😂😂",  // optional — shows as a quoted reply
      },
      // ...
    ],
  },
}
```

- `sender` is `"me"` (gold bubble, right side) or `"her"` (bubble, left side).
- `replyTo` is optional — add it to show that message as a reply-quote above
  the bubble, the way the original screenshot showed it.
- Add, remove, or reorder objects in `messages` to change the conversation —
  the animation timing adapts automatically to each message's length.

## Chapter three: The Day We Met — live elapsed-time clock

A live counter under the "Day We Met" content shows days / hours / minutes /
seconds elapsed since **February 22, 2025, 4:30 PM Philippine Time**, updating
every second. It's timezone-safe: the start time is written with a fixed
`+08:00` offset (Asia/Manila doesn't observe daylight saving), so every
visitor sees the same correct count regardless of their own timezone.

**Where to edit it:** in `js/content.js`, under `dayWeMet.liveClock`:

```js
liveClock: {
  startISO: "2025-02-22T16:30:00+08:00",   // don't change unless the actual date/time changes
  heading: "We've been part of each other's story for…",
  subtitle: "Every second since the moment our story began.",
  units: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
}
```

## Chapter Five: The Little Things — 9 hidden memories

Instead of showing all 9 photos at once, this chapter now shows a 3×3 grid
of icons (🎁 🍞 🌸 🧇 🐶 👨‍🍳 🧘 🪐 🎤). Tapping one plays a short animation
specific to that icon, a small sparkle burst, then opens a polaroid-style
card with that memory's photo and caption. Tap the × or click outside to
close and reveal another.

**Where to edit icons, images, and captions:** in `js/content.js`, under
`littleThings.items`:

```js
items: [
  {
    key: "gift",              // controls which click animation plays — keep as-is
    icon: "🎁",
    label: "Gift",
    image: "assets/images/little-thing-01.svg",
    caption: "The way you laugh at your own jokes before you finish telling them.",
  },
  // ... bread, lilies, waffle, dog, chefHat, yoga, saturn, mic
]
```

- Change `image` to point to your real photo for each memory.
- Change `caption` (and `icon`/`label` if you like) freely.
- Keep each `key` as-is (`gift`, `bread`, `lilies`, `waffle`, `dog`, `chefHat`,
  `yoga`, `saturn`, `mic`) — that's what tells the site which click animation
  to play for that tile. Reordering the array is fine; renaming a `key` will
  just make that tile fall back to a plain pop animation (still smooth, just
  not the icon-specific one).

**Where to place the 9 real photos:** `assets/images/` — currently
`little-thing-01.svg` through `little-thing-09.svg` are placeholders; replace
them (any filename/format works, just update the `image` path to match).

## Chapter music system

Every chapter from One through Six has its own "Play the soundtrack" button.
Only one chapter's music plays at a time — starting a new one automatically
pauses whichever was playing. Music never autoplays; the visitor has to tap.

**Where to put the audio files:** `assets/audio/`

| File | Chapter |
|---|---|
| `chapter-1.mp3` | Before We Met |
| `chapter-2.mp3` | The Conversations That Started It |
| `chapter-3.mp3` | The Day We Met |
| `chapter-4.mp3` | Our First Memories |
| `chapter-5.mp3` | The Little Things |
| `chapter-6.mp3` | Our Journey Together |

The project currently ships with short silent `.mp3` placeholders in that
folder so you can test the play/pause behavior immediately — just replace
each file with your real track, keeping the same filename (or update the
`music.src` path in `content.js` if you rename them).

**Where to edit the button text:** each chapter's `music` block in `content.js`:

```js
music: {
  src: "assets/audio/chapter-1.mp3",
  playLabel: "Play the soundtrack",
  pauseLabel: "Pause the soundtrack",
}
```

**If an audio file is missing or broken:** the button quietly disables itself
(grayed out, "Soundtrack unavailable" tooltip) — the rest of the page keeps
working normally, no crashes, no extra console errors from our code.

## Testing the music system locally

1. Open `index.html` directly in a browser (double-click it, or right-click →
   Open With → your browser).
2. Scroll to any chapter and tap its "Play the soundtrack" button — it should
   switch to "Pause the soundtrack" and start playing.
3. Tap another chapter's button — the first one should stop and switch back
   to "Play the soundtrack" automatically.
4. Tap the currently-playing button again to pause it manually.
5. Let a track play to the end — the button should reset to "Play" on its own.
6. Try temporarily renaming an mp3 file — the page should still load fine and
   that chapter's button should just stop responding, without breaking anything else.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Upload the entire contents of this folder — `index.html`, `css/`, `js/`,
   `assets/` — keeping the same folder structure, to the repo root (or to a
   `/docs` folder if you prefer that GitHub Pages source option).
3. In the repo, go to **Settings → Pages**, set the source branch, and (if you
   used `/docs`) select that folder.
4. Save — GitHub will give you a live URL, usually
   `https://<your-username>.github.io/<repo-name>/`.
5. Every path in the project is relative (`assets/images/...`,
   `assets/audio/...`), so it works whether the site is served from the repo
   root or a subfolder — no path changes needed.

## Structure

```
index.html                    → page structure (rarely needs editing)
css/style.css                 → all visual design (rarely needs editing)
js/content.js                 → ALL text, photo paths, audio paths — edit this
js/main.js                    → renders content.js into the page, runs the music
                                 system (rarely needs editing)
assets/images/                → drop your real photos in here
assets/images/conversations/  → drop your 3 (or more) chat screenshots here
assets/audio/                 → drop your 6 chapter soundtracks here
```
