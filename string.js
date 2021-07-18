let singleQuotes = ' How are you ';
let doubleQuotes = "I am fine";
console.log(singleQuotes);
console.log(doubleQuotes);
singleQuotes.trim();

let char = singleQuotes.charAt(5);
let ascii = singleQuotes.charCodeAt(4);
let substr = singleQuotes.substring(2, 8);
console.log(char);
console.log(ascii);
console.log(substr);
let splitarr1 = singleQuotes.split("o");
let splitarr2 = singleQuotes.split("");
console.log(splitarr1);
console.log(splitarr2);
let str = splitarr1.join("#");
console.log(str);