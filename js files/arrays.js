"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array1 = [];
for (var i = 0; i < 10; i++) {
    array1[i] = i;
}
console.log(array1);
//Another way to make an array, empty one
var array2 = [];
//array2.push(2)
//here you are saying that array must be empty throughout, meaning array has type 'never'
console.log(array2);
//2d arrays
var array3 = [
    [1, 2, 3],
    [2, 3, 4]
];
console.log(array3);
var array4 = [
    { name: "@", age: 2 },
    { name: "#", age: 2 }
];
console.log(array4);
