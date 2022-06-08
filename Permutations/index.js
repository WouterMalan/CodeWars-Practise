// In this kata you have to create all permutations of a non empty input string and 
//  duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// function permutations(string) {
//     let result = [];//create an empty array to store the permutations
//     let permutations = (string, permutation) => {//create a function to generate the permutations and pass in the string and the permutation array
//         if(string.length === 0) {//if the string is empty, push the permutation array to the result array
//             result.push(permutation);//push the permutation array to the result array
//             return;//return the function to stop the function
//         }
//         for(let i = 0; i < string.length; i++) {//for each letter in the string loop through the string
//             let newString = string.slice(0, i) + string.slice(i + 1);//create a new string by removing the letter at the current index
//             permutations(newString, permutation + string[i]);//call the function again with the new string and the permutation array appended with the letter at the current index
//         }
//     }
//     permutations(string, '');//call the function with the string and the permutation array empty string as the second argument to start the function recursion
//     return result;//return the result array to the caller
// }
//another way to do the solution
// var permutationString = str => {
//     if (str.length <= 2) return str.length === 2 ? [str[0] + str[1], str[1] + str[0]] : [str];
//     return str
//        .split('')
//        .reduce(
//           (accumulator, letter, i) =>
//            accumulator.concat(permutationString(str.slice(0, i) + str.slice(i+1)).map(val => letter + val)),[]);
//  };

//another solution to do permutations
function permutationString(str) {
    if (str.length <= 2) return str.length === 2 ? [str[0] + str[1], str[1] + str[0]] : [str];
    return str
        .split('')
        .reduce(
           (accumulator, letter, i) =>
            accumulator.concat(permutationString(str.slice(0, i) + str.slice(i+1)).map(val => letter + val)),[]);
  };
  console.log(permutationString('aabb'));
