let omikuji = ["大吉", "中吉", "吉", "小吉", "凶", "大凶", "もう一回"];
let randomIndex = Math.floor(Math.random() * omikuji.length);
let result = omikuji[randomIndex];


if (result === omikuji[6]) {
  console.log("もう一回引けるよ！ボタンを押してね！")
} else {
  console.log(result);
}