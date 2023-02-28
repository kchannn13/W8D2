Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    let arr = [];

    const callbackToMyEach = function(el) {
        arr.push(callback(el));
    };

    this.myEach(callbackToMyEach);

    return arr;
} 

function logElement(el) {
   return (el * 2);
}

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;

    this.myEach(function(el) {accumulator = callback(accumulator, el)} )

    return accumulator;


}

function sum(accumulator, el) {
    return accumulator + el;
}

