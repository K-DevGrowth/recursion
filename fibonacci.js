const fibs = (num) => {
    let array = [];
    let total = 0;
    for (let i = 0; i < num; i++) {
        if (i < 2) {
            total = i;
        }
        else {
            total = array[i - 1] + array[i - 2];
        }
        array.push(total);
    }
    return array;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

const fibsRec = (num) => {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];


    let prevArr = fibsRec(num - 1);
    let nextArr = prevArr[prevArr.length - 1] + prevArr[prevArr.length - 2];
    return [...prevArr, nextArr];

}

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]