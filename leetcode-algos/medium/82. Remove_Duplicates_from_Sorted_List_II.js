// ! https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

// Given the head of a sorted linked list,
// delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list.Return the linked list sorted as well.

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var deleteDuplicates = function (head) {
  let dummy = new ListNode(0); // Create a dummy node to simplify handling the head
  dummy.next = head;

  let current = dummy;

  // Iterate through until the second-to-last node
  while (current.next !== null && current.next.next !== null) {
    // Check if the current node's value is the same as the next node's value
    if (current.next.val === current.next.next.val) {
      // Remove nodes with duplicate values
      let duplicateValue = current.next.val;
      // Iterate through nodes with the same value and remove them
      while (current.next !== null && current.next.val === duplicateValue) {
        current.next = current.next.next;
      }
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return dummy.next; // Return the modified linked list starting from the dummy's next
};

//  ? Time and Space Complexity:
// Time: O(n), where n is the number of nodes in the linked list
// Space: O(1), the only variables used are 'dummy', 'current', and 'duplicateValue'
//          Modifies the linked list in place without additional data structures
