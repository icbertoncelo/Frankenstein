import {
  checkIsPalindrome,
  findFactorial,
  generateFibonacciSequence,
  reverseString,
  checkIsPrimeNumber,
} from "@/utils/algorithms";
import { checkIsArmstrongNumber } from "@/utils/algorithms/checkIsArmstrongNumber";
import { reverseNumber } from "@/utils/algorithms/reverseNumber";

export type ActionKey =
  | "fibonacci"
  | "palindrome"
  | "reverseString"
  | "findFactorial"
  | "checkPrimeNumber"
  | "reverseNumber"
  | "checkIsArmstrongNumber"

export interface AlgorithmActions {
  name: string;
  key: ActionKey;
  placeholder: string;
  action: (input: string) => string | number;
}

export const ALGORITHMS: AlgorithmActions[] = [
  {
    name: "Generate Fibonacci Sequence",
    key: "fibonacci",
    placeholder: "Enter a non-negative number",
    action: (input) => {
      if (!input || isNaN(Number(input)) || Number(input) < 0) {
        return "Please enter a valid number";
      }
      const fibSequence = generateFibonacciSequence(Number(input) || 0);
      return fibSequence.join(", ");
    },
  },
  {
    name: "Check Palindrome",
    key: "palindrome",
    placeholder: "Enter a string",
    action: (input) => {
      if (!input) {
        return "Please enter a valid string";
      }
      const isPalindrome = checkIsPalindrome(input);
      return isPalindrome ? "Yes" : "No";
    },
  },
  {
    name: "Reverse String",
    key: "reverseString",
    placeholder: "Enter a string",
    action: (input) => {
      if (!input) {
        return "Please enter a valid string";
      }
      return reverseString(input);
    },
  },
  {
    name: "Find Factorial",
    key: "findFactorial",
    placeholder: "Enter a non-negative number",
    action: (input) => {
      if (!input || isNaN(Number(input)) || Number(input) < 0) {
        return "Please enter a valid number";
      }

      const factorial = findFactorial(Number(input) || 0);

      return String(factorial);
    },
  },
  {
    name: "Check Prime Number",
    key: "checkPrimeNumber",
    placeholder: "Enter a non-negative number",
    action: (input) => {
      if (!input || isNaN(Number(input)) || Number(input) < 0) {
        return "Please enter a valid number";
      }

      const isPrimeNumber = checkIsPrimeNumber(Number(input) || 0);

      return isPrimeNumber ? "Yes" : "No";
    },
  },
  {
    name: "Reverse Number",
    key: "reverseNumber",
    placeholder: "Enter a non-negative number",
    action: (input) => {
      if (!input || isNaN(Number(input)) || Number(input) < 0) {
        return "Please enter a valid number";
      }

      const reversedNumber = reverseNumber(Number(input) || 0);

      return reversedNumber
    },
  },
  {
    name: "Check Armstrong Number",
    key: "checkIsArmstrongNumber",
    placeholder: "Enter a non-negative number",
    action: (input) => {
      if (!input || isNaN(Number(input)) || Number(input) < 0) {
        return "Please enter a valid number";
      }

      const isArmstrongNumber = checkIsArmstrongNumber(Number(input) || 0);

      return isArmstrongNumber ? "Yes" : "No";
    },
  },
];
