//Time Complexity - O(n)
//Space Complexity - O(1)
//returns -1 if not found
function linearSearchRecursive(arr,target,index = 0){
  if(index > arr.length - 1) { return - 1}
  if(arr[index] === target) {
    return index;
  } 
  return linearSearchRecursive(arr, target, index + 1);
}