let data1: string | number | boolean = true
let data2: string | number | boolean = 2
let data3: string | number | boolean = "true"


// Can use Union of objects as type

type User = {
    name: string
    id: number
}

type AdminUser = {
    admin: string
    adminId: number
}

let userDetails: User | AdminUser = {
    name: "VBS",
    id: 11
}

//can be useful when you wanna change the current user to admin
userDetails = {admin: "VBS", adminId: 11}


//can be useful while writing functions, consider an example where you wanna check whether the passed value for function is string or not and then move on to further logic

function isString(value: number | string): number | string{
    return typeof value === "string" ? value : 0 
}

console.log(isString(2));
console.log(isString("sasjkda"));


//for arrays

let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['1', '2', '3']

let mixMatchedArray: (number | string | boolean)[] = [1, '2', true, '3', false, 33]

//Use case: A notification array, containing status code, message and flag

type Notification = (string | number | boolean)[];

let notifications: Notification[] = [
  ["New message received", 200, true],      // Text, status code, read flag
  ["Server down", 500, false],             // Text, status code, unread
  ["Profile updated successfully", 201, true]
];

for (let notification of notifications) {
  const [message, statusCode, isRead] = notification;
  console.log(`Message: ${message}, Status: ${statusCode}, Read: ${isRead}`);
}

export {}
