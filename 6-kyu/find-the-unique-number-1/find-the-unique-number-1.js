const findUniq =(arr)=> Number(Object.entries(arr.reduce((acc,cur)=>{ acc[cur]=(acc[cur]||0)+1
    return acc; },{})).filter(([key,value])=>value ==1).join('')[0]);