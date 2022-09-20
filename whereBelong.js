function getIndexToIns(arr, num) {
    let index = 0;

    //insert num into array
    arr.push(num);
    //sort array -> (function(a, b){return a - b}) is needed because of number sorting;
    arr.sort(function(a, b){return a - b}); // Arrow Function .sort((a, b) => a - b)
    //get index of inserted num
    index = arr.indexOf(num);
    //console.log(index);
    return index;
}

getIndexToIns([40, 60], 50);
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //should return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //should return 2.
console.log(getIndexToIns([40, 60], 50)); //should return 1.
console.log(getIndexToIns([3, 10, 5], 3)); //should return 0.
console.log(getIndexToIns([5, 3, 20, 3], 5)); //should return 2.
console.log(getIndexToIns([2, 20, 10], 19)); //should return 2.
console.log(getIndexToIns([2, 5, 10], 15)); //should return 3.
console.log(getIndexToIns([], 1)); //should return 0.