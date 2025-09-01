const digits =(num)=>{
      let sum = []
      let digits = String(num).split('').map(digit=>Number(digit))
      for(let i=0; i<digits.length;i++){
         for(let j= i+1;j< digits.length; j++){
             sum.push(digits[i]+digits[j]) 
          }
      }
      return sum
}