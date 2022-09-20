function confirmEnding(str, target) {
    let testStr = str;
    let testRegex = new RegExp(target + "$", "i");
    console.log(testRegex);
    return testRegex.test(testStr);
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Connor", "n"));