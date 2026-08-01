/* ============================================================
   MAIN.JS
   ============================================================ */

(function () {
  const C = SITE_CONTENT;

  /* ---------- small render helpers ---------- */
  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { const el = $(id); if (el && value != null) el.textContent = value; };
  const setImg = (id, src, alt) => { const el = $(id); if (el) { el.src = src; el.alt = alt || ""; } };

  function escapeHTML(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  /* ---------- page meta ---------- */
  document.title = C.meta.pageTitle || "Happy Birthday";

  /* ---------- HERO ---------- */
  setImg("heroImage", C.hero.image, C.hero.imageAlt);
  setText("heroEyebrow", C.hero.eyebrow);
  setText("heroTitle", C.hero.title);
  setText("heroSubtitle", C.hero.subtitle);
  setText("heroCtaLabel", C.hero.cta);
  $("heroCta").addEventListener("click", () => {
    $("before-we-met").scrollIntoView({ behavior: "smooth" });
  });

  /* ---------- BEFORE WE MET — Horizontal Reel with Decorations ---------- */
  setText("beforeEyebrow", C.beforeWeMet.eyebrow);
  setText("beforeHeading", C.beforeWeMet.heading);
  setText("beforeIntro", C.beforeWeMet.intro);

  (function initBeforeReel() {
    const wrapper = $("beforeReel");
    const nav = $("beforeReelNav");
    const photos = C.beforeWeMet.photos || [];
    
    if (!wrapper || !nav || photos.length === 0) return;
    
    // Decorative icon sets for each slide based on theme
    const decoSets = [
      // Slide 0: Pure Joy - sun, sparkles, hearts
      {
        icons: ['☀️', '✨', '💛', '🌸', '⭐', '🌻', '💫', '🌺'],
        positions: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center-left', 'center-right', 'mid-left', 'mid-right']
      },
      // Slide 1: Collecting Victories - stars, crowns, trophies
      {
        icons: ['⭐', '👑', '🏆', '✨', '🌟', '🎯', '💫', '🌈'],
        positions: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center-left', 'center-right', 'mid-left', 'mid-right']
      },
      // Slide 2: Stepping Into Her Own - flowers, butterflies
      {
        icons: ['🌸', '🦋', '🌷', '💐', '🌺', '🌻', '🌹', '🌿'],
        positions: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center-left', 'center-right', 'mid-left', 'mid-right']
      },
      // Slide 3: Chasing What She Loved - rockets, stars, music
      {
        icons: ['🚀', '⭐', '🎵', '🌙', '✨', '🎶', '💫', '🌈'],
        positions: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center-left', 'center-right', 'mid-left', 'mid-right']
      },
      // Slide 4: Rooted in Love - hearts, plants, home
      {
        icons: ['💚', '🌱', '🏠', '💛', '🌳', '🌸', '💕', '🌿'],
        positions: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center-left', 'center-right', 'mid-left', 'mid-right']
      },
      // Slide 5: The Girl I Fell for - hearts, stars, sparkles
      {
        icons: ['💖', '✨', '⭐', '🌹', '💕', '🌟', '💗', '🌺'],
        positions: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center-left', 'center-right', 'mid-left', 'mid-right']
      }
    ];
    
    // Build slides with decorations
    wrapper.innerHTML = photos.map((p, i) => {
      const rotations = ['-1.6deg', '1.2deg', '-0.8deg', '2deg', '-1.2deg', '0.6deg'];
      const rotation = rotations[i % rotations.length];
      const decoSet = decoSets[i % decoSets.length];
      
      // Build decoration HTML
      let decoHTML = '';
      if (decoSet) {
        decoSet.icons.forEach((icon, idx) => {
          const pos = decoSet.positions[idx] || 'top-left';
          const isTiny = idx >= 8;
          const extraClass = isTiny ? ` chapter-reel__deco--tiny-${idx - 7}` : '';
          decoHTML += `<span class="chapter-reel__deco chapter-reel__deco--${pos}${extraClass}" aria-hidden="true">${icon}</span>`;
        });
      }
      
      let caption = p.caption || '';
      
      // Add decorative divider
      const dividerIcons = ['✦', '·', '✦', '·', '✦'];
      const dividerHTML = `
        <div class="chapter-reel__divider" aria-hidden="true">
          <span class="chapter-reel__divider-line"></span>
          ${dividerIcons.map(icon => `<span>${icon}</span>`).join('')}
          <span class="chapter-reel__divider-line"></span>
        </div>
      `;
      
      return `
        <div class="chapter-reel__slide" data-index="${i}" role="tabpanel" aria-label="Memory ${i + 1} of ${photos.length}">
          <div class="chapter-reel__slide-inner">
            <div class="chapter-reel__decorations">
              ${decoHTML}
            </div>
            <div class="chapter-reel__slide-image" style="--rotation: ${rotation}">
              <img src="${p.image}" alt="${escapeHTML(p.imageAlt || '')}" loading="lazy" />
            </div>
            <div class="chapter-reel__slide-content">
              ${p.date ? `<span class="chapter-reel__slide-date">${escapeHTML(p.date)}</span>` : ''}
              ${p.title ? `<h3 class="chapter-reel__slide-title">${escapeHTML(p.title)}</h3>` : ''}
              ${dividerHTML}
              ${caption ? `<p class="chapter-reel__slide-caption">${escapeHTML(caption)}</p>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    // Build navigation dots
    nav.innerHTML = photos.map((_, i) => `
      <button class="chapter-reel__dot ${i === 0 ? 'is-active' : ''}" 
              data-index="${i}" 
              role="tab" 
              aria-label="Go to memory ${i + 1}"
              aria-selected="${i === 0 ? 'true' : 'false'}">
      </button>
    `).join('');
    
    const slides = wrapper.querySelectorAll('.chapter-reel__slide');
    const dots = nav.querySelectorAll('.chapter-reel__dot');
    let currentIndex = 0;
    let isScrolling = false;
    
    function updateActive(index) {
      dots.forEach((dot, i) => {
        const isActive = i === index;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      slides.forEach((slide, i) => {
        slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
      });
      currentIndex = index;
    }
    
    function goToSlide(index) {
      if (isScrolling || index === currentIndex) return;
      isScrolling = true;
      const slide = slides[index];
      if (slide) {
        slide.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        updateActive(index);
      }
      setTimeout(() => { isScrolling = false; }, 600);
    }
    
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        goToSlide(index);
      });
    });
    
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const next = (currentIndex + 1) % photos.length;
        goToSlide(next);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = (currentIndex - 1 + photos.length) % photos.length;
        goToSlide(prev);
      }
    });
    
    let scrollTimeout;
    wrapper.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = wrapper.scrollLeft;
        const slideWidth = wrapper.offsetWidth;
        const newIndex = Math.round(scrollLeft / slideWidth);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < photos.length) {
          updateActive(newIndex);
        }
      }, 100);
    }, { passive: true });
    
    updateActive(0);
    
    let autoAdvanceTimer;
    let isInViewport = false;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewport = entry.isIntersecting;
          if (isInViewport) startAutoAdvance();
          else stopAutoAdvance();
        });
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('before-we-met');
    if (section) observer.observe(section);
    
    function startAutoAdvance() {
      stopAutoAdvance();
      autoAdvanceTimer = setInterval(() => {
        if (!isInViewport) return;
        const next = (currentIndex + 1) % photos.length;
        goToSlide(next);
      }, 6000);
    }
    
    function stopAutoAdvance() {
      if (autoAdvanceTimer) {
        clearInterval(autoAdvanceTimer);
        autoAdvanceTimer = null;
      }
    }
    
    wrapper.addEventListener('pointerdown', stopAutoAdvance);
    wrapper.addEventListener('touchstart', stopAutoAdvance);
    wrapper.addEventListener('pointerup', () => setTimeout(startAutoAdvance, 5000));
    wrapper.addEventListener('touchend', () => setTimeout(startAutoAdvance, 5000));
    window.addEventListener('beforeunload', stopAutoAdvance);
  })();

  /* ---------- THE DAY WE MET ---------- */
  setImg("meetImage", C.dayWeMet.image, C.dayWeMet.imageAlt);
  setText("meetEyebrow", C.dayWeMet.eyebrow);
  setText("meetTitle", C.dayWeMet.title);
  setText("meetCaption", C.dayWeMet.caption);

  const meetMetaParts = [];
  if (C.dayWeMet.date) meetMetaParts.push(`<span>${escapeHTML(C.dayWeMet.date)}</span>`);
  if (C.dayWeMet.location) meetMetaParts.push(`<span>${escapeHTML(C.dayWeMet.location)}</span>`);
  $("meetMeta").innerHTML = meetMetaParts.join("");

  /* ---------- OUR FIRST CHAT ---------- */
  setText("conversationsEyebrow", C.conversations.eyebrow);
  setText("conversationsHeading", C.conversations.heading);
  setText("conversationsIntro", C.conversations.intro);
  setText("chatContactName", "cr0issum");
  setText("chatDate", C.conversations.chat.date);
  setText("chatContinueLabel", C.conversations.chat.continueLabel);

  /* ---------- FIRST MEMORIES ---------- */
  setText("memoriesEyebrow", C.firstMemories.eyebrow);
  setText("memoriesHeading", C.firstMemories.heading);
  setText("memoriesIntro", C.firstMemories.intro);

  $("memoriesGrid").innerHTML = C.firstMemories.photos.map((p, i) => {
    const isPolaroid = p.layout === "polaroid";
    const staggerClass = `card-reveal--stagger-${i % 6}`;
    return `
    <figure class="memory-card ${isPolaroid ? "memory-card--polaroid" : "memory-card--editorial"} card-reveal ${staggerClass}" data-idx="${i % 4}">
      <div class="memory-card__frame card-reveal__image">
        <img src="${p.image}" alt="${escapeHTML(p.imageAlt || "")}" loading="lazy" />
      </div>
      <figcaption class="memory-card__body">
        ${p.date ? `<span class="memory-card__date">${escapeHTML(p.date)}</span>` : ""}
        ${p.title ? `<div class="memory-card__title">${escapeHTML(p.title)}</div>` : ""}
        ${p.caption ? `<p class="memory-card__caption">${escapeHTML(p.caption)}</p>` : ""}
      </figcaption>
    </figure>
  `;
  }).join("");

  /* ---------- OUR JOURNEY (timeline) ---------- */
  setText("journeyEyebrow", C.journey.eyebrow);
  setText("journeyHeading", C.journey.heading);
  setText("journeyIntro", C.journey.intro);

  $("timeline").innerHTML = C.journey.milestones.map((m) => `
    <div class="timeline-item" data-delay="${Math.random() * 0.3}">
      <span class="timeline-item__dot"></span>
      <div class="timeline-item__frame">
        <img src="${m.image}" alt="${escapeHTML(m.imageAlt || "")}" loading="lazy" />
      </div>
      ${m.date ? `<span class="timeline-item__date">${escapeHTML(m.date)}</span>` : ""}
      ${m.title ? `<div class="timeline-item__title">${escapeHTML(m.title)}</div>` : ""}
      ${m.caption ? `<p class="timeline-item__caption">${escapeHTML(m.caption)}</p>` : ""}
    </div>
  `).join("");

  /* ---------- THE LITTLE THINGS ---------- */
  setText("littleEyebrow", C.littleThings.eyebrow);
  setText("littleHeading", C.littleThings.heading);
  setText("littleIntro", C.littleThings.intro);

  $("littleGrid").innerHTML = C.littleThings.items.map((item) => `
    <button type="button" class="icon-tile reveal" data-key="${escapeHTML(item.key)}" aria-label="Reveal memory: ${escapeHTML(item.label || item.key)}">
      <span class="icon-tile__sparkle" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
      <span class="icon-tile__glyph" aria-hidden="true">${item.icon}</span>
      <span class="icon-tile__label">${escapeHTML(item.label || "")}</span>
    </button>
  `).join("");

  /* ---------- FINAL MESSAGE ---------- */
  setImg("finaleImage", C.finalMessage.image, C.finalMessage.imageAlt);
  setText("finaleEyebrow", C.finalMessage.eyebrow);
  setText("finaleHeading", C.finalMessage.heading);
  
  const messageText = C.finalMessage.message;
  const lines = messageText.split(/(?<=[.!?])\s+/);
  const lastLine = lines.pop() || "";
  const firstLines = lines;
  
  let messageHTML = "";
  firstLines.forEach((line, idx) => {
    messageHTML += `<span class="finale-reveal__message-line">${escapeHTML(line)}</span>`;
  });
  messageHTML += `<span class="finale-reveal__message-line finale-reveal__message-line--emphasis">${escapeHTML(lastLine)}</span>`;
  
  $("finaleMessage").innerHTML = messageHTML;
  setText("finaleSignature", C.finalMessage.signature);

  /* ============================================================
     BIRTHDAY ENVELOPE OVERLAY — Scrolls to TOP of page (Hero section)
     ============================================================ */
  (function initBirthdayEnvelope() {
    const overlay = $("birthdayOverlay");
    const envelope = $("birthdayEnvelope");
    const cta = $("birthdayCta");
    
    if (!overlay || !envelope || !cta) return;
    
    // Open envelope on click (only if not already open)
    envelope.addEventListener("click", function(e) {
      if (e.target.closest(".birthday-envelope__cta")) return;
      if (this.classList.contains("is-open")) return;
      this.classList.add("is-open");
    });
    
    // Handle CTA click - close overlay and scroll to the TOP of the page
    cta.addEventListener("click", function(e) {
      e.stopPropagation();
      overlay.classList.add("is-hidden");
      // Scroll to the very top of the page (Hero section with "My Love, Sumer")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 600);
    });
  })();

  /* ============================================================
     CHAPTER MUSIC SYSTEM
     ============================================================ */
  const MUSIC_CHAPTERS = [
    { slot: "musicSlot-before",        music: C.beforeWeMet.music },
    { slot: "musicSlot-conversations", music: C.conversations.music },
    { slot: "musicSlot-meet",          music: C.dayWeMet.music },
    { slot: "musicSlot-memories",      music: C.firstMemories.music },
    { slot: "musicSlot-little",        music: C.littleThings.music },
    { slot: "musicSlot-journey",       music: C.journey.music },
    { slot: "musicSlot-wishes", music: C.finalMessage.music || null }
  ];

  let currentAudio = null;
  let currentBtn = null;

  MUSIC_CHAPTERS.forEach(({ slot, music }) => {
    const slotEl = $(slot);
    if (!slotEl || !music || !music.src) return;

    const playLabel = music.playLabel || "Play the soundtrack";
    const pauseLabel = music.pauseLabel || "Pause the soundtrack";

    const audio = document.createElement("audio");
    audio.preload = "none";
    audio.src = music.src;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "music-btn";
    btn.setAttribute("aria-label", playLabel);
    btn.innerHTML = `
      <span class="music-btn__icon music-btn__icon-play" aria-hidden="true">
        <svg viewBox="0 0 12 12" fill="none"><path d="M2.4 1.3v9.4l8-4.7-8-4.7z" fill="currentColor"/></svg>
      </span>
      <span class="music-btn__icon music-btn__icon-pause" aria-hidden="true">
        <svg viewBox="0 0 12 12" fill="none"><rect x="2" y="1.3" width="3" height="9.4" fill="currentColor"/><rect x="7" y="1.3" width="3" height="9.4" fill="currentColor"/></svg>
      </span>
      <span class="music-btn__label">${escapeHTML(playLabel)}</span>
      <span class="music-btn__bars" aria-hidden="true"><span></span><span></span><span></span></span>
    `;

    const labelEl = btn.querySelector(".music-btn__label");

    function resetButton() {
      btn.classList.remove("is-playing");
      labelEl.textContent = playLabel;
      btn.setAttribute("aria-label", playLabel);
    }
    btn.resetState = resetButton;

    btn.addEventListener("click", () => {
      const isThisPlaying = currentAudio === audio && !audio.paused;

      if (isThisPlaying) {
        audio.pause();
        resetButton();
        currentAudio = null;
        currentBtn = null;
        return;
      }

      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
      }
      if (currentBtn && currentBtn !== btn) {
        currentBtn.resetState();
      }

      try {
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.then === "function") {
          playPromise
            .then(() => {
              btn.classList.add("is-playing");
              labelEl.textContent = pauseLabel;
              btn.setAttribute("aria-label", pauseLabel);
              currentAudio = audio;
              currentBtn = btn;
            })
            .catch(() => {
              resetButton();
            });
        }
      } catch (err) {
        resetButton();
      }
    });

    audio.addEventListener("ended", () => {
      resetButton();
      if (currentAudio === audio) {
        currentAudio = null;
        currentBtn = null;
      }
    });

    audio.addEventListener(
      "error",
      () => {
        btn.disabled = true;
        btn.title = "Soundtrack unavailable";
      },
      { once: true }
    );

    slotEl.appendChild(audio);
    slotEl.appendChild(btn);
  });

  /* ============================================================
     CHAPTER REVEAL ANIMATIONS
     ============================================================ */
  (function initChapterReveals() {
    const chapters = document.querySelectorAll(".chapter-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    chapters.forEach((el) => io.observe(el));
  })();

  /* ============================================================
     CARD REVEAL ANIMATIONS
     ============================================================ */
  (function initCardReveals() {
    const cards = document.querySelectorAll(".card-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    cards.forEach((el) => io.observe(el));
  })();

  /* ============================================================
     TIMELINE ANIMATIONS
     ============================================================ */
  (function initTimeline() {
    const timeline = $("timeline");
    const items = document.querySelectorAll(".timeline-item");
    if (!timeline) return;
    
    const timelineIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeline.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    timelineIO.observe(timeline);
    
    const itemIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.dataset.delay) || 0;
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    items.forEach((el) => itemIO.observe(el));
  })();

  /* ============================================================
     SCROLL REVEAL ANIMATIONS (legacy .reveal elements)
     ============================================================ */
  const revealEls = document.querySelectorAll(".reveal:not(.card-reveal)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ============================================================
     SUNLIGHT RIBBON
     ============================================================ */
  const ribbon = $("ribbonFill");
  function updateRibbon() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    if (ribbon) ribbon.style.height = pct + "%";
  }
  window.addEventListener("scroll", updateRibbon, { passive: true });
  updateRibbon();

  /* ============================================================
     OUR FIRST CHAT
     ============================================================ */
  (function initChatSequence() {
    const thread = $("chatThread");
    const phone = $("chatPhone");
    const continueBtn = $("chatContinueBtn");
    const messages = (C.conversations.chat && C.conversations.chat.messages) || [];
    if (!thread || !phone || messages.length === 0) return;

    let hasPlayed = false;

    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function scrollThreadToBottom() {
      thread.scrollTop = thread.scrollHeight;
    }

    async function playSequence() {
      if (hasPlayed) return;
      hasPlayed = true;

      for (const msg of messages) {
        const isMe = msg.sender === "me";
        const row = document.createElement("div");
        row.className = `chat-row ${isMe ? "chat-row--me" : "chat-row--her"}`;

        const typingBubble = document.createElement("div");
        typingBubble.className = "chat-bubble chat-bubble--typing";
        typingBubble.innerHTML = "<span></span><span></span><span></span>";
        row.appendChild(typingBubble);
        thread.appendChild(row);
        scrollThreadToBottom();

        const typingTime = Math.min(1600, Math.max(750, msg.text.length * 28));
        await wait(typingTime);

        const bubble = document.createElement("div");
        bubble.className = "chat-bubble";
        const replyHTML = msg.replyTo
          ? `<span class="chat-bubble__reply">${escapeHTML(msg.replyTo)}</span>`
          : "";
        bubble.innerHTML = `${replyHTML}${escapeHTML(msg.text)}`;
        row.replaceChild(bubble, typingBubble);
        scrollThreadToBottom();

        await wait(450);
      }

      if (continueBtn) {
        continueBtn.classList.add("is-visible");
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playSequence();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(phone);

    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        const next = $("day-we-met");
        if (next) next.scrollIntoView({ behavior: "smooth" });
      });
    }
  })();

  /* ============================================================
     LIVE ELAPSED-TIME CLOCK
     ============================================================ */
  (function initLiveClock() {
    const cfg = C.dayWeMet.liveClock;
    const root = $("liveClock");
    if (!cfg || !root) return;

    setText("liveClockHeading", cfg.heading);
    setText("liveClockSubtitle", cfg.subtitle);
    setText("clockDaysLabel", cfg.units.days);
    setText("clockHoursLabel", cfg.units.hours);
    setText("clockMinutesLabel", cfg.units.minutes);
    setText("clockSecondsLabel", cfg.units.seconds);

    const startTime = new Date(cfg.startISO).getTime();
    const els = {
      days: $("clockDays"),
      hours: $("clockHours"),
      minutes: $("clockMinutes"),
      seconds: $("clockSeconds"),
    };
    const prev = { days: null, hours: null, minutes: null, seconds: null };

    function pad(n) {
      return String(n).padStart(2, "0");
    }

    function tick(el) {
      if (!el) return;
      el.classList.remove("tick");
      void el.offsetWidth;
      el.classList.add("tick");
    }

    function update() {
      const now = Date.now();
      let diff = Math.max(0, Math.floor((now - startTime) / 1000));

      const days = Math.floor(diff / 86400);
      const hours = Math.floor((diff % 86400) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      if (els.days && days !== prev.days) { els.days.textContent = String(days); tick(els.days); prev.days = days; }
      if (els.hours && hours !== prev.hours) { els.hours.textContent = pad(hours); tick(els.hours); prev.hours = hours; }
      if (els.minutes && minutes !== prev.minutes) { els.minutes.textContent = pad(minutes); tick(els.minutes); prev.minutes = minutes; }
      if (els.seconds && seconds !== prev.seconds) { els.seconds.textContent = pad(seconds); tick(els.seconds); prev.seconds = seconds; }
    }

    update();
    setInterval(update, 1000);
  })();

  /* ============================================================
     FINAL MESSAGE REVEAL
     ============================================================ */
  (function initFinaleReveal() {
    const finale = $("finale");
    if (!finale) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            finale.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(finale);
  })();

  /* ============================================================
     9 HIDDEN MEMORIES
     ============================================================ */
  (function initMemoryModal() {
    const grid = $("littleGrid");
    const modal = $("memoryModal");
    const backdrop = $("memoryModalBackdrop");
    const closeBtn = $("memoryModalClose");
    const modalImage = $("memoryModalImage");
    const modalCaption = $("memoryModalCaption");
    if (!grid || !modal) return;

    const itemsByKey = {};
    C.littleThings.items.forEach((item) => { itemsByKey[item.key] = item; });

    function openModal(item) {
      if (!item) return;
      modalImage.src = item.image;
      modalImage.alt = item.imageAlt || "";
      modalCaption.textContent = item.caption || "";
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }

    grid.addEventListener("click", (e) => {
      const tile = e.target.closest(".icon-tile");
      if (!tile) return;
      const key = tile.dataset.key;

      tile.classList.remove("is-activated", "is-sparkling");
      void tile.offsetWidth;
      tile.classList.add("is-activated", "is-sparkling", "is-revealed");

      setTimeout(() => {
        tile.classList.remove("is-sparkling");
      }, 750);

      setTimeout(() => {
        openModal(itemsByKey[key]);
      }, 320);
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  })();

 /* ============================================================
     CHAPTER 7 — HER WISHES
     ============================================================ */
  (function initWishes() {
    const wrapper = $("cupcakeWrapper");
    const text = $("cupcakeText");
    const hint = $("cupcakeHint");
    const envelopesGrid = $("envelopesGrid");
    const modal = $("wishModal");
    const modalBackdrop = $("wishModalBackdrop");
    const modalClose = $("wishModalClose");
    const modalImage = $("wishModalImage");
    const modalCaption = $("wishModalCaption");
    const envelopeCards = document.querySelectorAll(".envelope-card");
    const section = document.getElementById("her-wishes");

    if (!wrapper) return;

    const wishData = {
      psychologist: {
        image: "assets/images/wish-psychologist.jpg",
        caption: "One day, a clinic of her own. A place where her knowledge, compassion, and heart can help people find their way.",
      },
      family: {
        image: "assets/images/wish-family.jpg",
        caption: "One day, a home filled with the kind of love that keeps growing. The two of us, and the little family we build together.",
      },
      greece: {
        image: "assets/images/wish-greece.jpg",
        caption: "One day, somewhere under the Greek sun. White walls, blue seas, and a dream finally becoming a memory.",
      },
      birkin: {
        image: "assets/images/wish-birkin.jpg",
        caption: "Because some dreams come in beautiful boxes, too.",
      },
    };

    let hasWished = false;

    // Cupcake click handler — cupcake stays visible!
    wrapper.addEventListener("click", function(e) {
      if (this.classList.contains("is-popping") || this.classList.contains("is-fading")) return;
      if (hasWished) return;

      // Pop animation
      this.classList.add("is-popping");

      // After pop, shrink cupcake (stays visible!) and show envelopes
      setTimeout(() => {
        this.classList.remove("is-popping");
        this.classList.add("is-fading");
      }, 700);

      setTimeout(() => {
        envelopesGrid.classList.add("is-visible");
        envelopesGrid.setAttribute("aria-hidden", "false");
        hasWished = true;
        
        // Scroll slightly to show the envelopes
        if (section) {
          const rect = section.getBoundingClientRect();
          const offset = window.scrollY + rect.top - 80;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 1300);
    });

    // Envelope click handler
    envelopeCards.forEach((card) => {
      card.addEventListener("click", function() {
        const wishKey = this.dataset.wish;
        const wish = wishData[wishKey];
        if (!wish) return;

        // Open envelope animation
        this.classList.add("is-open");

        // Show modal after flap animation
        setTimeout(() => {
          modalImage.src = wish.image;
          modalImage.alt = wishKey;
          modalCaption.textContent = wish.caption;
          modal.classList.add("is-open");
          modal.setAttribute("aria-hidden", "false");
        }, 350);

        // Reset envelope after closing
        const onClose = () => {
          this.classList.remove("is-open");
          modal.removeEventListener("close", onClose);
        };
        modal.addEventListener("close", onClose);
      });
    });

    // Modal close handlers
    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      // Reset all envelopes
      envelopeCards.forEach((card) => {
        card.classList.remove("is-open");
      });
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      wrapper.style.animation = "none";
      document.querySelectorAll(".sparkle-dot").forEach((dot) => {
        dot.style.animation = "none";
        dot.style.opacity = "0.15";
      });
    }
  })();

  /* ============================================================
     CHAPTER 8 — THE MOVIE OF US
     ============================================================ */
  (function initMovieOfUs() {
    const data = C.movieOfUs;
    if (!data) return;

    setText("movieEyebrow", data.eyebrow);
    setText("movieHeading", data.heading);
    setText("movieIntro", data.intro);
    setText("movieLabel", data.label);
    setText("movieReplayLabel", data.replayLabel || "Watch again");

    const section = $("movie-of-us");
    const video = $("chapter8Video");
    const frame = $("movieFrame");
    const soundToggle = $("movieSoundToggle");
    const soundLabel = $("movieSoundLabel");
    const endMessage = $("movieEndMessage");
    const replayBtn = $("movieReplayBtn");

    if (!video || !frame || !section) return;

    if (data.video) video.src = data.video;

    // Muted at start — required for autoplay to be allowed by the browser.
    video.muted = true;
    video.setAttribute("muted", "");

    let hasUnmuted = false;
    let muteAutoplayFailed = false;

    function setToggleForMuted() {
      if (soundLabel) soundLabel.textContent = data.muteLabel || "Tap for sound";
      if (soundToggle) soundToggle.setAttribute("aria-label", data.muteAria || "Turn on sound");
      if (soundToggle) soundToggle.classList.remove("is-hidden");
    }

    function setToggleForPlayPrompt() {
      // Even muted autoplay was blocked (rare) — ask for a tap to start.
      if (soundLabel) soundLabel.textContent = data.playLabel || "Tap to play";
      if (soundToggle) soundToggle.setAttribute("aria-label", data.playAria || "Play our story video");
      if (soundToggle) soundToggle.classList.remove("is-hidden");
    }

    setToggleForMuted();

    function unmute() {
      hasUnmuted = true;
      video.muted = false;
      video.removeAttribute("muted");
      video.setAttribute("controls", "");
      if (soundToggle) soundToggle.classList.add("is-hidden");
      if (video.paused) {
        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
    }

    if (soundToggle) {
      soundToggle.addEventListener("click", () => {
        if (!hasUnmuted) {
          unmute();
        } else if (video.paused) {
          const p = video.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        }
      });
    }

    video.addEventListener("click", () => {
      if (!hasUnmuted) unmute();
    });

    video.addEventListener("loadedmetadata", () => {
      if (video.videoHeight > video.videoWidth) {
        frame.classList.add("is-vertical");
      } else {
        frame.classList.add("is-horizontal");
      }
    });

    video.addEventListener("play", () => {
      frame.classList.add("is-playing");
      if (replayBtn) replayBtn.classList.remove("is-visible");
      if (endMessage) endMessage.textContent = "";
    });

    video.addEventListener("ended", () => {
      if (endMessage) endMessage.textContent = data.endMessage || "";
      if (replayBtn) replayBtn.classList.add("is-visible");
    });

    if (replayBtn) {
      replayBtn.addEventListener("click", () => {
        video.currentTime = 0;
        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      });
    }

    // Scroll-triggered muted autoplay: start when the chapter is well
    // into view, pause when it scrolls out. Browsers block autoplay
    // with sound entirely, so this plays muted with a tap-for-sound
    // pill — the same pattern used by Instagram/TikTok feeds.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (video.ended) return;
            const p = video.play();
            if (p && typeof p.catch === "function") {
              p.catch(() => {
                muteAutoplayFailed = true;
                setToggleForPlayPrompt();
              });
            }
          } else if (!video.paused) {
            video.pause();
          }
        });
      },
      { threshold: prefersReducedMotion ? 0.01 : 0.5 }
    );
    io.observe(section);
  })();

})();
