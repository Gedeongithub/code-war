​
const findUniq =(arr)=>{
    let other = arr.map(val=>[...new Set(val.toLowerCase())].sort().join(''))
​
    let unique = other.filter(val=>other.indexOf(val)== other.lastIndexOf(val)).join('');
    return arr[other.indexOf(unique)]
}
​