document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("shareWrap");
  const btn = document.getElementById("shareBtn");
  const closeBtn = document.getElementById("shareClose");
  const copyBtn = document.getElementById("copyLinkBtn");

  if (!wrap || !btn || !closeBtn || !copyBtn) return;

  function openMenu() {
    wrap.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    wrap.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrap.classList.contains("open") ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu();
  });

  document.addEventListener("click", () => closeMenu());

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  copyBtn.addEventListener("click", async (e) => {
    e.stopPropagation();

    // copy the parent page URL (content page)
    const urlToCopy =
      window.parent && window.parent !== window
        ? window.parent.location.href
        : window.location.href;

    try {
      await navigator.clipboard.writeText(urlToCopy);
      copyBtn.innerHTML = '<span class="share-ico">✅</span> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = '<span class="share-ico">🔗</span> Copy Link';
      }, 1200);
    } catch {
      alert("Copy failed (file:// may block clipboard).");
    }
  });
});
