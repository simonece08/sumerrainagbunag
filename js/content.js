/* ============================================================
   CONTENT.JS — THE ONLY FILE YOU NEED TO EDIT
   ============================================================ */

const SITE_CONTENT = {

  // ----------------------------------------------------------
  // META — browser tab title
  // ----------------------------------------------------------
  meta: {
    pageTitle: "Happy 25 Birthday, My Love SRA",
    herName: "Her Name",
  },

  // ----------------------------------------------------------
  // 1. HERO
  // ----------------------------------------------------------
  hero: {
    image: "assets/images/hero.jpg",
    imageAlt: "A portrait photo of her",
    eyebrow: "A story for you mahal",
    title: "My Love, \nMy Sumer",
    subtitle: "This isn't just another story; it is the story of a girl destined to love deeply and be deeply loved.",
    cta: "START",
  },

  // ----------------------------------------------------------
  // 2. BEFORE WE MET — Horizontal scrollable reel
  // ----------------------------------------------------------
  beforeWeMet: {
    eyebrow: "Chapter One",
    heading: "Matilda",
    intro: "Before I knew you, there was a little girl with dreams and laughter. A whole life waiting ahead of her. How I wish I could have known you back then.",
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
        caption: "You're a living prayer mahal, thank you for tito Glen and Tita Rizza for bringing you into this world",
      },
      {
        image: "assets/images/before-we-met-02.jpg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Collecting Her Victories",
        caption: "Before I knew you, you are always the girl with same joy as now. Never stop sharing your smile to everyone around you.",
      },
      {
        image: "assets/images/before-we-met-03.jpg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "Stepping Into Her Own",
        caption: "Days that, looking back, were quietly shaping the woman I'd fall for. I'll always be here to support you every step of your way, through your highs and especially with your lows",
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
        caption: "The family, friends, relationships and moments that raised the bravest woman I'll ever meet",
      },
      {
        image: "assets/images/before-we-met-06.jpg",
        imageAlt: "A photo from before we met",
        date: "",
        title: "The Girl I Fell for",
        caption: "Every version of you before me was already worth loving and may nooone else tell you otherwise. You're always a glimmer of joy to everyone around you and a hope for me, your SMS.",
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
    date: "Feb. 22, 2026",
    location: "Gondola Coffee",
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
  intro: "The early days, nervous laughter, long conversations, and popcorn kisses. Lovely moments that slowly shaped our relationship.",
  music: {
    src: "assets/audio/chapter-4.mp3",
    playLabel: "Play the soundtrack",
    pauseLabel: "Pause the soundtrack",
  },
  photos: [
    {
      image: "assets/images/first-memory-01.jpg",
      imageAlt: "An early memory together",
      date: "March 10",
      title: "First Kiss",
      caption: "After our first date, I already knew I wanted to see you again. Being with you just feels so natural.",
      layout: "polaroid",
    },
    {
      image: "assets/images/first-memory-02.jpg",
      imageAlt: "An early memory together",
      date: "March 15",
      title: "Us, Learning Each Other",
      caption: "That day wasn't perfect, but it taught me more about us. We were still learning how to understand each other.",
      layout: "editorial",
    },
    {
      image: "assets/images/first-memory-03.jpg",
      imageAlt: "An early memory together",
      date: "March 28",
      title: "Wonderwall",
      caption: "A simple movie night about being far from home, yet somehow, it brought us a little closer.",
      layout: "polaroid",
    },
    {
      image: "assets/images/first-memory-04.jpg",
      imageAlt: "An early memory together",
      date: "April 13",
      title: "Slow Moments",
      caption: "Nothing extraordinary happened that day. It was just us, sharing a quiet moment together. Somehow, ordinary moments like these became some of my favorite memories of you. Thank You for waiting!!! :>",
      layout: "editorial",
    },
    {
      image: "assets/images/first-memory-05.jpg",
      imageAlt: "An early memory together",
      date: "March 29",
      title: "Best Day Yet",
      caption: "This was the day I became convinced that I really want to marry you.",
      layout: "polaroid",
    },
    {
      image: "assets/images/first-memory-06.jpg",
      imageAlt: "An early memory together",
      date: "May 8",
      title: "Meeting Each Other's World",
      caption: "That night, we shared a kind of closeness we had never experienced before. Being vulnerable with each other made what we have feel so much deeper.",
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
  intro: "Nine little things that remind me of you. Some are your favorites, and some are the little things about you that I love.",
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
      imageAlt: "Your thoughtfulness, the way you make me feel remembered and appreciated",
      date: "",
      caption: "Your thoughtfulness, the way you make me feel remembered and appreciated.",
    },
    {
      key: "bread",
      icon: "🧠",
      label: "Psychologist",
      image: "assets/images/little-thing-02.jpg",
      imageAlt: "Your future profession and your ability to read my mind",
      date: "",
      caption: "Your future profession, but most of the time, you already know what's on my mind because you can read it before I even say a word.",
    },
    {
      key: "lilies",
      icon: "🌸",
      label: "Flowers",
      image: "assets/images/little-thing-03.jpg",
      imageAlt: "Your favorite flowers and the beginning of our story",
      date: "",
      caption: "Your favorite flowers. I love making you feel appreciated and reminding you of how we started.",
    },
    {
      key: "waffle",
      icon: "🧇",
      label: "Chicken & Waffles",
      image: "assets/images/little-thing-04.jpg",
      imageAlt: "Our favorite comfort food",
      date: "",
      caption: "Your favorite comfort food(and naging OUR na din), chicken and waffles, one of the little things that brings out your happiest smile.",
    },
    {
      key: "dog",
      icon: "🐶",
      label: "Blacky",
      image: "assets/images/little-thing-05.jpg",
      imageAlt: "Blacky, your little companion who reminds you of home",
      date: "",
      caption: "Your little companion, Blacky, who reminds you of home and brings so much love into your life.",
    },
    {
      key: "chefHat",
      icon: "👨‍🍳",
      label: "Baker",
      image: "assets/images/little-thing-06.jpg",
      imageAlt: "Your love for baking bread and pastries",
      date: "",
      caption: "Your love for bread and pastries, and the comfort you find in making them and making everything feel so special.",
    },
    {
      key: "yoga",
      icon: "🧘",
      label: "Yoga",
      image: "assets/images/little-thing-07.jpg",
      imageAlt: "Yoga, your hobby for clearing your mind",
      date: "",
      caption: "Your way of clearing your mind, a hobby that helps you find your peace and makes your days feel a little lighter.",
    },
    {
      key: "saturn",
      icon: "🪐",
      label: "Interstellar",
      image: "assets/images/little-thing-08.jpg",
      imageAlt: "Your favorite movie and one of the things that defined our early conversations",
      date: "",
      caption: "Your favorite movie, the one that became part of our early conversations and one of the first things I loved learning about you.",
    },
    {
      key: "mic",
      icon: "🎤",
      label: "Harry Styles",
      image: "assets/images/little-thing-09.jpg",
      imageAlt: "Harry Styles, your idol",
      date: "",
      caption: "Harry, the GOAT, and the one person who can probably make you smile faster than I can.",
    },
  ],
},
  // ----------------------------------------------------------
  // 7. OUR JOURNEY TOGETHER
  // ----------------------------------------------------------
  journey: {
    eyebrow: "Chapter Six",
    heading: "If I Could Fly",
    intro: "From then to now, a timeline of the moments that built us.",
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
        caption: "I still remember this moment so well. It was one of the first times, mahal, we got to be together and feel each other like this, and somehow everything felt so easy. Looking at you that night, all surrounded by yellow daisies and kisses, I remember thinking how blessed I was that I got to cherish those moments with you.",
      },
      {
        image: "assets/images/journey-02.jpg",
        imageAlt: "A milestone in our journey",
        date: "May",
        title: "Our First Trip",
        caption: "Our first trip together showed me a different side of us. Apologies first for the wrong taxi drop off and long walk mahal, lol. Over those two days, We got to spend more time together, share the little things, and exist beside each other. I loved waking up knowing you were there and I loved going through every street, and having a full tummy with you. It made me realize that somehow I need to slow down in life and cherish moments like this with my loved ones, especially you.",
      },
      {
        image: "assets/images/journey-03.jpg",
        imageAlt: "A milestone in our journey",
        date: "June",
        title: "Photobooth",
        caption: "I love looking at this picture because they remind me of how far we've already come even after just 6 months. We were still figuring each other out, still making memories, and still learning how to love each other better. I'm sorry for being a sakit ng ulo sa mahal ko",
      },
    ],
  },

  // ----------------------------------------------------------
  // 8. THE MOVIE OF US — Chapter Eight (CapCut video)
  // ----------------------------------------------------------
  movieOfUs: {
    eyebrow: "Chapter Eight",
    heading: "Sweet Creature",
    intro: "For my sweet creature, Sumer.",
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
    eyebrow: "End",
    heading: "Happy Birthday Mahal",
message: "Dear Sumer, I don't think I ever expected someone to become this important to me. Somewhere between our first conversations, our happiest moments, our misunderstandings,  and everything in between, you became someone I couldn't imagine my life without. I love the way you make me laugh, you appreciate things, your dedication in your craft, the way you have so much friends, the way you love your family, and the way you bring joy, and joy just goes naturally with you. You're a sunshine mahal and I love how genuine your joy is. I love watching you chase the things you care about, and I love being there for the dreams you haven't reached yet. I know your parents aren't there for you right now, even during your review, and I see how much that hurts but I want you to know I'm here mahal, I see you and I'm not going anywhere. Of every story you've ever lived, I'm endlessly blessed mine gets to be a part of yours. I know we won't always have perfect days, we've already had moments that are testing our relationship but those moments taught me something too. I love you so much",
    signature: "Yours, always in all ways",
    // Chapter 7's own soundtrack. Replace the src below with your own
    // audio file (mp3) — same pattern as every other chapter's music.
    music: {
      src: "assets/audio/chapter-7.mp3",
      playLabel: "Play the soundtrack",
      pauseLabel: "Pause the soundtrack",
    },
  },
};
