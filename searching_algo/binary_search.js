//Time Complexity - O(log(n))
//requirements array should be sorted
function binarySearch(arr, target){
  var start = 0;
  var end = arr.length - 1;
  while(start <= end){  
    var mid = Math.floor((start + end) / 2);
    if(arr[mid] > target){
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {  
      return mid;
    }
  }
  return -1;
}