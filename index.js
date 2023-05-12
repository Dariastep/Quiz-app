const cards = document.querySelectorAll('[data-js="card-list__item"]');

cards.forEach((card) => {
  const bookmarkSave = card.querySelector(
    '[data-js="card-list__bookmark-button"]'
  );
  const bookmarkSvg = card.querySelector(
    '[data-js="card-list__bookmark-svg--clicked"]'
  );
  bookmarkSave.addEventListener("click", () => {
    bookmarkSvg.classList.toggle("card-list__bookmark-svg--clicked");
  });

  const answerButton = card.querySelector(
    '[data-js="card-list__answer-button"]'
  );
  const showAnswer = document.querySelector('[data-js="card-list__answer"]');
  answerButton.addEventListener("click", () => {
    showAnswer.hidden = false;
  });
});
