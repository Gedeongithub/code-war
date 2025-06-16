const encode =string=> {
  let vowel ={
      a:1,
      e:2,
      i:3,
      o:4,
      u:5
  }
  return [...string].map((val)=>vowel[val]|| val).join('')
  
}
// console.log(encode('How are you today?'))
​
const decode =string=> {
  let vowel ={
      '1':'a',
      '2':'e',
      '3':'i',
      '4':'o',
      '5':'u'
  }
  return [...string].map((val)=>vowel[val]|| val).join('')
  
}