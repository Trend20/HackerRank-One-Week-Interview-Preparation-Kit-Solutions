/*
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to 10^-4 are acceptable.
*/
let myNums = [-4, 3, -9, 0, 4, 1];
function PlusMinus(arr){
  let arrSize = arr.length;

  let positiveRatio = 0;
  let negativeRatio = 0;
  let zeroRatio = 0;

  let positiveArr = [];
  let negativeArr = [];
  let zeroArr = [];

  arr.forEach((item) =>{
    if(item > 0){
      positiveArr.push(item)
      positiveRatio = Math.abs(positiveArr.length / arrSize).toFixed(6);
    }else if(item < 0){
      negativeArr.push(item)
      negativeRatio = Math.abs(negativeArr.length / arrSize).toFixed(6);
    }else{
      zeroArr.push(item)
      zeroRatio = Math.abs(zeroArr.length / arrSize).toFixed(6);
    }
  })
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

PlusMinus(myNums);