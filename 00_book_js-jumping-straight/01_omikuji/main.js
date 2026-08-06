// おみくじの中身
const omikuji = [
  "大吉",
  "中吉",
  "吉",
  "小吉",
  "凶",
  "大凶",
  "もう一回"
];

// DOM操作のための変数
const playBtn = document.querySelector("#play-btn");
const resultDisplay = document.querySelector(".result-display");
const oneMoreBtn = document.querySelector(".onemore-btn");

function omikujiPlay() {
  const randomIndex = Math.floor(Math.random() * omikuji.length);
  const result = omikuji[randomIndex];

  if (result === "もう一回") {
    resultDisplay.textContent =
      "もう一回引けるよ！下のボタンを押してね！";

    oneMoreBtn.classList.add("is-show");
  } else {
    resultDisplay.textContent = result;

    oneMoreBtn.classList.remove("is-show");
  }
}

playBtn.addEventListener("click", omikujiPlay);
oneMoreBtn.addEventListener("click", omikujiPlay);