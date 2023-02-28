// Array.prototype.myEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i]);
//     }
// }

Array.prototype.myEach = function(callback) {
    this.forEach(callback)
    // this.forEach((el) => callback(el))
}

// const Array.prototype.myEach = (callback) => {
//     this.forEach(callback)
// }


Array.prototype.myMap = function(callback) {
    let arr = [];

    // for (let i = 0; i < this.length; i++) {
    //     // num = callback(this[i])
    //     arr.push(callback(this[i]));
    // }
    // return arr;
    arr.push(this.myEach(callback));
    return arr;
} 

function logElement(el) {
   return (el * 2);
    // console.log(el * 2);
}

