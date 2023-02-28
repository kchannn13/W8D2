Array.prototype.uniq = function () {
    let arr = [];

    for (let i = 0; i < this.length; i++) {
        if (arr.includes(this[i])) {
            continue;
        }
            arr.push(this[i])
    }
    
    return arr;
}

Array.prototype.twoSum = function () {
    let arr = [];

    for (let i = 0; i < this.length - 1; i++) {
        if (this[i] + this[i+1] === 0){
            arr.push([i, i+1]);
        }
    }
    return arr;
}

Array.prototype.transpose = function () {
    

}