"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
addTwoNumbers(1, 2);
function User(name, email, pwd) {
    if (pwd === void 0) { pwd = 2; }
    return name + " " + email + " " + pwd;
}
var UserDetail = User("VBS", "jeijof", 1);
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
console.log(isEven(2));
console.log((isEven(3)));
var isExisting = function (username) {
    if (username.length == 0) {
        return true;
    }
    return false;
};
console.log(isExisting("Vinayak"));
console.log(isExisting(""));
//map with type inference
var kings = ["Chattrapati Shivaji Maharaj", "Chattrapati Sambhaji Maharaj", "Chattrapati Rajaram Maharaj"];
kings.map(function (king) {
    return "King: ".concat(king);
});
var numbers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072];
numbers.map(function (number) {
    return number;
});
//void datatype for a function
function greetingUser(username) {
    console.log("Good morning", username);
}
console.log(greetingUser("Vinayak"));
//never: used to generally throw exepction error or so
function throwError(errMsg) {
    throw new console.error(errMsg);
}
console.log(throwError("Wrong interuption"));
