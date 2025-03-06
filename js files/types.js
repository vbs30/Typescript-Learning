"use strict";
//new method to create objects with type aliases
Object.defineProperty(exports, "__esModule", { value: true });
function UserDetails(user) {
    return { username: "", email: "", password: "", age: 1 };
}
UserDetails({ username: "Vinayak", email: "vbs@gm.cc", password: "aaaa", age: 11 });
var allProducts = {
    _id: 178,
    name: "Butter",
    description: "Tasty butter from amul",
    quantity: 27,
    price: 100
};
allProducts.name = "Aaaa";
