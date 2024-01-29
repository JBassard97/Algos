// ! https://leetcode.com/problems/longest-common-prefix/description/

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// ? Example 1:

// ? Input: strs = ["flower","flow","flight"]
// ? Output: "fl"

// TODO: Optimal Solution

function longestCommonPrefix(strs) {
    // if an empty string gets passed in, give it back
    if (strs.length === 0) return "";

    // grabbing the first string in the array, assuming it as initial common prefix
    let prefix = strs[0];

    // looping over array starting at second string (i=1) since the first string is accounted for
    for (let i = 1; i < strs.length; i++){
        // If the current string strs[i] doesn't start with the prefix,
        // indexOf returns the index of the first occurrence of prefix in strs[i]
        // AND if it's not at index 0 (beginning), the loop continues until it is
        while (strs[i].indexOf(prefix) !== 0) {
            // Shortening the prefix by removing the last character. 
            // Reducing it until it matches the start of the current string strs[i]
            prefix = prefix.substring(0, prefix.length - 1);
            // If prefix becomes an empty string, there's no comon prefix
            if (prefix = "") return "";
        }
    }
    return prefix;
}

// ? Time and Space Complexity
// Time: O(n*m), where n is the number of strings in 'strs', and m is the length of the longest string. 
// Space: O(1), only uses a fixed amound of extra space for 'prefix', 'i', 
//  and the temporary substrings, independent on size of input