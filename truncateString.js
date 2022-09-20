function truncateString(str, num) {
    if (str.length > num) {
        return str.substr(0, num) + "...";
    } else if (str.length <= num) {
        return str.substr(0, num);
    }
}
  
  
truncateString("A-tisket a-tasket A green and yellow basket", 8);

//test
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));

// some tests I did to take notes
let a = "A-tisket a-tasket A green and yellow basket".length;
console.log(a);
console.log(typeof(a));