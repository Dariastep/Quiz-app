
const cardContainer = document.querySelector('[data-js="card-container"]');
export function createCard() {
    const cardItem = document.createElement("li");
    cardItem.classList.add("question-card");
    const h2 = document.createElement("h2");
    h2.classList.add("card-list__question");
    h2.textContent = "What is Flexbox and what problem does it solve?";
    const answerButton = document.createElement("button");
    answerButton.classList.add("card-list__answer-button");
    answerButton.textContent = "Show Answer";
    const tagCard = document.createElement("ul");
    tagCard.classList.add("card-list__tag-list");
    const tagCardItem = document.createElement("li");
    tagCardItem.classList.add("card-list__tag-item");
    tagCardItem.textContent = "#html";
    const bookmarkButton = document.createElement("button");
    bookmarkButton.classList.add("card-list__bookmark-button");
    bookmarkButton.dataset.js = "card-list__bookmark-button";
  
    cardContainer.append(cardItem);
    cardItem.append(h2);
    cardItem.append(answerButton);
    cardItem.append(tagCard);
    cardItem.append(tagCardItem);
    cardItem.append(bookmarkButton);
  
    // Create the SVG element
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.setAttribute("width", "3em");
    svgElement.setAttribute("height", "3em");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.classList.add("card-list__bookmark-svg");
  
    // Create the path element
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("d", "M20 4V22L12 18L4 22V4H20Z");
    pathElement.setAttribute("fill", "#f6f5f8");
  
    // Append the path element to the SVG element
    svgElement.appendChild(pathElement);
  
    // Append the SVG element to the card
    cardItem.append(svgElement);
  
    return cardItem;
  }
  