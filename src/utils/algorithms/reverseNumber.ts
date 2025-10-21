export function reverseNumber(num: number) {
  const sign = Math.sign(num);
  const reversedString = num.toString().split("").reverse().join("");
  const reversedNumber = Number(reversedString) * sign;
  
  return reversedNumber;
}
