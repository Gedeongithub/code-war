function averageString(str) {
    let input = str.split(' ');
    let obj ={
      zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9
  }
    let final =[],objArray = Object.keys(obj);
  for(let val of input){
      if(!objArray.includes(val)) return 'n/a'
      final.push(obj[val])
  }
  return objArray[Math.floor(final.reduce((a,b)=>a+b)/final.length)]
//   return 
}