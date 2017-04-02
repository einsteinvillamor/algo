//Time Complexity - O(n^2)
function bubbleSort(arr){
  do {
    var swapped = false;
    //start at the end
    for(var i = arr.length - 1; i >= 0; i--){
      if(arr[i] < arr[i - 1]){
        arr = swap(arr,i, i - 1);
        swapped = true;
      }
    }
  } while(swapped)
  return arr;
}

function swap(arr,var1, var2){
  var temp = arr[var1];
  arr[var1] = arr[var2];
  arr[var2] = temp;
  return arr;
}