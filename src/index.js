
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    let sortArr = [];
    for (let i=0;i<matrix.length;i++) {
        if (i%2 != 0) {
            sortArr.push(matrix[i].reverse())
        } else {
            sortArr.push(matrix[i])
        }
    }
    return sortArr.reduce((a, b) => a.concat(b), []);
}

