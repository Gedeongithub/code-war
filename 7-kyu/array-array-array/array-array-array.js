function explode(x){
 let a = x[0],b=x[1],time = null,final =[];
 if(typeof a == 'number'&& typeof b =='number') {
     time=a+b;
 }else if(typeof a !== 'number' && typeof b === 'number') {
     time = b;
 }else if(typeof b !== 'number' && typeof a === 'number'){
     time =a;
 } else if(typeof a !== 'number' && typeof b !== 'number'){
     return 'Void!'
 };
 if(time !== 0){
     for(let i =0; i<time; i++){
         final.push(x)
     }
     return final;
 }
 return time = []
 
}