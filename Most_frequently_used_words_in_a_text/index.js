// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an 
// array of the top-3 most occurring words, in descending order of the number of occurrences.
// Assumptions:

//     A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
//     Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
//     Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
//     Matches should be case-insensitive, and the words in the result should be lowercased.
//     Ties may be broken arbitrarily.
//     If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

//another methods to solve the problem
let topThreeWords = text => {
    let dict = new Map();
    text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
        let word = match.toLowerCase();
        dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
    });
    dict.delete("'");
    return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
};




// function topThreeWords(text) {
//     let regex = ".*[a-zA-Z].*";//regex to match words with letters
//     if (text.match(regex)) {//if there are words in the text with letters then split the text into words
//         let wordMap = new Map();//create a map to store the words and their counts
//         text.split(' ').forEach(word => {//split the text into words and iterate through them
//             if (word) {//if the word is not empty then lowercase it and remove the apostrophes
//                 word = word.toLowerCase();//lowercase the word
//                 if (wordMap.has(word)) {//if the word is already in the map then increment the count
//                     let count = wordMap.get(word);//get the count of the word from the map
//                     count ++;
//                     wordMap.set(word, count);//set the word and its count in the map
//                 } else {
//                     wordMap.set(word, 1);//if the word is not in the map then set the word and its count to 1
//                 }
//             }
//         })
//         const sortedWordMap = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));//sort the map by the count of the words in descending order
 
//         let result = Array.from(sortedWordMap.keys()).filter( (word, index) => index < 3);//get the top three words from the map and filter out the words that are not in the top three
//         result = result.map(res => {//map the top three words to their counts and return an array of objects with the word and its count
//             res = res.replace(/[/.,]/g, '')//remove the punctuation from the word and return the word and its count
//             if (res !== "") {//if the word is not empty then return the word and its count as an object
//                 return res//return the word and its count as an object
//             }
//         })
//         return result.filter(res => res !== undefined)//filter out the undefined words and return the array of objects with the word and its count
     
//     } else {
//         return [];//if there are no words in the text with letters then return an empty array
//     }
// }