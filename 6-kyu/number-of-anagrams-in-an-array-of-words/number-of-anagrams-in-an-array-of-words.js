const anagramCounter =wordsArray=> {
    let obj ={};
let arr =wordsArray.map(val=>val.split('').sort().join('')).sort();
let final = 0;
for(let i of arr){
    obj[i]=(obj[i]||0)+1
}
 for(let key in obj){
     const count = obj[key];
     
     if(count>1){
        //  console.log(count)
         final+=count*(count-1)/2
     }
 }
 return final
}