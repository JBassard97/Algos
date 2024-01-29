// ! https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

// Given the head of a sorted linked list,
// delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

// ? Example 1.

// ? Input: head = [1,1,2,3,3]
// ? Output: [1,2,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// TODO: Optimal Solution

var deleteDuplicates = function (head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      // Remove the duplicate node
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return head;
};

// ? Time and Space Complexity:
// Time: O(n), where 'n' is the number of nodes in the linked list. In the worst case, we visit each node once
// Space: O(1), only uses a constant ammount of extra space to store the 'current' pointer and temporary variables