"use strict";

const wrapper = document.querySelector(".wrapper");
const cardsMain = document.querySelector(".main__content");
const titleInput = document.querySelector("#setTitle");
const textInput = document.querySelector("#setText");
const linkInput = document.querySelector("#setImage");
const submitBtn = document.querySelector("#submitBtn");

let cardsTArray = [];

submitBtn.addEventListener("click", (e) => {
  createCard(titleInput.value, textInput.value, linkInput.value);
});

function createCard(title, value, link) {
  cardsMain.insertAdjacentHTML(
    "beforeend",
    `<section class="card">
  <h2 class="headtxt">
    <span class="trl">${title}</span>
  </h2>
  <span class="trl text">
    <p>${value}</p>
  </span>
  <div class="card__img"><img src="${link}" alt=""></div>
 </section>`
  );
  for (let i = 1; 500 > i; i++) {
    if (localStorage.getItem(`${i}card`)) {
      cardsTArray.push(i);
    } else {
      localStorage.setItem(
        `${i}card`,
        `<section class="card">
      <h2 class="headtxt">
        <span class="trl">${title}</span>
      </h2>
      <span class="trl text">
        <p>${value}</p>
      </span>
      <div class="card__img"><img src="${link}" alt=""></div>
     </section>`
      );
      return;
    }
  }
}

function showCards() {
  for (let i = 1; 500 > i; i++) {
    if (localStorage.getItem(`${i}card`)) {
      cardsMain.insertAdjacentHTML(
        "beforeend",
        `${localStorage.getItem(`${i}card`)}`
      );
    }
  }
}

showCards();
