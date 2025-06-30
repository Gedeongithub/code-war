function isPrime(number) {
  if(number<2) return false;
  for(let i =2;i<number; i++){
    if(number%i ===0){
      return false;
    }
  }
  return true;
}
​
​
function getPrimes(start, finish) {
  let arr =[];
  if(start>finish){
    for(let i =finish;i<=start;i++){
    if(isPrime(i)){
      arr.push(i)
    }
  }
  }else{
    for(let i =start;i<=finish;i++){
    if(isPrime(i)){
      arr.push(i)
    }
  }
  }    
 return arr
}
​