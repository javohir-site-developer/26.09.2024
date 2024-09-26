//1

function invert(arr) {
  return arr.map((x) => -x);
}
console.log(invert([1, 2, 3]));

//2

function getBonus(baseAmount, isBonus) {
  return isBonus ? baseAmount * 10 : baseAmount;
}

console.log(getBonus(500, true));
console.log(getBonus(100, false));

//3
function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("drow"));
console.log(solution("something"));

//4

function gym(i, u, k) {
  return Math.max(u + k - i, 0);
}
console.log(gym(10, 5, 5));

//5

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(39.99));
console.log(formatMoney(3));
console.log(formatMoney(9.1));

// let text = "true true";
// let count = 0;
// for (let i = 0; i < text.length; i++) {
//   if (text[i] === "true") {
//       count++;
//     }
//
