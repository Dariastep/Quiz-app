import { createHeaderApp } from "./components/Header/header.js";
import { createCard } from "./components/Card/card.js";

const cards = document.querySelectorAll('[data-js="question-card"]');

createHeaderApp();
createCard();

cards.forEach((cardItem) => {
  const bookmarkSave = cardItem.querySelector(
    '[data-js="card-list__bookmark-button"]'
  );
  const bookmarkSvg = cardItem.querySelector(
    '[data-js="card-list__bookmark-svg--clicked"]'
  );
  const showAnswer = cardItem.querySelector('[data-js="show-answer"]');
  const answerButton = cardItem.querySelector('[data-js="answer-button"]');

  bookmarkSave.addEventListener("click", () => {
    bookmarkSvg.classList.toggle("card-list__bookmark-svg--clicked");
  });

  answerButton.addEventListener("click", function () {
    showAnswer.classList.toggle("hidden");
  });
});

function createFooter() {

}