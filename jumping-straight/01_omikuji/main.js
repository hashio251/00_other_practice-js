const omikuji = ["大吉", "中吉", "吉", "小吉", "凶", "大凶", "もう一回"];
const randomIndex = Math.floor(Math.random() * omikuji.length);
let result = omikuji[randomIndex];

function OmikujiPlay() {
  if (result === omikuji[6]) {
  console.log("もう一回引けるよ！ボタンを押してね！");
    console.log("もう一回引く");
} else {
  console.log(result);
}
}

OmikujiPlay()