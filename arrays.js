let arr = [1, 3, 5, 7, 9];
console.log(arr);
console.log(arr.length);
let i = 0;
while (i < arr.length) {
    console.log(i, ":", arr[i]);
    i++;
}

// //add last-push
// // addfirst - unshift
// arr.push("last value");
// arr.unshift("first value ");

// console.log(arr);
// arr.pop(arr);
// arr.shift(arr);
// console.log(arr);
let part = arr.slice(2, 4);
console.log(part);

let deletepart = arr.splice(2, 3);

console.log(arr);