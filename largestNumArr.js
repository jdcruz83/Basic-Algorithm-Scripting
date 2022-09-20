function largestOfFour(arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        let largestNumber = subArr[0];
            for (let j = 0; j < subArr.length; j++) {
                if (subArr[j] > largestNumber) {
                    largestNumber = subArr[j];      
                }      
            }
            resultArr[i] = largestNumber;
            console.log(`The largest number in array [${subArr}] is ${largestNumber}`);
    }
    return resultArr;
}
    
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));