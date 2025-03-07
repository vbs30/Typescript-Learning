//new method to create objects with type aliases

type User = {
    username: string;
    email: string;
    password: string;
    age: number;
}

function UserDetails( user: User ): User {
    return {username: "", email: "", password: "", age:1}
}

UserDetails({username: "Vinayak", email: "vbs@gm.cc", password: "aaaa", age: 11})



//readonly variables in objects

type Product = {
    readonly _id: number
    name: string
    description: string
    quantity: number
    price: number
}

let allProducts : Product = {
    _id: 178,
    name: "Butter",
    description: "Tasty butter from amul",
    quantity: 27,
    price: 100
}

allProducts.name = "Aaaa"


//combining two objects with types to a third object
type cardNumber = {
    number: number
}

type cardExpiry = {
    date: Date
}

type cardDetails = cardNumber & cardExpiry & {
    nameOfBank: string
}

export {}