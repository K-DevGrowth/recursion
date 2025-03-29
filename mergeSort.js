const mergeSort = (nums) => {
    if (nums.length <= 1) return nums;
    
    let mid = Math.floor(nums.length / 2);
    let left = [];
    let right = [];

    for (let i = 0; i < mid; i++) {
        left.push(nums[i]);
    }

    for (let i = mid; i < nums.length; i++) {
        right.push(nums[i]);
    }

    return merge(mergeSort(left), mergeSort(right));

}

const merge = (left, right) => {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// [0, 1, 1, 2, 3, 5, 8, 13]