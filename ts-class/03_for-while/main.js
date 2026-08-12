// 課題1：1から10まで表示
// for文を使って、1から10までの数字を表示しよう
for (let i = 1; i <= 10; i++) {
  console.log(i);
}



// 課題2：九九表
// ネストしたfor文を使って、九九表を作ろう
// 例：「1 × 1 = 1」「1 × 2 = 2」...
for (let j = 1; j <= 9; j++) {
  for (let k = 1; k <= 9; k++) {
    console.log(`${j} × ${k} = ${j * k}`);
  }
}



// 課題3：FizzBuzz
// 1から30までの数字に対して：
// 3の倍数なら「Fizz」
// 5の倍数なら「Buzz」
// 両方の倍数なら「FizzBuzz」
// それ以外はその数字を表示
console.log("Fizz Buzzを表示します")
for (let num = 1; num <= 30; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}



// 課題4：合計計算
// 1から100までの合計を計算して表示しよう
let totalSum = 0;
for (let sumNum = 1; sumNum <= 100; sumNum++) {
  totalSum += sumNum;
}
console.log(`1から100までの合計値は、 ${totalSum} になります。`);