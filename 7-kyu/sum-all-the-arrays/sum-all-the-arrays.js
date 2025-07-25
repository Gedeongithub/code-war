 
const arraySum =(arr)=> arr.toString().split(',').map(val=>+val).filter(val=>!Number(isNaN(val))).reduce((acc,cur)=>acc+cur)