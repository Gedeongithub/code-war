const calculate =(str)=>{
  //your code here...
  let plus = str.replaceAll('plus','+'),minus = plus.replaceAll('minus','-');
    return String(eval(minus));
}