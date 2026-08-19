// 課題1：食べ物リスト
// 好きな食べ物の配列を作成
// forEachで全ての食べ物を表示
// pushで新しい食べ物を追加
// popで最後の食べ物を削除
const likeFoods = ["ramen", "humberg", "pasta", "soup", "chocolate"];
likeFoods.forEach(likeFood => {
  console.log(likeFood);
});
likeFoods.push("apple", "orange");
console.log(likeFoods);
likeFoods.pop();
console.log(likeFoods);
likeFoods.unshift("mango", "peach");
console.log(likeFoods);
likeFoods.shift();
console.log(likeFoods);
likeFoods.splice(1, 0, "rice");
console.log(likeFoods);



// 課題2：配列の検索
// 食べ物の配列から特定の食べ物を検索
// includesを使って含まれているか確認
// indexOfでインデックスを取得
console.log(likeFoods.indexOf("mango"));
console.log(likeFoods.indexOf("peach"));
console.log(likeFoods.includes("a"));
console.log(likeFoods.includes("ramen"));

const likeMango = likeFoods.includes("mango");
if (likeMango === true) {
  console.log("I like mango too.");
} else {
  console.log("I like mango.");
}




// 課題3：数値の配列
// 数値の配列を作成
// for文で合計を計算
// 平均を計算して表示
const nums = [];
for (let num = 1; num <= 1000; num += 3) {
    nums.push(num);
}
console.log(nums);

let sum = 0;
for (let sumNum = nums[0]; sumNum < nums.length; sumNum++) {
  sum += nums[sumNum];
}
console.log(sum);

const avarage = sum / nums.length;
console.log(avarage);



// 課題4：配列の並び替え（発展）
// 数値の配列を用意
// 最大値と最小値を見つける
// （余裕があれば）昇順に並び替える
const nums2 = [];
for (let num2 = 0; num2 <= 500; num2 += 10) {
  nums2.push(num2);
}
console.log(nums2);

let bigNum = nums2[0];
for (let bigIndex = 0; bigIndex < nums2.length; bigIndex++) {
  if (nums2[bigIndex] > bigNum) {
    bigNum = nums2[bigIndex];
  }
}
console.log(`Big number is ${bigNum}`);

  let minNum = nums2[0];
  for (let minIndex = 0; minIndex < nums2.length; minIndex++) {
    if (minNum > nums2[minIndex]) {
      minNum = nums2[minIndex];
    }
  }
console.log(`Min number is ${minNum}`);

for (let h = 0; h < nums2.length; h++) {
  for (let i = 0; i < nums2.length - 1; i++) {
    if (nums2[i] > nums2[i + 1]) {
      const temp = nums2[i];
      nums2[i] = nums2[i + 1];
      nums2[i + 1] = temp;
    }
  }
}console.log(nums2);




// 課題5：先頭への追加・削除
// 果物の配列を作成
// unshiftで先頭に果物を追加
// shiftで先頭の果物を取り出して表示
const fruits = [
  "apple",
  "banana",
  "mango",
  "orange",
  "lemon",
  "greap",
  "strawberry",
  "melon",
  "warter melon"
]
fruits.unshift("mikan", "blueberyy");
console.log(fruits);
fruits.shift();
console.log(fruits);



// 課題6：splice で要素を入れ替える
// 5つの数値の配列を用意
// spliceを使ってインデックス2の要素を削除
// spliceを使って新しい要素を任意の位置に挿入




// 課題7：forEach でインデックスつき表示
// 食べ物の配列を用意
// forEach の第2引数（index）を使って
// 「1番目: ラーメン」のように番号付きで表示
// （インデックスは0始まりなので +1 して表示）




// 課題8：条件に合う要素だけ表示
// 数値の配列を用意
// for文またはforEachを使って、10より大きい数値だけ表示




// 課題9：配列を逆順に表示
// 文字列の配列を用意
// for文を使って末尾から先頭に向かって表示しよう
// ヒント： i = array.length - 1 から i >= 0 まで i--




// 課題10：配列のコピーと独立した操作（発展）
// 数値の配列を作成し、スプレッド構文でコピー
// コピーした配列にpushで要素を追加
// 元の配列が変わっていないことを確認して表示