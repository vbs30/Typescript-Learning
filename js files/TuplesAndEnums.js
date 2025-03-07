//TUPLES
var user;
user = ["Vinayak", 25, true]; // Valid
// user = [25, "Vinayak", true]; // Invalid - wrong order and types
var rgb = [255, 222, 232];
var newUser = ["VV", 21];
//newUser.push(true) Invalid 
function getUserInfo() {
    var name = "Vinayak";
    var age = 25;
    return [name, age];
}
var userInfo = getUserInfo();
console.log(userInfo); // ["Vinayak", 25]
//ENUMS
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["Pending"] = 0] = "Pending";
    orderStatus[orderStatus["InProgress"] = 1] = "InProgress";
    orderStatus[orderStatus["Completed"] = 2] = "Completed"; // 2
})(orderStatus || (orderStatus = {}));
console.log(orderStatus.Pending); // 0
console.log(orderStatus.Completed); // 2
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up); // "UP"
var responseStatus;
(function (responseStatus) {
    responseStatus[responseStatus["Success"] = 1] = "Success";
    responseStatus["Error"] = "ERROR";
})(responseStatus || (responseStatus = {}));
console.log(responseStatus.Success); // 1
console.log(responseStatus.Error); // "ERROR"
