import { reverseString } from "./reverseString";

export function checkIsPalindrome(str: string) {
  const reversedString = reverseString(str);

  return str === reversedString;
}
