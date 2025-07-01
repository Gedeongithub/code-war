const digitalRoot =(n)=> {
    let sum = [...n.toString()];
    while(sum.length>1){
         let total =sum.reduce((acc,cur)=>Number(acc)+Number(cur),0);
         sum = total.toString().split('')
    }
  return Number(sum[0])
}
​