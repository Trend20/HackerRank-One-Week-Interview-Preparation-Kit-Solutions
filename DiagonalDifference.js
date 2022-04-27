/*
  Given a square matrix, calculate the absolute difference between the sums of its diagonals. 
 */

function diagonalDifference(arr) {
  let leftToRightSum = 0;
  let rightToLeftSum = 0;
  
  for(let i = 0; i < arr.length; i++){
      leftToRightSum += arr[i][i]
      rightToLeftSum += arr[i][arr.length - 1 - i]
  }

  return Math.abs(leftToRightSum - rightToLeftSum)
}