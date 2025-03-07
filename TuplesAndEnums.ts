//TUPLES

let user: [string, number, boolean];
user = ["Vinayak", 25, true]; // Valid
// user = [25, "Vinayak", true]; // Invalid - wrong order and types

let rgb: [number, number, number] = [255, 222, 232]

type User = [string, number]
const newUser: User = ["VV", 21]
//newUser.push(true) Invalid 

function getUserInfo(): [string, number] {
    let name = "Vinayak";
    let age = 25;
    return [name, age];
}
const userInfo = getUserInfo();
console.log(userInfo); // ["Vinayak", 25]







//ENUMS

enum orderStatus {
    Pending,        // 0
    InProgress,     // 1
    Completed       // 2
}
console.log(orderStatus.Pending);      // 0
console.log(orderStatus.Completed);    // 2



enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
console.log(Direction.Up);        // "UP"



enum responseStatus {
    Success = 1,
    Error = "ERROR"
}
console.log(responseStatus.Success);    // 1
console.log(responseStatus.Error);      // "ERROR"