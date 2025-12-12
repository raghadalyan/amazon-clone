document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.getElementById("mainImg");
  const thumbs = document.querySelectorAll(".thumbs img");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("mouseenter", () => {
      mainImg.src = thumb.src;   // show hovered image in section 2
    });

    // optional: click also changes it (nice)
    thumb.addEventListener("click", () => {
      mainImg.src = thumb.src;
    });
  });
});
