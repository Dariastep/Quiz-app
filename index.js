const bookmarkSave = document.querySelector(
  '[data-js="card-list__bookmark-button"]'
);
const bookmarkEnabled = document.querySelector(
  '[data-js="card-list__bookmark-button--enable"]'
);
const cards = document.querySelectorAll('[data-js="question-card"]');
console.log(cards);

bookmarkSave.addEventListener("click", () => {
  function saveBookmarks() {
    bookmarkEnabled.classList.toggle("card-list__bookmark-svg--clicked");
  }
});

const cards = document.querySelectorAll('[data-js="question-card"]');
cards.forEach((card) => {
  const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark-button--enabled");
    /* cards.classList.toggle("question-card--marked"); */
  });
  const answerButton = card.querySelector(
    '[data-js="question-card__answer-button"'
  );
});
