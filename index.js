const bookmarkSave = document.querySelector(
  '[data-js="card-list__bookmark-button"]'
);
const bookmarkEnabled = document.querySelector(
  '[data-js="card-list__bookmark-button--enable"]'
);

bookmarkSave.addEventListener("click", () => {
  console.log("click");
  bookmarkEnabled.classList.toggle("card-list__bookmark-svg--clicked");
});
