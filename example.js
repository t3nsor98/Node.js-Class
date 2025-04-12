function isPalindrome(head) {}

class Solution {
  // Function to check whether the list is palindrome.
  isPalindrome(head) {
    // your code here
    if (!head) return true;

    let values = [];
    let current = head;

    // Store values in an array
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    // Check if the array is a palindrome
    let left = 0;
    let right = values.length - 1;

    while (left < right) {
      if (values[left] !== values[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
}
