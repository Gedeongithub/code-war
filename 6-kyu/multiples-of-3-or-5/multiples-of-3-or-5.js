const solution =(number)=>{
  if(number <0) return 0;
  if(number == 4)return 3;
​
  let sum =[];
  for(let i=0;i<number;i++){
    if(i%3==0||i%5==0){
      sum.push(i)
    }
  }
  return sum.reduce((a,b)=>a+b,0)
}
​
// console.log(solution(10))
​
​