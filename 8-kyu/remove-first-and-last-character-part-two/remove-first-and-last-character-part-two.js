const array=string=> {
    let arr = string.split(',')
  if(arr.length<3) return null;
  return arr.slice(1,-1).join(' ')
}