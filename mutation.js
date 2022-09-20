function mutation(arr) {
    //lowercase & split arrays
    let arr0 = arr[0].toLowerCase().split('');
    let arr1 = arr[1].toLowerCase().split('');

    //loop each letter on arr1 & check index on arr0
    for (let i = 0; i < arr1.length; i++) {
        if (arr0.indexOf(arr1[i]) < 0) return false;
    }
    return true;
    }

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["hello", "neo"]));