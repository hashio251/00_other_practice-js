// おみくじの中身
const omikuji = ["大吉", "中吉", "吉", "小吉", "凶", "大凶", "もう一回"];

// DOM操作のための変数
const playBtn = document.querySelector('#play-btn');
const resultDisplay = document.querySelector('.result-display');
const oneMoreBtn = document.querySelector('.onemore-btn');



function omikujiPlay() {
  
  const randomIndex = Math.floor(Math.random() * omikuji.length);
  const result = omikuji[randomIndex];
  if (result === omikuji[6]) {
  resultDisplay.addEventListener("もう一回引けるよ！ボタンを押してね！");
  playBtn.addEventListener('click', "もう一回引く");
    omikujiPlay();
} else {
  resultDisplay.textContent = result;
}
}

omikujiPlay();