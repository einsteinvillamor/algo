function fib(num, memo={}){
  if(num <= 0) { return 0;}
  if(num <= 2) { return 1;}
  
  //memoized
  if(memo[num - 1] === undefined){
    memo[num - 1] = fib(num - 1, memo);
  }

  //memoized
  if(memo[num - 2] === undefined){
    memo[num - 2] = fib(num - 2, memo);
  }

  return memo[num - 1] + memo[num -2];
}