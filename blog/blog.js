/* global POSTS */
(function () {
  const listEl = document.getElementById("postList");
  const qEl = document.getElementById("q");
  const catEl = document.getElementById("cat");

  const posts = (window.POSTS || [])
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  // Populate categories
  const cats = Array.from(new Set(posts.map(p => p.category).filter(Boolean))).sort();
  for (const c of cats) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    catEl.appendChild(opt);
  }

  function matches(post, q, cat) {
    const qn = (q || "").trim().toLowerCase();
    const okCat = !cat || post.category === cat;

    if (!qn) return okCat;

    const hay = [
      post.title,
      post.category,
      (post.tags || []).join(" "),
      post.excerpt,
      post.content
    ].join(" ").toLowerCase();

    return okCat && hay.includes(qn);
  }

  function render() {
    const q = qEl.value;
    const cat = catEl.value;

    const filtered = posts.filter(p => matches(p, q, cat));

    if (!filtered.length) {
      listEl.innerHTML = `<div class="card"><p class="muted">Ei osumia. Kokeile eri hakusanaa tai vaihda kategoriaa.</p></div>`;
      return;
    }

    listEl.innerHTML = filtered.map(p => {
      const tags = (p.tags || []).slice(0, 4).map(t => `<span class="tag">${t}</span>`).join("");
      const url = `post.html?slug=${encodeURIComponent(p.slug)}`;
      return `
        <article class="card postCard">
          <div class="postCard__top">
            <div class="postCard__meta">
              <span class="muted">${p.date}</span>
              <span class="dot">•</span>
              <span class="muted">${p.category || ""}</span>
            </div>
            <h3 class="postCard__title">${p.title}</h3>
            <p class="muted">${p.excerpt || ""}</p>
          </div>
          <div class="tagRow">${tags}</div>
          <a class="link" href="${url}">Lue kirjoitus</a>
        </article>
      `;
    }).join("");
  }

  qEl.addEventListener("input", render);
  catEl.addEventListener("change", render);

  render();
})();
