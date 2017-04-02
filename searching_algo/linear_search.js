//Time Complexity - O(n)
//Space Complexity - O(1)
//returns -1 if not found
function linearSearch(arr,target){ 
  for(var i =0 ; i < arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}