console.log("Vinayak");

let user = { name: "Vinayak" }
console.log(user.name);

let greetings: string = "Vinayak kasa ahes"
console.log(greetings)

let num1: number = 22
let num2: number = 33
console.log(num1, num2)

let num3 = 44   //type inference
num3.toPrecision()

let isExisting: boolean = false
console.log(isExisting);

let words;
// words is getting type as any
words = true
words = "this is something"
console.log(words);



export {}