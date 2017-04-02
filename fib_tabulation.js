function fib(num){
    // array declaration 
    var arr = new Array(num+1).fill(0)
    // base case assignment
    arr[1] = 1;
    // calculating the fibonacci and storing the values
    for(var i = 2; i <= num; i++){
      arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[num]
}