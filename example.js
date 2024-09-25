//{ Driver Code Starts
//Initial Template for javascript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let input_line = readLine().split();
    let S = input_line[0];
    input_line = readLine().split();
    let P = input_line[0];
    let obj = new Solution();
    let ans = obj.smallestWindow(S, P);
    console.log(ans);
  }
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string} s
 * @param {string} p
 * @returns {string}
 */

class Solution {
  // Function to find the smallest window in the string `s`
  // consisting of all the characters of string `p`.
  smallestWindow(s, p) {
    if (p.length > s.length) {
      return -1; // If 'p' is longer than 's', return -1
    }

    let charCount = {};
    let windowCount = {};
    let required = 0;
    let formed = 0;
    let left = 0;
    let right = 0;
    let minLength = Infinity;
    let minLeft = 0;

    // Count the frequency of each character in 'p'
    for (let char of p) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    required = Object.keys(charCount).length;

    // Start sliding the window over the string 's'
    while (right < s.length) {
      let char = s[right];
      windowCount[char] = (windowCount[char] || 0) + 1;

      if (char in charCount && windowCount[char] === charCount[char]) {
        formed++;
      }

      // Try to contract the window until it's no longer valid
      while (left <= right && formed === required) {
        char = s[left];

        // Update minimum window size
        if (right - left + 1 < minLength) {
          minLength = right - left + 1;
          minLeft = left;
        }

        windowCount[char]--;
        if (char in charCount && windowCount[char] < charCount[char]) {
          formed--;
        }
        left++;
      }
      right++;
    }

    return minLength === Infinity
      ? -1
      : s.substring(minLeft, minLeft + minLength);
  }
}
