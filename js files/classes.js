"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdminUser = /** @class */ (function () {
    function AdminUser() {
        this.city = "New York";
        this.name = "John Doe";
        this.email = "abc.com";
    }
    return AdminUser;
}());
var adminUser = new AdminUser();
console.log(adminUser);
var User = /** @class */ (function () {
    function User(name, email) {
        this.city = "New York";
        this.age = 1;
        this.name = name;
        this.email = email;
    }
    return User;
}());
var user1 = new User("vbs", "vvv@aa.com");
console.log(user1); //public fields can be accessed outside the class
// console.log(user1.number)  //undefined as private age can only be accessed inside the class, not outside
/* Short cut way of writing classes */
var shortcutUser = /** @class */ (function () {
    function shortcutUser(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return shortcutUser;
}());
var shortcutUser1 = new shortcutUser("vbs", 22);
console.log(shortcutUser1.name); //vbs as name is public and can be accessed outside the class
