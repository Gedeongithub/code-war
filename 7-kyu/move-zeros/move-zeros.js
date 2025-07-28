function move_zeros(arrNum, isRight){
let zeros = arrNum.filter(val=>val==0),nonZeros = arrNum.filter(val=>val!==0);
  if(isRight){
    return [...nonZeros,...zeros]
  }else if(isRight === false){
    return [...zeros,...nonZeros]
  }else{
  return [...nonZeros,...zeros]
  }
}