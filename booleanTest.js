function booWho(bool) {
    let bln = typeof(bool);
    //
    //console.log(bln)
    //
    if (bln == "boolean") {
        return true;
    } else {
        return false;
    }
}

console.log(booWho(null));

console.log("should return true. -> " + booWho(true)); //should return true.
console.log("should return true. -> " + booWho(false)); //should return true.
console.log("should return false. -> " + booWho([1, 2, 3])); //should return false.
console.log("should return false. -> " + booWho([].slice)); //should return false.
console.log("should return false. -> " + booWho({ "a": 1 })); //should return false.
console.log("should return false. -> " + booWho(1)); //should return false.
console.log("should return false. -> " + booWho(NaN)); //should return false.
console.log("should return false. -> " + booWho("a")); //should return false.
console.log("should return false. -> " + booWho("true")); //should return false.
console.log("should return false. -> " + booWho("false")); //should return false.