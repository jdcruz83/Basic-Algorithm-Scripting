function findElement(arr, func) {
    let num = 0;
    let result = undefined;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        result = func(num);
            if (result === true) {
                return num;
            }
    }
}


findElement([1, 2, 3, 4], num => num % 2 === 0);

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); //should return 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); //should return undefined.