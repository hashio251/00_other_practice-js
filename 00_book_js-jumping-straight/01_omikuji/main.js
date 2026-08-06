// おみくじの中身
const omikuji = ["大吉", "中吉", "吉", "小吉", "凶", "大凶", "もう一回"];

// DOM操作のための変数
const playBtn = document.querySelector('#play-btn');
const resultDisplay = document.querySelector('.result-display');
const oneMoreBtn = document.querySelector('.onemore-btn');
const oneMoreResult = document.querySelector('.onemore-result-display');



function omikujiPlay() {
  const randomIndex = Math.floor(Math.random() * omikuji.length);
  const result = omikuji[randomIndex];
  if (result === omikuji[6]) {
    resultDisplay.textContent = "もう一回引けるよ！下のボタンを押してね！";
    oneMoreBtn.classList.add("is-show");
  } else {
    resultDisplay.textContent = result;
  }
  oneMoreBtn.addEventListener("click", omikujiPlay);
}

playBtn.addEventListener("click", omikujiPlay);
