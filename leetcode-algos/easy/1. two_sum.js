// ! https://leetcode.com/problems/two-sum/description/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// ? Example 1:

// ? Input: nums = [2,7,11,15], target = 9
// ? Output: [0,1]
// ? Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// TODO: Optimal Solution

function twoSum(nums, target) {
  const hashMap = {};

  for (let i = 0; 1 < nums.length; i++) {
    const complement = target - nums[i];

    if (hashMap.hasOwnProperty(complement)) {
      return [hashMap[complement], i];
    }
    
    hashMap[nums[i]] = i;
  }

  return [];
}

// ? Time and Space Complexity:
// Time:  O(n), where n is the number of elements in 'nums' array
// Space: O(n) in worst case, as the space of the hashMap grows linearly with the size of 'nums'
//          Or
//        O(1) in best case, where the target sum is found early in the array
