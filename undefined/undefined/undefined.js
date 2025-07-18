function fSquared (arr) {
let match = 0;
 for(let i of arr){
     if(typeof i !== 'number') return undefined;
    if(i*i % 2 == 0){
        match+=i*i
    }
 }
 return match
};