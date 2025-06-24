const dominator =(arr)=> {
  let obj = {};
  arr.map(val=> obj[val]=(obj[val]||0)+1)
for(let key in obj){
    if(obj[key]>arr.length/2){
        return Number(key);
    }
}
return -1
}