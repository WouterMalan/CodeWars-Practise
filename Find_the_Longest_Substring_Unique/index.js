// Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.
// Note

//     1 <= s.length <= 10^7

//     5 fixed testcases

//     100 random testcases, testing for correctness of solution

//     100 random testcases, testing for performance of code

//     All inputs are valid.

//     Pay attention to code performance.

//     If my reference solution gives the wrong result in the random tests, please let me know(post an issue).

 //Example 1:
// For s="baacab", the output should be 3.

function longestSubstringOf(string) {
    let longest = 0;//set longest to 0 to start
    let current = 0;//set current to 0 to start
    let seen = {};//create an object to store the characters seen in the string and their index
    for (let i = 0; i < string.length; i++) {//loop through the string to find the longest substring
        if(seen[string[i]]){//if the character is already in the object (seen) then set current to the index of the character in the object (seen) and add 1 to current
            current = i - seen[string[i]];//set current to the index of the character in the object (seen) and add 1 to current
        }
        seen[string[i]] = i;//add the character to the object (seen) and set the index to i (the current index)
        longest = Math.max(longest, current + 1);//set longest to the current length of the substring + 1
    }
    return longest;//return the longest substring
}

console.log(longestSubstringOf("hchzvfrkmlnozjk"));