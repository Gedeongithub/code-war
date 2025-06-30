const findOdd =(arr)=> {
let obj= arr.reduce((acc,cur)=>{
    acc[cur]=(acc[cur]||0)+1;
    return acc
},{})
let arr1 =[]
for(let key in obj){
    console.log(obj[key])
    obj[key]%2 !== 0? arr1.push(key):''
}
return Number(arr1[0])
}