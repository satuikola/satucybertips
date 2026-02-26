/* global POSTS */
(function () {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");

  const post = (window.POSTS || []).find(p => p.slug === slug);

  const titleEl = document.getElementById("title");
  const dateEl = document.getElementById("date");
  const catEl = document.getElementById("category");
  const tagsEl = document.getElementById("tags");
  const contentEl = document.getElementById("content");

  if (!post) {
    titleEl.textContent = "Kirjoitusta ei löytynyt";
    contentEl.innerHTML = `<p class="muted">Tarkista linkki ja yritä uudelleen.</p>`;
    return;
  }

  document.title = `${post.title} | SatuCyberTips`;

  titleEl.textContent = post.title;
  dateEl.textContent = post.date || "";
  catEl.textContent = post.category || "";

  tagsEl.innerHTML = (post.tags || []).map(t => `<span class="tag">${t}</span>`).join("");

  // content on tavallista tekstiä, rivinvaihdot muutetaan kappaleiksi
  const raw = (post.content || "").trim();
  if (!raw) {
    contentEl.innerHTML = `<p class="muted">Kirjoitusteksti lisätään tähän myöhemmin.</p>`;
    return;
  }

  const paragraphs = raw.split(/\n\s*\n/).map(p => `<p>${escapeHtml(p).replace(/\n/g, "<br>")}</p>`).join("");
  contentEl.innerHTML = paragraphs;

  function escapeHtml(str) {
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
