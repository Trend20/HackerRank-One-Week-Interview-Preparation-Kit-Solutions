/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers. 
## Example

arr =[1, 3, 5, 7, 9];
The minimum sum is: 1 + 3 + 5 + 7 =16 and the maximum sum is: 3 + 5 + 7 + 9 = 24 . The function prints 16 24 
 */

let myTestArr = [1, 3, 5, 7, 9];

function minMaxSum(arr){
  let sortedArr = arr.sort();
  let minSum = 0;
  let maxSum = 0;

  let minArr = sortedArr.slice(0, sortedArr.length -1);
  let maxArr = sortedArr.slice(1);

  for(let i = 0; i< minArr.length; i++){
    minSum += minArr[i]
  }

  for(let j = 0; j <maxArr.length; j++){
    maxSum += maxArr[j]
  }


  console.log(minSum, maxSum);

}

minMaxSum(myTestArr);