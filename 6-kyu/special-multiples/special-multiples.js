const isPrime =(num)=>{
    if(num<=1) return false;
    for(let i = 2; i <= Math.sqrt(num);i++){
        if(num % i === 0){
           return false
        }
    }
    return true
}
// function primeUpTo(n){
//     let arr =[];
//     for(let i = 2; i<=n;i++){
//         if(isPrime(i)){
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(primeUpTo(3))
const getFirstNPrime =(n)=>{
    let primes = [];
    let firstPrime = 2;
    while(primes.length<n){
        if(isPrime(firstPrime)){
            primes.push(firstPrime)
        }
        firstPrime++
    }
    return primes.reduce((acc,cur)=>acc*cur,1);
}
// console.log(getFirstNPrime(3))
​
const countMultiples =(product,limit)=> Math.floor(limit-1)/product;
​
const countSpecMult =(n, mxval)=> {
    const primes = getFirstNPrime(n);
    const product = countMultiples(primes,mxval);
    return Math.floor(product)
}
// console.log(countSpecMult(3,200))
​