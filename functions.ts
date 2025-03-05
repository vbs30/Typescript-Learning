function addTwoNumbers(num1: number, num2: number) {
    return num1 + num2
}

addTwoNumbers(1, 2)

function User(name, email, pwd: number = 2) {
    return name + " " + email + " " + pwd
}

let UserDetail = User("VBS", "jeijof", 1);

function isEven(num: number): boolean {
    if (num % 2 == 0) {
        return true
    }
    return false
}

console.log(isEven(2));
console.log((isEven(3)));


let isExisting = (username: string): boolean => {
    if (username.length == 0) {
        return true
    }
    return false
}

console.log(isExisting("Vinayak"));
console.log(isExisting(""));



//map with type inference
const kings = ["Chattrapati Shivaji Maharaj", "Chattrapati Sambhaji Maharaj", "Chattrapati Rajaram Maharaj"]

kings.map((king: string) => {
    return `King: ${king}`
})

const numbers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]

numbers.map((number: number): number => {
    return number
})


//void datatype for a function
function greetingUser(username: string): void {
    console.log(`Good morning`, username);
}
console.log(greetingUser("Vinayak"));


//never: used to generally throw exepction error or so
function throwError(errMsg: string): never {
    throw new console.error(errMsg);
}

console.log(throwError("Wrong interuption"));


export { }