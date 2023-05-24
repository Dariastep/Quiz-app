const header = document.querySelector('[data-js="header"]');

export function createHeaderApp() {
  const titleApp = document.createElement("h1");
  titleApp.textContent = `Quiz App`;
  titleApp.classList.add("title");
  header.append(titleApp);
}
