const twoHighest =(arr)=> {
    return  Object.keys(arr.sort((a,b)=>b-a).reduce((acc,cur)=>{
        acc[cur]=(acc[cur]||0)+1;
        return acc
    },{})).slice(-2).map(val=>Number(val)).sort((a,b)=>b-a);
}