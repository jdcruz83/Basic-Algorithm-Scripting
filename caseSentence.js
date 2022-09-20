function titleCase(str) {

    let words = str.split(' ')

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);    
    }

    return words.join(" ");
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));