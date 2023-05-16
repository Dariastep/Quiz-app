const cards = document.querySelectorAll('[data-js="question-card"]');

cards.forEach((card) => {
  const bookmarkSave = card.querySelector(
    '[data-js="card-list__bookmark-button"]'
  );
  const bookmarkSvg = card.querySelector(
    '[data-js="card-list__bookmark-svg--clicked"]'
  );
  const showAnswer = card.querySelector('[data-js="show-answer"]');
  const answerButton = card.querySelector('[data-js="answer-button"]');

  bookmarkSave.addEventListener("click", () => {
    bookmarkSvg.classList.toggle("card-list__bookmark-svg--clicked");
  });

  answerButton.addEventListener("click", function () {
    showAnswer.classList.toggle("hidden");
  });
});
