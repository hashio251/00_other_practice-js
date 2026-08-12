// 課題1：年齢判定
// 年齢を変数に入れる
// 18歳以上なら「成人」、未満なら「未成年」と表示
const age = 20;
if (age < 0 || age > 120) {
  console.log("値は、0~120 の整数を入力してください。");
} else if (age >= 18) {
  console.log("成人");
} else if (age < 18) {
  console.log("未成年");
} else {
  console.log("値は、0~120 の整数を入力してください。");
}



// 課題2：偶数・奇数判定
// 数値を変数に入れる
// 偶数なら「偶数」、奇数なら「奇数」と表示
// ヒント： % 演算子を使う
const num = 251;
if (num % 2 === 0) {
  console.log("偶数");
} else if (num % 2 === 1) {
  console.log("奇数");
} else {
  console.log("値は、整数を入力してください。");
}



// 課題3：最大値を見つける
// 3つの数値を変数に入れる
// その中で最も大きい数を表示
const nums = [111, 9, 17];
if (nums[0] < nums[2] && nums[1] < nums[2]) {
  console.log(nums[2]);
} else if (nums[1] < nums[0] && nums[2] < nums[0]) {
  console.log(nums[0]);
} else if (nums[0] < nums[1] && nums[2] < nums[1]) {
  console.log(nums[1]);
} else {
  console.log("何かがおかしいです。");
}