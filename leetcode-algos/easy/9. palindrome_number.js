// ! https://leetcode.com/problems/palindrome-number/description/

// Given an integer x, return true if x is a palindrome, and false otherwise.
// Try to do this without converting the number to a string!

// ? Example 1:

// ? Input: x = 121
// ? Output: true
// ? Explanation: 121 reads as 121 from left to right and from right to left.

// TODO: Optimal Solution

function isPalindrome(x) {
  //   If x is negative or if it ends with a 0 but is not 0 itself:
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let original = x;
  let reversed = 0;

    while (x > 0) {
      //   Multiplying by 10 to shift digits to left, then adding the last digit of x (obtained with % 10)
        reversed = reversed * 10 + (x % 10);
        // Removing last digit of x by dividing by 10, preparing for next iteration of loop
      x = Math.floor(x / 10);
    }

  return original === reversed;
}

// ? Time and Space Complexity:
// Time: O(log n), where 'n' is the value of x. The number of digits dictates the number of iterations in the while loop
// Space: 0(1), constant space regardless of input size. A constant amount of space is rused to store 'reversed' and 'original'