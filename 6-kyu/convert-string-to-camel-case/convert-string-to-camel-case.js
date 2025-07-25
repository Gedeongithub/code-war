// function toCamelCase(str){
//  let a =str.split('-').map(val=>val[0].toUpperCase()+val.slice(1)).join``
//  return a[0] === a[0].toUpperCase()? a[0].toUpperCase()+a.slice(1):a
// //  console.log(a)
// }
​
// toCamelCase('the_stealth_warrior')
​
function toCamelCase(str){
​
let result = '';
if(!str) return str
let capitalNext = false;
for(let i = 0; i<str.length; i++){
    let char = str[i]
    if(char === '_'|| char==='-'){
        capitalNext = true
    }else{
        if(capitalNext){
            result+=char.toUpperCase();
            capitalNext = false
        }else{
            result+=char
        }
        
    }
    
}
return result
}