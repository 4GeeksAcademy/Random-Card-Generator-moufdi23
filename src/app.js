import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  console.log("Hello Rigo from the console!");

  const suits = ["♦", "♥", "♠", "♣"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  function randIndex(len) {
    return Math.floor(Math.random() * len);
  }

  const parentRow = document.querySelector(".row.justify-content-center.mt-5");
  const cardEl = document.querySelector(".card.text-center");
  const topLeft = cardEl?.querySelector(".card-body .row.mt-1 .col-2");
  const center = cardEl?.querySelector(".card-body .row.my-auto .col-2");
  const bottomRight = cardEl?.querySelector(
    ".card-body .row:last-child .col-2",
  );

  if (!parentRow || !cardEl || !topLeft || !center || !bottomRight) {
    console.error("Card setup failed: missing DOM nodes");
    return;
  }

  const btnWrapper = document.createElement("div");
  btnWrapper.className = "w-100 d-flex justify-content-center mt-3";
  const newCardBtn = document.createElement("button");
  newCardBtn.type = "button";
  newCardBtn.id = "new-card-btn";
  newCardBtn.className = "btn btn-primary";
  newCardBtn.textContent = "New Card";
  btnWrapper.appendChild(newCardBtn);
  parentRow.appendChild(btnWrapper);

  function generateCard() {
    const si = randIndex(suits.length);
    const vi = randIndex(values.length);
    const suit = suits[si];
    const value = values[vi];
    const isRed = suit === "♥" || suit === "♦";

    topLeft.textContent = suit;
    center.textContent = value;
    bottomRight.textContent = suit;

    const color = isRed ? "#d32f2f" : "#111";
    topLeft.style.color = color;
    center.style.color = color;
    bottomRight.style.color = color;

    cardEl.classList.remove("heart", "diamond", "spade", "club");
    if (isRed) {
      cardEl.classList.add(suit === "♥" ? "heart" : "diamond");
    } else {
      cardEl.classList.add(suit === "♠" ? "spade" : "club");
    }
  }

  generateCard();
  newCardBtn.addEventListener("click", function (e) {
    e.preventDefault();
    generateCard();
  });
};
