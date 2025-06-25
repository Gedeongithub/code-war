const findUniq =(arr)=> Object.entries(arr.reduce((acc,cur)=>{ acc[cur]=(acc[cur]||0)+1
    return acc; },{})).filter(([key,value])=>value <2).join('')[0];