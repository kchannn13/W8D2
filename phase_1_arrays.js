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
    let x = this[0].length;
    let y = this.length;

    let arr = new Array(x);
    
    for (let i = 0; i < x; i++) {
        arr[i] = new Array;
        for (let j = 0; j < y; j++) {
            arr[i].push(this[j][i])
        }
    }

    return arr;
}