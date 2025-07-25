const arraySum =(arr)=> {
  let fla = arr.flat(Infinity)
  let sum = 0;
  for(let i =0; i<=fla.length; i++){
     let number = fla[i]
     if(typeof number === 'number') sum+=number
  }
  return sum
}