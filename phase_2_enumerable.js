// Array.prototype.myEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i]);
//     }
// }

Array.prototype.myEach = function(callback) {
    this.forEach(callback)
}

function logElement(el) {
    console.log(el);
}


