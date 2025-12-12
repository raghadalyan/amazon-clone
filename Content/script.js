document.addEventListener("DOMContentLoaded", async () => {

  // =========================
  // 0) Inject share.html into content page (NO iframe)
  // =========================
  const shareSlot = document.getElementById("shareSlot");
  if (shareSlot) {
    const res = await fetch("Content/share.html");
    const html = await res.text();
    shareSlot.innerHTML = html;
  }

  // =========================
  // 1) THUMBS -> MAIN IMAGE
  // =========================
  const mainImg = document.getElementById("mainImg");
  const thumbs = document.querySelectorAll(".thumbs img");

  if (mainImg && thumbs.length) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("mouseenter", () => (mainImg.src = thumb.src));
      thumb.addEventListener("click", () => (mainImg.src = thumb.src));
    });
  }



});
