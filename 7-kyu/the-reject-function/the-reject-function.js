function fSquared (arr) {
let match = 0;
 for(let i of arr){
     if(typeof i !== 'number') return undefined;
    match+=i*i
 }
 return match
};