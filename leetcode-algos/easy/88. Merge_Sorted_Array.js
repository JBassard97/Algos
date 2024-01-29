// ! https://leetcode.com/problems/merge-sorted-array/description/

// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored.nums2 has a length of n.

// TODO: Optimal Solution

var merge = function (nums1, m, nums2, n) {
  // Pointer for end of nums 1
  let i = m - 1;
  // Pointer for end of nums 2
  let j = n - 1;
  // Pointer for end of space reserved in nums1 for merging
  let mergedIndex = m + n - 1;

  // nums2 from end to beginning
  while (j >= 0) {
    // check for remaining elements in nums1 and if the current element in nums1 is greater than in nums2
    if (i >= 0 && nums1[i] > nums2[j]) {
      // if true place the current element from nums1 at the mergedIndex position,
      //  and decrement both mergedIndex and i
      nums1[mergedIndex--] = nums1[i--];
    } else {
      // if false, either nums1 is exhausted or the element in nums2 is greater
      // place the current element from nums2 at the mergedIndex position,
      //  and decerement both mergedIndex and j
      nums1[mergedIndex--] = nums2[j--];
    }
  }
};

// ? Time and Space Complexity:
// Time: O(m+n), where m is the length of nums1 and n is the length of nums2. 
//        Iterates through both arrays once with constant time operations
// Space: Only variables used are 'i', 'j', and 'mergedIndex'. 

// Merge is done in place.
// That means that the merging of two arrays or data structures occurs directly within the existing 
// memory space of one of the arrays, without using additional memory for storing the merged result.