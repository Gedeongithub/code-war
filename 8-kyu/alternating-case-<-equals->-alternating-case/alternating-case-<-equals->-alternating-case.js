String.prototype.toAlternatingCase = function () {
   let arr =[];
    for(let val of this.split('')){
        if(val !== val.toUpperCase()){
            arr.push(val.toUpperCase())
        }else{
            arr.push(val.toLowerCase())
        }
    }
    return arr.join``
}