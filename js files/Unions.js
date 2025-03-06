"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data1 = true;
var data2 = 2;
var data3 = "true";
var userDetails = {
    name: "VBS",
    id: 11
};
//can be useful when you wanna change the current user to admin
userDetails = { admin: "VBS", adminId: 11 };
//can be useful while writing functions, consider an example where you wanna check whether the passed value for function is string or not and then move on to further logic
function isString(value) {
    return typeof value === "string" ? value : 0;
}
console.log(isString(2));
console.log(isString("sasjkda"));
//for arrays
var arr1 = [1, 2, 3];
var arr2 = ['1', '2', '3'];
var mixMatchedArray = [1, '2', true, '3', false, 33];
var notifications = [
    ["New message received", 200, true], // Text, status code, read flag
    ["Server down", 500, false], // Text, status code, unread
    ["Profile updated successfully", 201, true]
];
for (var _i = 0, notifications_1 = notifications; _i < notifications_1.length; _i++) {
    var notification = notifications_1[_i];
    var message = notification[0], statusCode = notification[1], isRead = notification[2];
    console.log("Message: ".concat(message, ", Status: ").concat(statusCode, ", Read: ").concat(isRead));
}
