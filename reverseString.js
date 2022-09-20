function reverseString(str) {
    let arr = str.split('');
    arr.reverse();
    str = arr.join("");

    console.log("Array ->", arr, "\n");
    console.log("String ->", str, "\n");
    return str;
}
  
reverseString("hello");