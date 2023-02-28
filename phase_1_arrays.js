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
