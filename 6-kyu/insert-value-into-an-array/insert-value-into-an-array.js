 
Array.prototype.insert = function(index,val){
    let arr = this;
    if(val>arr.length){
        arr.push(val);
        return arr;
    };
    arr.splice(index,0,val);
    return arr
}
​
Object.defineProperty(Array.prototype,'insert',{
  value:function(){},
  enumerable:false
})