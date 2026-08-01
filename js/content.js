/* ============================================================
   CONTENT.JS — THE ONLY FILE YOU NEED TO EDIT
   ============================================================ */

const SITE_CONTENT = {

  // ----------------------------------------------------------
  // META — browser tab title
  // ----------------------------------------------------------
  meta: {
    pageTitle: "Happy 25 Birthday, My Love",
    herName: "Her Name",
  },

  // ----------------------------------------------------------
  // 1. HERO
  // ----------------------------------------------------------
  hero: {
    image: "assets/images/hero.jpg",
    imageAlt: "A portrait photo of her",
    eyebrow: "A story, for you mahal",
    title: "My Love, \nMy Sumer",
    subtitle: "This isn't just another story; it is the story of a girl destined to love deeply and be deeply loved.",
    cta: "Begin your story",
  },

  // ----------------------------------------------------------
  // 2. BEFORE WE MET — Horizontal scrollable reel
  // ----------------------------------------------------------
  beforeWeMet: {
    eyebrow: "Chapter One",
    heading: "Matilda",
    intro: "Time has a quiet way of moving when you aren't looking. The magic you bring to the world, remains the same.",
    music: {
      src: "assets/audio/chapter-1.mp3",
      playLabel: "Play the soundtrack",
      pauseLabel: "Pause the soundtrack",
    },
    photos: [
      {
        image: "assets/images/before-we-met-01.jpg",
        imageAlt: "A photo from before we met",
        date: "Somewhere, back then",
        title: "Pure Joy, From the Start",
        caption: "Before I knew you, you are always the girl with same eyes as now. You're a human sunshine.",
      },
      {
        image: "assets/images/before-we-met-02.jpg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Collecting Her Victories",
        caption: "You were out there collecting stories and achievement, long before you had any idea I'd want to hear every one of them now.",
      },
      {
        image: "assets/images/before-we-met-03.jpg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Stepping Into Her Own",
        caption: "Ordinary days that, looking back, were quietly shaping the woman I'd fall for.",
      },
      {
        image: "assets/images/before-we-met-04.jpg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Chasing What She Loved",
        caption: "You always know what you wanted and you never stopped chasing it, my RPM.",
      },
      {
        image: "assets/images/before-we-met-05.jpg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Rooted in Love",
        caption: "The family, friends, relationships and moments that raised the woman I'd eventually meet.",
      },
      {
        image: "assets/images/before-we-met-06.jpg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "The Girl I Fell for",
        caption: "Every version of you before me was already worth loving. You're always a glimmer of joy to everyone around you.",
      },
    ],
  },

  // ----------------------------------------------------------
  // 3. OUR FIRST CHAT
  // ----------------------------------------------------------
  conversations: {
    eyebrow: "Chapter Two",
    heading: "Late Night Talking",
    intro: "Where it all began. I hope I can make you remember the moment i received the best reply I've ever gotten. Just a simple DM, a little bit of nervousness, and no idea that this exact conversation was about to change everything.",
    music: {
      src: "assets/audio/chapter-2.mp3",
      playLabel: "Play the soundtrack",
      pauseLabel: "Pause the soundtrack",
    },
    chat: {
      contactName: "cr0issum",
      date: "July 3, 2025",
      continueLabel: "Will you Date him? →",
      messages: [
        { sender: "me", text: "Hiii 😆" },
        { sender: "her", text: "good morning 😆" },
        { sender: "me", text: "finally nagreply ka na! 😂😂" },
        { sender: "me", text: "idk how to start, pero you're really pretty ha 😆" },
        {
          sender: "her",
          text: "ay totoo ba yung sinend mo na emoji before hahahaha",
          replyTo: "finally nagreply ka na! 😂😂",
        },
        { sender: "her", text: "akala ko kasi napindot lang 😆" },
      ],
    },
  },

  // ----------------------------------------------------------
  // 4. THE DAY WE MET
  // ----------------------------------------------------------
  dayWeMet: {
    eyebrow: "Chapter Three",
    heading: "And Then, Everything Changed",
    date: "Month Day, Year",
    location: "Where it happened",
    title: "Irresistible",
    caption: "Looking back, that was the last ordinary day of my life and the start of everything good. After everything you’d been through, saying yes to me took so much bravery, and I never take that for granted.",
    image: "assets/images/meeting-day.jpg",
    imageAlt: "A photo from the day we met",
    music: {
      src: "assets/audio/chapter-3.mp3",
      playLabel: "Play the soundtrack",
      pauseLabel: "Pause the soundtrack",
    },
    liveClock: {
      startISO: "2026-02-22T16:41:00+08:00",
      heading: "Our answered prayers…",
      subtitle: "Every second since the moment our story began.",
      units: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
    },
  },

  // ----------------------------------------------------------
  // 5. OUR FIRST MEMORIES
  // ----------------------------------------------------------
  firstMemories: {
    eyebrow: "Chapter Four",
    heading: "Adore You",
    intro: "The early days — nervous laughter, long conversations, and the slow, wonderful realization that I never wanted them to end.",
    music: {
      src: "assets/audio/chapter-4.mp3",
      playLabel: "Play the soundtrack",
      pauseLabel: "Pause the soundtrack",
    },
    photos: [
      {
        image: "assets/images/first-memory-01.jpg",
        imageAlt: "An early memory together",
        date: "Early on",
        title: "First Real Conversation",
        caption: "We talked for hours and it still felt too short.",
        layout: "polaroid",
      },
      {
        image: "assets/images/first-memory-02.jpg",
        imageAlt: "An early memory together",
        date: "Soon after",
        title: "That First Date",
        caption: "I was nervous. You made it easy.",
        layout: "editorial",
      },
      {
        image: "assets/images/first-memory-03.jpg",
        imageAlt: "An early memory together",
        date: "A few weeks in",
        title: "The Day I Knew",
        caption: "Somewhere in an ordinary afternoon, I quietly realized this was different.",
        layout: "polaroid",
      },
      {
        image: "assets/images/first-memory-04.jpg",
        imageAlt: "An early memory together",
        date: "",
        title: "Us, Learning Each Other",
        caption: "Every small thing I learned about you became a favorite thing.",
        layout: "editorial",
      },
      {
        image: "assets/images/first-memory-05.jpg",
        imageAlt: "An early memory together",
        date: "",
        title: "The First 'I Miss You'",
        caption: "I hadn't even left yet and I already missed you.",
        layout: "polaroid",
      },
      {
        image: "assets/images/first-memory-06.jpg",
        imageAlt: "An early memory together",
        date: "",
        title: "Meeting Each Other's World",
        caption: "You started showing up in the parts of my life that mattered most.",
        layout: "editorial",
      },
    ],
  },

  // ----------------------------------------------------------
  // 6. THE LITTLE THINGS
  // ----------------------------------------------------------
  littleThings: {
    eyebrow: "Chapter Five",
    heading: "Little Things",
    intro: "Nine little things, hidden away. Tap an icon to reveal the memory behind it.",
    music: {
      src: "assets/audio/chapter-5.mp3",
      playLabel: "Play the soundtrack",
      pauseLabel: "Pause the soundtrack",
    },
    items: [
      {
        key: "gift",
        icon: "🎁",
        label: "Gift",
        image: "assets/images/little-thing-01.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "The way you laugh at your own jokes before you finish telling them.",
      },
      {
        key: "bread",
        icon: "🍞",
        label: "Bread",
        image: "assets/images/little-thing-02.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "Lazy Sunday mornings that turned into whole afternoons.",
      },
      {
        key: "lilies",
        icon: "🌸",
        label: "Flower",
        image: "assets/images/little-thing-03.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "That random text that made my entire day better.",
      },
      {
        key: "waffle",
        icon: "🧇",
        label: "Waffle",
        image: "assets/images/little-thing-04.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "Every playlist you've ever made me listen to 'just this one song.'",
      },
      {
        key: "dog",
        icon: "🐶",
        label: "Dog",
        image: "assets/images/little-thing-05.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "The face you make when you're concentrating on something silly.",
      },
      {
        key: "chefHat",
        icon: "👨‍🍳",
        label: "Baker",
        image: "assets/images/little-thing-06.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "Falling asleep mid-conversation because neither of us wanted the day to end.",
      },
      {
        key: "yoga",
        icon: "🧘",
        label: "Yoga",
        image: "assets/images/little-thing-07.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "The way you always steal the last bite off my plate.",
      },
      {
        key: "saturn",
        icon: "🪐",
        label: "Interstellar",
        image: "assets/images/little-thing-08.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "Inside jokes that still make us laugh, every single time.",
      },
      {
        key: "mic",
        icon: "🎤",
        label: "Harry",
        image: "assets/images/little-thing-09.jpg",
        imageAlt: "A little everyday moment",
        date: "",
        caption: "You, half-asleep, still reaching for my hand.",
      },
    ],
  },

  // ----------------------------------------------------------
  // 7. OUR JOURNEY TOGETHER
  // ----------------------------------------------------------
  journey: {
    eyebrow: "Chapter Six",
    heading: "If I Could Fly",
    intro: "From then to now — a timeline of the moments that built us.",
    music: {
      src: "assets/audio/chapter-6.mp3",
      playLabel: "Play the soundtrack",
      pauseLabel: "Pause the soundtrack",
    },
    milestones: [
      {
        image: "assets/images/journey-01.jpg",
        imageAlt: "A milestone in our journey",
        date: "April",
        title: "Yellow Daisies",
        caption: "Somewhere new, together for the first time — and it already felt like home.",
      },
      {
        image: "assets/images/journey-02.jpg",
        imageAlt: "A milestone in our journey",
        date: "May",
        title: "Our First Trip",
        caption: "We learned that we're better at facing life together than apart.",
      },
      {
        image: "assets/images/journey-03.jpg",
        imageAlt: "A milestone in our journey",
        date: "June",
        title: "Photobooth",
        caption: "Still choosing you. Still grateful. Still writing this story with you.",
      },
    ],
  },

  // ----------------------------------------------------------
  // 8. THE MOVIE OF US — Chapter Eight (CapCut video)
  // ----------------------------------------------------------
  movieOfUs: {
    eyebrow: "Chapter Eight",
    heading: "The Movie of Us",
    intro: "Some memories are held in photographs. Others deserve to move, breathe, and be remembered all over again.",
    label: "A Little Film For You",
    video: "assets/videos/our-story.mp4",
    playLabel: "Tap to play",
    playAria: "Play our story video",
    muteLabel: "Tap for sound",
    muteAria: "Turn on sound",
    endMessage: "And somehow, every little moment led us here. ♡",
    replayLabel: "Watch again",
  },

  // ----------------------------------------------------------
  // 9. FINAL BIRTHDAY MESSAGE
  // ----------------------------------------------------------
  finalMessage: {
    image: "assets/images/final-photo.jpg",
    imageAlt: "A meaningful photo of us",
    eyebrow: "To be continued…",
    heading: "Happy Birthday Mahal",
    message: "Of every story you've ever lived, I'm endlessly grateful mine gets to be a part of yours. Here's to the girl you were, the woman you are, and every chapter we haven't written yet. I love you more today than yesterday — and that's saying a lot.",
    signature: "Yours, always",
    // Chapter 7's own soundtrack. Replace the src below with your own
    // audio file (mp3) — same pattern as every other chapter's music.
    music: {
      src: "assets/audio/chapter-7.mp3",
      playLabel: "Play the soundtrack",
      pauseLabel: "Pause the soundtrack",
    },
  },
};
