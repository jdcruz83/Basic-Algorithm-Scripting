function bouncer(arr) {
    let newArr = [];
    for ( let i = 0; i < arr.length; i++) {
        let bool = Boolean(arr[i]);
        if (bool === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

    // Another way of doing it (as in Get Hint)
    /*let newArr = [];
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i]) newArr.push(arr[i]); //shorthand “if there is a value at arr[i], and that value is not null, or undefined, or something that will be evaluated as ‘false’”.
    }
    return newArr;*/
}

bouncer([7, "ate", "", false, 9]);
console.log(bouncer([7, "ate", "", false, 9])); //should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])); //should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); //should return [].
console.log(bouncer([null, NaN, 1, 2, undefined])); //should return [1, 2].