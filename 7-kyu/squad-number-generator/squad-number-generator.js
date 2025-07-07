//     let candidate = possible.map(val=>val.join``).sort((a,b)=>a-b)
//     if(candidate.length === 0) return null;
//     return +candidate[0]
//     }
​
function generateNumber(squad, n){
​
    let possible = [];
    if(!squad.includes(n)) return n;
    
    for(let i =1; i<=9; i++){
        for(let j = 1; j<=9; j++){
            if(j+i !== n) continue;
          let stringNumber = "" +i+j
        let num = Number(stringNumber);
        if(!squad.includes(num)){
            possible.push(num)
        }
        }
    }
    return possible.length === 0? null:possible[0]
    
    }