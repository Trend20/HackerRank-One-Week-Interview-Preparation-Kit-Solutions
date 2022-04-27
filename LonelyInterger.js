/* 
  Given an array of integers, where all elements but one occur twice, find the unique element. 
  example: a=[1, 3, 5, 2, 4, 5, 2, 1]
  ans=4.
*/

function lonelyInteger(a) {
  // Write your code here
  let lonelyInt;

  for(let i = 0; i<a.length; i++){
    if(a.filter((x) => x == a[i]).length == 1){
      lonelyInt = a[i]
    }
  }

  return lonelyInt;
}
