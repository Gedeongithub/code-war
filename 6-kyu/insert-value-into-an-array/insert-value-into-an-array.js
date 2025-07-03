 
Object.defineProperty(Array.prototype,'insert',{
  value:function(index,val){
    if( index >= this.length){
        this.push(val);
    }else{
    this.splice(index,0,val);
    }
    return this;
},
  enumerable:false
})