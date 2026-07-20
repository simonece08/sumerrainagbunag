/* ============================================================
   MAIN.JS
   Renders SITE_CONTENT (from content.js) into the DOM, and
   handles scroll-triggered reveal animations + the sunlight
   ribbon progress indicator.

   You should not need to edit this file to change content —
   edit js/content.js instead.
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

  /* ---------- BEFORE WE MET ---------- */
  setText("beforeEyebrow", C.beforeWeMet.eyebrow);
  setText("beforeHeading", C.beforeWeMet.heading);
  setText("beforeIntro", C.beforeWeMet.intro);

  $("beforeGrid").innerHTML = C.beforeWeMet.photos.map((p) => `
    <figure class="before-card reveal">
      <div class="before-card__frame">
        <img src="${p.image}" alt="${escapeHTML(p.imageAlt || "")}" loading="lazy" />
      </div>
      <figcaption>
        ${p.date ? `<span class="before-card__date">${escapeHTML(p.date)}</span>` : ""}
        ${p.title ? `<div class="before-card__title">${escapeHTML(p.title)}</div>` : ""}
        ${p.caption ? `<p class="before-card__caption">${escapeHTML(p.caption)}</p>` : ""}
      </figcaption>
    </figure>
  `).join("");

  /* ---------- THE DAY WE MET ---------- */
  setImg("meetImage", C.dayWeMet.image, C.dayWeMet.imageAlt);
  setText("meetEyebrow", C.dayWeMet.eyebrow);
  setText("meetTitle", C.dayWeMet.title);
  setText("meetCaption", C.dayWeMet.caption);

  const meetMetaParts = [];
  if (C.dayWeMet.date) meetMetaParts.push(`<span>${escapeHTML(C.dayWeMet.date)}</span>`);
  if (C.dayWeMet.location) meetMetaParts.push(`<span>${escapeHTML(C.dayWeMet.location)}</span>`);
  $("meetMeta").innerHTML = meetMetaParts.join("");

  /* ---------- FIRST MEMORIES ---------- */
  setText("memoriesEyebrow", C.firstMemories.eyebrow);
  setText("memoriesHeading", C.firstMemories.heading);
  setText("memoriesIntro", C.firstMemories.intro);

  $("memoriesGrid").innerHTML = C.firstMemories.photos.map((p, i) => {
    const isPolaroid = p.layout === "polaroid";
    return `
    <figure class="memory-card ${isPolaroid ? "memory-card--polaroid" : "memory-card--editorial"} reveal" data-idx="${i % 4}">
      <div class="memory-card__frame">
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
    <div class="timeline-item reveal">
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
    <figure class="little-card reveal" tabindex="0">
      <img src="${item.image}" alt="${escapeHTML(item.imageAlt || "")}" loading="lazy" />
      <figcaption class="little-card__overlay">
        ${item.date ? `<span style="opacity:.75">${escapeHTML(item.date)} — </span>` : ""}${escapeHTML(item.caption || "")}
      </figcaption>
    </figure>
  `).join("");

  /* ---------- FINAL MESSAGE ---------- */
  setImg("finaleImage", C.finalMessage.image, C.finalMessage.imageAlt);
  setText("finaleEyebrow", C.finalMessage.eyebrow);
  setText("finaleHeading", C.finalMessage.heading);
  setText("finaleMessage", C.finalMessage.message);
  setText("finaleSignature", C.finalMessage.signature);

  /* ============================================================
     SCROLL REVEAL ANIMATIONS
     ============================================================ */
  const revealEls = document.querySelectorAll(".reveal");
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

  // stagger delays within grids so items don't all pop at once
  ["beforeGrid", "memoriesGrid", "littleGrid"].forEach((gridId) => {
    const grid = $(gridId);
    if (!grid) return;
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = `${(i % 3) * 0.1}s`;
    });
  });

  /* ============================================================
     SUNLIGHT RIBBON — scroll progress fill
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
})();
