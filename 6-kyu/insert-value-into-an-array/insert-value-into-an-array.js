 
// Array.prototype.insert = function(index,val){
//     let arr = this;
//     if(val>arr.length){
//         arr.push(val);
//         return arr;
//     };
//     arr.splice(index,0,val);
//     return arr
// }
​
Object.defineProperty(Array.prototype,'insert',{
  value:function(index,val){
    let arr = this;
    if(val>arr.length){
        arr.push(val);
        return arr;
    };
    arr.splice(index,0,val);
    return arr
},
  enumerable:false
})
​
​
// Object.defineProperty(Array.prototype, 'insert', {
//   value: function(index, value) {
//     if (index >= this.length) {
//       this.push(value);
//     } else {
//       this.splice(index, 0, value);
//     }
//     return this;
//   },
//   enumerable: false
// });
​