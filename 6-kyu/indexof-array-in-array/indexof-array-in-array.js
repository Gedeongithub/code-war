let searchArray = function (arrayToSearch, query) {
    if(!Array.isArray(arrayToSearch)){
        throw new Error("arrayToSearch must be an array");
    }
    if(!Array.isArray(query) || query.length !== 2){
        throw new Error("query must be an array of length 2");
    }
    for(let i = 0; i < arrayToSearch.length; i++){
        if(!Array.isArray(arrayToSearch[i]) || arrayToSearch[i].length !==2){
            throw new Error('Each sub-array must be an array of length 2')
        }
    }
    
    for(let sub =0; sub < arrayToSearch.length; sub++){
        let current = arrayToSearch[sub];
        if(current[0] === query[0] && current[1]===query[1]){
            return sub;
        }
    }
    return -1
}
console.log(searchArray([[3,3],[4,5],[2,3],[2,4]],[2,3]))