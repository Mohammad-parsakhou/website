/* Renders the content from content.js into the page, switches languages,
   and runs the animations. You normally don't need to edit this file. */
(function () {
  "use strict";
  if (!window.SITE) return;

  // ---- helpers -------------------------------------------------------------
  function isPlaceholder(v) {
    return typeof v === "string" && /^\[.*\]$/.test(v.trim());
  }
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Text that is a placeholder gets a visible "fill me in" highlight.
  function txt(v) {
    if (isPlaceholder(v)) {
      return '<span class="ph" title="Placeholder: edit in js/content.js">' + esc(v.trim().slice(1, -1)) + "</span>";
    }
    return esc(v);
  }
  function $(id) {
    return document.getElementById(id);
  }
  function setHTML(id, html) {
    var el = $(id);
    if (el) el.innerHTML = html;
  }
  function isUrl(v) {
    return typeof v === "string" && /^https?:\/\//.test(v);
  }
  function list(items) {
    return (items || []).map(function (i) { return "<li>" + txt(i) + "</li>"; }).join("");
  }

  var ICONS = {
    roadmap: '<path d="M4 6h10M4 12h16M4 18h7"/><circle cx="17" cy="6" r="2"/><circle cx="14" cy="18" r="2"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.8-3.2 3.2-5 6-5s5.2 1.8 6 5"/><path d="M16 5.2a3 3 0 0 1 0 5.6M18 14.4c1.6.7 2.6 2.3 3 4.6"/>',
    loop: '<path d="M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6"/><path d="M18 3v4h-4M6 21v-4h4"/>',
    gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="M12 18l4-6"/><path d="M4 18h16"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
    team: '<circle cx="12" cy="7" r="3"/><circle cx="5" cy="14" r="2.4"/><circle cx="19" cy="14" r="2.4"/><path d="M8 20c.6-2.4 2-3.6 4-3.6s3.4 1.2 4 3.6M12 10v6.4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V17M8 7.2v.1M12 17v-3.6c0-1.7 1-2.9 2.4-2.9S16.6 11.5 16.6 13v4M12 10.5V17"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    leaf: '<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19 13 11"/>',
    mountain: '<path d="m3 19 6.5-11 4 6.5 2.5-3.5L21 19z"/><path d="m8 10.5 1.5 1.5 1.5-1.5"/>',
    plane: '<path d="M2 16.5 22 9l-3.5-1.5L13 10 7 5 5 6l3.5 5.5L5 13l-2-1-1 1 3 3z"/><path d="M3 21h18"/>',
    paddle: '<circle cx="10" cy="10" r="6.5"/><path d="m14.5 14.5 5 5"/><circle cx="19" cy="5" r="1.6"/>',
    camera: '<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    pin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  };
  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>";
  }

  // A photo, or a designed placeholder tile when no file is set yet.
  function photo(src, alt, label, tone) {
    if (src) return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async" />';
    return (
      '<div class="ph-photo' + (tone ? " tone-" + esc(tone) : "") + '" role="img" aria-label="' + esc(label) + '">' +
      icon("camera") + "<span>" + esc(label) + "</span></div>"
    );
  }

  // ---- languages -----------------------------------------------------------
  // English lives in window.SITE; French text in window.SITE_FR is laid over it,
  // so anything missing from the French version falls back to English.
  var EN = window.SITE;
  function merge(base, over) {
    if (over === undefined) return base;
    if (Array.isArray(base) && Array.isArray(over)) {
      return over.map(function (item, i) { return merge(base[i], item); });
    }
    if (base && over && typeof base === "object" && typeof over === "object" && !Array.isArray(over)) {
      var out = {};
      Object.keys(base).forEach(function (k) { out[k] = base[k]; });
      Object.keys(over).forEach(function (k) { out[k] = merge(base[k], over[k]); });
      return out;
    }
    return over;
  }
  var LANGS = { en: EN, fr: window.SITE_FR ? merge(EN, window.SITE_FR) : null };
  var S = EN;
  var lang = "en";
  var roleIndex = 0;

  function readSavedLang() {
    try { return localStorage.getItem("site-lang"); } catch (e) { return null; }
  }
  function saveLang(l) {
    try { localStorage.setItem("site-lang", l); } catch (e) { /* storage blocked */ }
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canReveal = !reduceMotion && "IntersectionObserver" in window;
  if (canReveal) document.documentElement.classList.add("js-reveal");

  // ---- render --------------------------------------------------------------
  function render() {
    var U = S.ui || {};
    document.documentElement.lang = lang;
    if (U.pageTitle) document.title = U.pageTitle;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = U[el.getAttribute("data-i18n")];
      if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-name]").forEach(function (el) { el.textContent = S.name; });

    var langBtn = $("lang-toggle");
    if (langBtn) {
      langBtn.hidden = !LANGS.fr;
      langBtn.textContent = U.switch_label || "";
      langBtn.setAttribute("aria-label", U.switch_aria || "");
      langBtn.setAttribute("lang", lang === "en" ? "fr" : "en");
    }

    // hero
    setHTML("hero-roles", S.roles.map(function (r, i) {
      return '<li class="' + (i === roleIndex ? "is-active" : "") + '">' + txt(r) + "</li>";
    }).join(""));
    setHTML("hero-headline", txt(S.headline));
    setHTML("hero-intro", txt(S.intro));
    setHTML(
      "hero-meta",
      "<li>" + icon("pin") + '<span class="meta-k">' + esc(U.based_in) + "</span> " + txt(S.location) + "</li>" +
        '<li><span class="dot-live" aria-hidden="true"></span><span class="meta-k">' + esc(U.status) + "</span> " + txt(S.availability) + "</li>"
    );
    if (S.highlights) {
      setHTML(
        "hero-stats",
        S.highlights.map(function (h) {
          var m = String(h.value).match(/^(\d+)(.*)$/);
          var attrs = m ? ' data-count="' + m[1] + '" data-suffix="' + esc(m[2]) + '"' : "";
          return '<li><span class="stat-v"' + attrs + ">" + txt(h.value) + '</span><span class="stat-l">' + txt(h.label) + "</span></li>";
        }).join("")
      );
    }
    setHTML(
      "portrait",
      S.photo
        ? '<img src="' + esc(S.photo) + '" alt="' + esc(S.photoAlt) + '" width="320" height="320" />'
        : '<div class="initials" role="img" aria-label="' + esc(S.photoAlt) + '">' + esc(S.initials) + "</div>"
    );
    setHTML("contact-avatar", S.photo ? '<img src="' + esc(S.photo) + '" alt="" />' : "<span>" + esc(S.initials) + "</span>");
    var resumeBtn = $("resume-btn");
    if (resumeBtn && S.resume) {
      resumeBtn.href = S.resume;
      resumeBtn.hidden = false;
    }

    // moving band: every skill tag, twice, so the loop is seamless
    var tags = [];
    S.skills.forEach(function (s) { tags = tags.concat(s.tags); });
    var band = tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    setHTML("marquee-track", '<div class="marquee-group">' + band + '</div><div class="marquee-group">' + band + "</div>");

    // about
    var A = S.about;
    setHTML("about-summary", txt(A.summary));
    setHTML("about-photo", photo(S.aboutPhoto, S.aboutPhotoAlt, U.photo_soon, "work"));
    setHTML("about-background", txt(A.background));
    setHTML("about-journey", list(A.journey));
    setHTML("about-interests", list(A.interests));
    setHTML("about-motivation", txt(A.motivation));
    setHTML("about-focus", txt(A.currentFocus));
    setHTML("about-certs", list(A.certifications));

    // story
    var ST = S.story;
    if (ST) {
      setHTML("story-title", txt(ST.title));
      setHTML("story-intro", txt(ST.intro));
      setHTML(
        "timeline",
        ST.chapters.map(function (c, i) {
          return (
            '<li class="chapter reveal ' + (i % 2 ? "is-right" : "is-left") + '">' +
            '<span class="chapter-dot" aria-hidden="true"></span>' +
            '<article class="chapter-card">' +
            '<p class="chapter-when">' + txt(c.when) + "</p>" +
            "<h3>" + txt(c.title) + "</h3>" +
            "<p>" + txt(c.text) + "</p>" +
            (c.learned && c.learned.length
              ? '<p class="label chapter-label">' + esc(U.learned) + '</p><ul class="tags">' + list(c.learned) + "</ul>"
              : "") +
            (c.links && c.links.length
              ? '<ul class="chapter-links">' + c.links.map(function (l) { return "<li>" + icon("arrow") + "<span>" + txt(l) + "</span></li>"; }).join("") + "</ul>"
              : "") +
            "</article></li>"
          );
        }).join("")
      );
    }

    // skills
    setHTML(
      "skills-grid",
      S.skills.map(function (s, i) {
        return (
          '<article class="skill reveal" style="--d:' + (i % 3) + '">' +
          '<div class="skill-icon">' + icon(s.icon) + "</div>" +
          "<h3>" + txt(s.title) + "</h3>" +
          '<p class="skill-desc">' + txt(s.description) + "</p>" +
          '<p class="skill-value"><span class="label">' + esc(U.why) + "</span>" + txt(s.value) + "</p>" +
          '<ul class="tags">' + list(s.tags) + "</ul></article>"
        );
      }).join("")
    );

    // projects
    setHTML(
      "projects-grid",
      S.projects.map(function (p, i) {
        var host = isUrl(p.url) ? p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "";
        var action = "";
        if (isUrl(p.url)) {
          action =
            '<a class="btn btn-ghost" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(U.view_project) +
            '<span class="sr-only"> ' + esc(p.title) + " " + esc(U.new_tab) + "</span>" + icon("arrow") + "</a>";
        }
        return (
          '<article class="project reveal" style="--d:' + (i % 2) + '">' +
          '<div class="project-top"><h3>' + txt(p.title) + "</h3>" +
          (host ? '<span class="project-host">' + esc(host) + "</span>" : "") +
          "</div>" +
          '<p class="project-role">' + txt(p.role) +
          (p.years ? ' <span class="project-years">· ' + txt(p.years) + "</span>" : "") + "</p>" +
          '<p class="project-desc">' + txt(p.description) + "</p>" +
          '<ul class="tags">' + list(p.tags) + "</ul>" +
          action +
          "</article>"
        );
      }).join("")
    );

    // life
    var L = S.life;
    if (L) {
      setHTML("life-title", txt(L.title));
      setHTML("life-text", txt(L.text));
      setHTML("life-hobbies", L.hobbies.map(function (h) {
        return "<li>" + icon(h.icon) + "<span>" + txt(h.label) + "</span></li>";
      }).join(""));
      // The third photo only shows when a file is set.
      var lp = document.getElementById("life-photo");
      if (lp) lp.hidden = !S.lifePhoto;
      if (S.lifePhoto) setHTML("life-photo", photo(S.lifePhoto, S.lifePhotoAlt, U.photo_soon, "forest"));
      var gal = document.getElementById("gallery");
      if (gal) gal.className = "gallery gallery-n" + Math.min(L.gallery.length, 3);
      setHTML("gallery", L.gallery.map(function (g, i) {
        var pos = g.pos ? ' style="object-position:' + esc(g.pos) + '"' : "";
        return (
          '<figure class="tile reveal" style="--d:' + (i % 3) + '">' +
          photo(g.src, g.caption, U.photo_soon, g.tone).replace("<img ", "<img" + pos + " ") +
          "<figcaption>" + txt(g.caption) + "</figcaption></figure>"
        );
      }).join(""));
    }

    // contact
    var C = S.contact;
    setHTML("contact-heading", txt(C.heading));
    setHTML("contact-invite", txt(C.invitation));
    var emailReal = !isPlaceholder(C.email) && /@/.test(C.email);
    setHTML(
      "contact-email",
      (emailReal
        ? '<a class="email-link" href="mailto:' + esc(C.email) + '">' + icon("mail") + "<span>" + esc(C.email) + "</span></a>"
        : '<span class="email-link">' + icon("mail") + txt(C.email) + "</span>") +
        '<button type="button" class="copy-btn" id="copy-email">' + icon("copy") +
        '<span class="copy-label">' + esc(U.copy) + "</span></button>"
    );
    var socials = [];
    if (isUrl(C.linkedin)) socials.push('<li><a href="' + esc(C.linkedin) + '" target="_blank" rel="noopener">' + icon("linkedin") + "LinkedIn</a></li>");
    if (isUrl(C.github)) socials.push('<li><a href="' + esc(C.github) + '" target="_blank" rel="noopener">' + icon("github") + "GitHub</a></li>");
    setHTML("contact-socials", socials.join(""));
    var mailCta = $("contact-cta");
    if (mailCta && emailReal) mailCta.href = "mailto:" + C.email;
    var year = $("year");
    if (year) year.textContent = new Date().getFullYear();

    observeReveals();
  }

  // ---- scroll reveal -------------------------------------------------------
  var revealer = canReveal
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            revealer.unobserve(en.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
    : null;
  var firstRender = true;
  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      // After a language switch, show re-created content straight away.
      if (!revealer || !firstRender) el.classList.add("is-visible");
      else revealer.observe(el);
    });
  }

  // ---- role highlight: walks through the career path -----------------------
  function tickRoles() {
    var items = document.querySelectorAll("#hero-roles li");
    if (!items.length) return;
    roleIndex = (roleIndex + 1) % items.length;
    items.forEach(function (li, i) { li.classList.toggle("is-active", i === roleIndex); });
  }
  if (!reduceMotion) setInterval(tickRoles, 2200);

  // ---- number count-up -----------------------------------------------------
  function countUp() {
    if (reduceMotion || !window.requestAnimationFrame) return;
    document.querySelectorAll(".stat-v[data-count]").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / 1400, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  // ---- navigation ----------------------------------------------------------
  var header = document.querySelector(".site-header");
  var toggle = $("nav-toggle");
  var menu = $("nav-menu");
  function closeMenu() {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      header.classList.toggle("menu-open", !open);
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Smooth scroll that also works inside sandboxed previews.
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    var target = id ? document.getElementById(id) : null;
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    if (history.replaceState) {
      try { history.replaceState(null, "", "#" + id); } catch (err) { /* sandboxed */ }
    }
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });

  // Header state, reading progress bar, and the story line that fills as you scroll.
  var bar = $("scroll-progress");
  var ticking = false;
  function updateScroll() {
    ticking = false;
    var y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 8);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";

    var wrap = document.querySelector(".timeline-wrap");
    var fill = $("timeline-fill");
    if (wrap && fill) {
      var r = wrap.getBoundingClientRect();
      var mid = window.innerHeight * 0.6;
      var p = Math.max(0, Math.min(1, (mid - r.top) / r.height));
      fill.style.transform = "scaleY(" + p + ")";
      document.querySelectorAll(".chapter").forEach(function (c) {
        var dot = c.querySelector(".chapter-dot");
        if (dot) c.classList.toggle("is-passed", dot.getBoundingClientRect().top < mid);
      });
    }
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  window.addEventListener("resize", updateScroll);

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (l) {
            var on = l.getAttribute("href") === "#" + en.target.id;
            l.classList.toggle("active", on);
            if (on) l.setAttribute("aria-current", "true");
            else l.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }

  // ---- language switch -----------------------------------------------------
  function setLang(l) {
    if (!LANGS[l]) l = "en";
    lang = l;
    S = LANGS[l];
    render();
    firstRender = false;
    updateScroll();
  }
  var langBtn = $("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var next = lang === "en" ? "fr" : "en";
      saveLang(next);
      setLang(next);
    });
  }

  // Copy email (the button is re-created on each render, so listen on the document).
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("#copy-email");
    if (!btn) return;
    var U = S.ui || {};
    var label = btn.querySelector(".copy-label");
    var value = S.contact.email.replace(/^\[|\]$/g, "");
    function done(msg) {
      label.textContent = msg;
      setTimeout(function () { label.textContent = U.copy; }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(
        function () { done(U.copied); },
        function () { selectEmail(); done(U.press_copy); }
      );
    } else {
      selectEmail();
      done(U.press_copy);
    }
  });
  function selectEmail() {
    var el = document.querySelector("#contact-email .email-link");
    if (!el || !window.getSelection) return;
    var r = document.createRange();
    r.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
  }

  // ---- start ---------------------------------------------------------------
  var saved = readSavedLang();
  var browserFr = (navigator.language || "").toLowerCase().indexOf("fr") === 0;
  setLang(saved || (browserFr ? "fr" : "en"));
  countUp();
})();
