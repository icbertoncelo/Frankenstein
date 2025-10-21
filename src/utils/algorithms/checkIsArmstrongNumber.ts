// Checks if a number is an Armstrong number
// 153 = 1^3 + 5^3 + 3^3
export function checkIsArmstrongNumber(num: number) {
  const splittedNumber = num.toString().split("");
  const power = splittedNumber.length;

  const sumOfPoweredDigits = splittedNumber.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), power);
  }, 0);

  return sumOfPoweredDigits === num;
}
