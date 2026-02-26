/* global POSTS */
(function () {
  const params = new URLSearchParams(location.search);
  const view = params.get("view") || "cats"; // cats | all
  const presetCat = params.get("cat") || "";

  const listEl = document.getElementById("postList");
  const qEl = document.getElementById("q");
  const catEl = document.getElementById("cat");
  const filtersEl = document.querySelector(".filters");

  const posts = (window.POSTS || []).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  const CATEGORY_BLURBS = {
    "Identiteetti": "Sähköposti, salasanat, salasanamanageri, MFA ja tiliturva käytännössä.",
    "Huijaukset": "Pysähdy, tarkista ja varmista. Puhelut, viestit ja arjen syötit.",
    "Social engineering": "Kiire, auktoriteetti ja tunne. Miten huijari ohittaa rutiinin.",
    "Varmuuskopiot": "3-2-1, offline ja palautus. Synkronointi ei riitä.",
    "Paivitysrutiini": "Kevyt viikkorutiini. Puhelin, selain, kone, plus bonukset.",
    "Kotiverkko": "Reititin ja kodin laitteet. Unohdetut asetukset ja päivitykset.",
    "Arjen tietoturva": "Pienet tavat, iso vaikutus. Lukitus, lisäosat, raportointi.",
    "Arjen rajaukset": "Työ ja koti erikseen. Profiilit, selaimet ja selkeät rajat.",
    "Kooste": "Viikon tai kuukauden tärkeimmät opit tiivistettynä.",
    "Teaser": "Seuraavan teeman aloitus ja mitä luvassa."
  };

  // Täytä kategoriavalikko aina (hyödyllinen myös view=all tilassa)
  const cats = Array.from(new Set(posts.map(p => p.category).filter(Boolean))).sort((a, b) => a.localeCompare(b, "fi"));
  for (const c of cats) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    catEl.appendChild(opt);
  }

  if (view === "cats") {
    // piilota hakukenttä ja dropdown kategoriakorttinäkymässä
    if (filtersEl) filtersEl.style.display = "none";
    renderCategoryCards();
    return;
  }

  // view=all, näytä nykyinen postilista
  if (filtersEl) filtersEl.style.display = "";
  if (presetCat) catEl.value = presetCat;

  qEl.addEventListener("input", renderPosts);
  catEl.addEventListener("change", renderPosts);
  renderPosts();

  function renderCategoryCards() {
    const groups = new Map();
    for (const p of posts) {
      const key = p.category || "Muut";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(p);
    }

    const ordered = Array.from(groups.entries()).sort((a, b) => a[0].localeCompare(b[0], "fi"));

    listEl.innerHTML = ordered.map(([cat, items]) => {
      const blurb = CATEGORY_BLURBS[cat] || "Kooste tähän aiheeseen liittyvistä kirjoituksista.";
      const topTags = topTagsFrom(items, 4).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
      const count = items.length;

      return `
        <article class="card">
          <h3>${escapeHtml(cat)}</h3>
          <p class="muted">${escapeHtml(blurb)}</p>
          <div class="tagRow">${topTags}</div>
          <p class="small muted">${count} kirjoitusta</p>
          <a class="link" href="index.html?view=all&cat=${encodeURIComponent(cat)}">Avaa aiheen kirjoitukset</a>
        </article>
      `;
    }).join("");
  }

  function renderPosts() {
    const q = (qEl.value || "").trim().toLowerCase();
    const c = catEl.value || "";

    const filtered = posts.filter(p => {
      if (c && (p.category || "") !== c) return false;
      if (!q) return true;
      const hay = [
        p.title,
        p.category,
        (p.tags || []).join(" "),
        p.excerpt,
        p.content
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });

    listEl.innerHTML = filtered.map(p => cardHtml(p)).join("");
  }

  function cardHtml(p) {
    const tags = (p.tags || []).slice(0, 6).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const date = p.date ? `<span class="muted">${escapeHtml(p.date)}</span>` : "";
    const cat = p.category ? `<span class="muted">• ${escapeHtml(p.category)}</span>` : "";
    return `
      <article class="card">
        <div class="postMeta">${date} ${cat}</div>
        <h3>${escapeHtml(p.title || "")}</h3>
        <p>${escapeHtml(p.excerpt || "")}</p>
        <div class="tagRow">${tags}</div>
        <a class="link" href="post.html?slug=${encodeURIComponent(p.slug)}">Lue kirjoitus</a>
      </article>
    `;
  }

  function topTagsFrom(items, limit) {
    const freq = new Map();
    for (const p of items) {
      for (const t of (p.tags || [])) {
        freq.set(t, (freq.get(t) || 0) + 1);
      }
    }
    return Array.from(freq.entries()).sort((a, b) => b[1] - a[1]).slice(0, limit).map(([t]) => t);
  }

  function escapeHtml(str) {
    return String(str || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
