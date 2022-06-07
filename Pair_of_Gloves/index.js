// Winter is coming, you must prepare your ski holidays. The objective of this kata is to 
// determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

function numberOfPairs(gloves){
    let arr = gloves.slice().sort((a,b)=>a.localeCompare(b))//sort the gloves array in ascending order and store it in a new array called arr
    let pairs = 0;//initialize the pairs to 0 
    for (let i=1;i<arr.length;i++){//iterate through the array starting at the second element
      if (arr[i-1]===arr[i]){//if the previous element is equal to the current element then increment the pairs
        pairs++;//increment the pairs by 1
        i++//increment the index by 1 to skip the next element in the array
      }
    }
    return pairs//return the number of pairs
 }