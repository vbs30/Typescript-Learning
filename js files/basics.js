"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Vinayak");
var user = { name: "Vinayak" };
console.log(user.name);
var greetings = "Vinayak kasa ahes";
console.log(greetings);
var num1 = 22;
var num2 = 33;
console.log(num1, num2);
var num3 = 44; //type inference
num3.toPrecision();
var isExisting = false;
console.log(isExisting);
var words;
// words is getting type as any
words = true;
words = "this is something";
console.log(words);
