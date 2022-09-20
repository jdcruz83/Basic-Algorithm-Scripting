function frankenSplice(arr1, arr2, n) {
    for (let i in arr1) {
        let copyArr2 = arr2.slice(0,); 
        copyArr2.splice(n, 0, ...arr1);
        console.log(`Arrays after function runs: ${arr1} and ${arr2}`);
        return copyArr2;
    }

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));