//Time Complexity - O(n^2)
//[6,5,3,1,8,7,2,4]
function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    //compare to the sorted list
    for(var j = i - 1; j >= 0; j--){
      if(arr[i] < arr[j]){
        arr = swap(arr, i, j);
        i--; //to keep track of the current element
      }
    }
  }
  return arr;
}

function swap(arr,var1, var2){
  var temp = arr[var1];
  arr[var1] = arr[var2];
  arr[var2] = temp;
  return arr;
}