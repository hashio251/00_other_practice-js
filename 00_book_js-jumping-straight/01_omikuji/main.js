const omikuji = ["大吉", "中吉", "吉", "小吉", "凶", "大凶", "もう一回"];

function omikujiPlay() {
  const randomIndex = Math.floor(Math.random() * omikuji.length);
const result = omikuji[randomIndex];
  if (result === omikuji[6]) {
  console.log("もう一回引けるよ！ボタンを押してね！");
    console.log("もう一回引く");
    omikujiPlay();
} else {
  console.log(result);
}
}

omikujiPlay();