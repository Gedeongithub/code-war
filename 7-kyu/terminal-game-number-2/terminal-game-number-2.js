 
Hero.prototype.move = function (dir) {
  // Code hero
}
​
let arr =[
    [00,01,02,03,04],
    [10,11,12,13,14],
    [20,21,22,23,24],
    [30,31,32,33,34],
    [40,41,42,43,44]];
// console.log(arr[0][2])
​
    let r = 0, c = 0
function check(position){
    switch(position){
        case 'down':
            return arr[++r][c]
            break;
        case 'up':
            return arr[--r][c]
            break;
        case 'right':
            return arr[r][++c]
            break;
        case 'left':
            return arr[r][--c]
            break;
    }
}
​
console.log(check('down'))
console.log(check('down'))
console.log(check('right'))
console.log(check('up'))
console.log(check('left'))
​
​
​
​
​
​