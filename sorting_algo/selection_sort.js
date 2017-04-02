//Time Complexity - O(n^2)
function selectionSort(arr){
  for(var i = 0; i < arr.length; i++){
    var min = i;
    for(var j = i + 1; j < arr.length; j++){
      if(arr[min] > arr[j]){
        min = j;
      }
      if(j === arr.length - 1){
        arr = swap(arr, i, min);
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