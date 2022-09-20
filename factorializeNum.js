function factorialize(num) {  // recursion
    if (num === 0) {
        return 1;
    } 
    return num * factorialize(num - 1);
}

factorialize(5);
console.log(factorialize(5));