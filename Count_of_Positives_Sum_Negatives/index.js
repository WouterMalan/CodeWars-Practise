// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
    let positiveSum = 0;
    let negativeSum = 0;
  if(input==null || input.length==0){//if input is empty or null return empty array
    return [];
  }
  else{
    input.forEach( element => {//loop through input array
        if(element>0){
            positiveSum++;// if element is positive add to positiveSum
        }
        else{
            negativeSum+=element;// add negative numbers to negativeSum
        }
      });
  }
    return [positiveSum,negativeSum];//return array with positiveSum and negativeSum
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));