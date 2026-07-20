/* ============================================================
   CONTENT.JS — THE ONLY FILE YOU NEED TO EDIT
   ============================================================
   This file holds every photo, caption, date, and word of text
   on the site. To personalize the site:

   1. Add your real photos into /assets/images/
      (any filename you like — jpg, png, or webp all work)
   2. Update the "src" paths below to point to your new files
   3. Edit the text fields (title, caption, date, location...)

   You never need to touch index.html, style.css, or main.js
   to change content — this file is the single source of truth.
   ============================================================ */

const SITE_CONTENT = {

  // ----------------------------------------------------------
  // META — browser tab title
  // ----------------------------------------------------------
  meta: {
    pageTitle: "Happy Birthday, My Love",
    herName: "Her Name",
  },

  // ----------------------------------------------------------
  // 1. HERO
  // ----------------------------------------------------------
  hero: {
    image: "assets/images/hero.svg",
    imageAlt: "A portrait photo of her",
    eyebrow: "A story, for you",
    title: "Once upon a time,\nthere was a girl…",
    subtitle: "And then, somehow, our stories became one.",
    cta: "Begin Our Story",
  },

  // ----------------------------------------------------------
  // 2. BEFORE WE MET
  // ----------------------------------------------------------
  beforeWeMet: {
    eyebrow: "Chapter One",
    heading: "Before We Met",
    intro: "Long before I knew her name, she was already living a whole life — one full of small joys, quiet dreams, and moments that were entirely her own.",
    photos: [
      {
        image: "assets/images/before-we-met-01.svg",
        imageAlt: "A photo from before we met",
        date: "Somewhere, back then",
        title: "A Girl, Becoming",
        caption: "Before I knew you, you were already becoming the person I would someday love.",
      },
      {
        image: "assets/images/before-we-met-02.svg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Her Own Adventures",
        caption: "You were out there collecting stories, long before you had any idea I'd want to hear every one of them.",
      },
      {
        image: "assets/images/before-we-met-03.svg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Little Moments",
        caption: "Ordinary days that, looking back, were quietly shaping the woman I'd fall for.",
      },
      {
        image: "assets/images/before-we-met-04.svg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Chasing What She Loved",
        caption: "You already knew how to chase joy on your own terms — that never changed.",
      },
      {
        image: "assets/images/before-we-met-05.svg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "The People Who Shaped Her",
        caption: "The friends, family, and moments that raised the woman I'd eventually meet.",
      },
      {
        image: "assets/images/before-we-met-06.svg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Still Becoming",
        caption: "Every version of you before me was already worth loving.",
      },
    ],
  },

  // ----------------------------------------------------------
  // 3. THE DAY WE MET
  // ----------------------------------------------------------
  dayWeMet: {
    eyebrow: "Chapter Two",
    heading: "The Day We Met",
    date: "Month Day, Year",
    location: "Where it happened",
    title: "And Then, Everything Changed",
    caption: "I didn't know it yet, but that was the last ordinary day I'd ever have. Every day since has had you in it.",
    image: "assets/images/meeting-day.svg",
    imageAlt: "A photo from the day we met",
  },

  // ----------------------------------------------------------
  // 4. OUR FIRST MEMORIES
  // ----------------------------------------------------------
  firstMemories: {
    eyebrow: "Chapter Three",
    heading: "Our First Memories",
    intro: "The early days — nervous laughter, long conversations, and the slow, wonderful realization that I never wanted them to end.",
    photos: [
      {
        image: "assets/images/first-memory-01.svg",
        imageAlt: "An early memory together",
        date: "Early on",
        title: "First Real Conversation",
        caption: "We talked for hours and it still felt too short.",
        layout: "polaroid",
      },
      {
        image: "assets/images/first-memory-02.svg",
        imageAlt: "An early memory together",
        date: "Soon after",
        title: "That First Date",
        caption: "I was nervous. You made it easy.",
        layout: "editorial",
      },
      {
        image: "assets/images/first-memory-03.svg",
        imageAlt: "An early memory together",
        date: "A few weeks in",
        title: "The Day I Knew",
        caption: "Somewhere in an ordinary afternoon, I quietly realized this was different.",
        layout: "polaroid",
      },
      {
        image: "assets/images/first-memory-04.svg",
        imageAlt: "An early memory together",
        date: "",
        title: "Us, Learning Each Other",
        caption: "Every small thing I learned about you became a favorite thing.",
        layout: "editorial",
      },
      {
        image: "assets/images/first-memory-05.svg",
        imageAlt: "An early memory together",
        date: "",
        title: "The First 'I Miss You'",
        caption: "I hadn't even left yet and I already missed you.",
        layout: "polaroid",
      },
      {
        image: "assets/images/first-memory-06.svg",
        imageAlt: "An early memory together",
        date: "",
        title: "Meeting Each Other's World",
        caption: "You started showing up in the parts of my life that mattered most.",
        layout: "editorial",
      },
    ],
  },

  // ----------------------------------------------------------
  // 5. OUR JOURNEY TOGETHER (vertical timeline)
  // ----------------------------------------------------------
  journey: {
    eyebrow: "Chapter Four",
    heading: "Our Journey Together",
    intro: "From then to now — a timeline of the moments that built us.",
    milestones: [
      {
        image: "assets/images/journey-01.svg",
        imageAlt: "A milestone in our journey",
        date: "Year",
        title: "Our First Trip",
        caption: "Somewhere new, together for the first time — and it already felt like home.",
      },
      {
        image: "assets/images/journey-02.svg",
        imageAlt: "A milestone in our journey",
        date: "Year",
        title: "Meeting the People We Love",
        caption: "You met the people who matter most to me. They understood, instantly, why I love you.",
      },
      {
        image: "assets/images/journey-03.svg",
        imageAlt: "A milestone in our journey",
        date: "Year",
        title: "Through the Hard Days",
        caption: "We learned that we're better at facing life together than apart.",
      },
      {
        image: "assets/images/journey-04.svg",
        imageAlt: "A milestone in our journey",
        date: "Year",
        title: "A Place of Our Own",
        caption: "Somewhere along the way, 'my place' and 'your place' became simply 'ours.'",
      },
      {
        image: "assets/images/journey-05.svg",
        imageAlt: "A milestone in our journey",
        date: "Year",
        title: "Right Now",
        caption: "Still choosing you. Still grateful. Still writing this story with you.",
      },
      {
        image: "assets/images/journey-06.svg",
        imageAlt: "A milestone in our journey",
        date: "This year",
        title: "What's Next",
        caption: "Whatever comes next, I already know I want you next to me for it.",
      },
    ],
  },

  // ----------------------------------------------------------
  // 6. THE LITTLE THINGS
  // ----------------------------------------------------------
  littleThings: {
    eyebrow: "Chapter Five",
    heading: "The Little Things",
    intro: "Not every memory needs a big occasion. Some of my favorites are the smallest ones.",
    items: [
      {
        image: "assets/images/little-thing-01.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "The way you laugh at your own jokes before you finish telling them.",
      },
      {
        image: "assets/images/little-thing-02.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "Lazy Sunday mornings that turned into whole afternoons.",
      },
      {
        image: "assets/images/little-thing-03.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "That random text that made my entire day better.",
      },
      {
        image: "assets/images/little-thing-04.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "Every playlist you've ever made me listen to 'just this one song.'",
      },
      {
        image: "assets/images/little-thing-05.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "The face you make when you're concentrating on something silly.",
      },
      {
        image: "assets/images/little-thing-06.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "Falling asleep mid-conversation because neither of us wanted the day to end.",
      },
      {
        image: "assets/images/little-thing-07.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "The way you always steal the last bite off my plate.",
      },
      {
        image: "assets/images/little-thing-08.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "Inside jokes that still make us laugh, every single time.",
      },
      {
        image: "assets/images/little-thing-09.svg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "You, half-asleep, still reaching for my hand.",
      },
    ],
  },

  // ----------------------------------------------------------
  // 7. FINAL BIRTHDAY MESSAGE
  // ----------------------------------------------------------
  finalMessage: {
    image: "assets/images/final-photo.svg",
    imageAlt: "A meaningful photo of us",
    eyebrow: "To be continued…",
    heading: "Happy Birthday, My Love",
    message: "Of every story you've ever lived, I'm endlessly grateful mine gets to be a part of yours. Here's to the girl you were, the woman you are, and every chapter we haven't written yet. I love you more today than yesterday — and that's saying a lot.",
    signature: "Yours, always",
  },
};
