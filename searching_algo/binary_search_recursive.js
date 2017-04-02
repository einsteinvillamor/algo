//Time Complexity - O(log(n))
//requirements array should be sorted
function binarySearchRecursive(arr, target, start=0, end=arr.length, mid=Math.floor((start + end)/2)){
  if(start <= end){
    mid = Math.floor((start + end) / 2);
    if(arr[mid] > target){
      end = mid - 1;
      return binarySearchRecursive(arr, target, start, end, mid);
    } else if (arr[mid] < target) {
      start = mid + 1;
      return binarySearchRecursive(arr, target, start, end, mid);
    } else {  
      return mid;
    }  
  }
  return -1;
}