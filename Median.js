// Find the median of an array of odd numbers

function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a-b);
  let median;
  
  if(arr.length % 2 != 0){
      let middleElement = Math.floor(arr.length / 2);
      median = arr[middleElement]
  }else{
      let middleElement = Math.floor(arr.length / 2);
      median = (arr[middleElement] - arr[middleElement - 1])/2
  }
  
  console.log(median);

}
