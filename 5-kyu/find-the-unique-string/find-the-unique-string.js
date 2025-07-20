function findUniq(arr){
    let unique = arr.map(val=>{
        return [...val.toLowerCase()].sort().reduce((acc,char)=>{
            if(!acc.includes(char)) acc+=char
            return acc
        },'')
    })
    return arr[unique.indexOf(unique.find((val,_,arr)=>arr.indexOf(val)===arr.lastIndexOf(val)))]
}