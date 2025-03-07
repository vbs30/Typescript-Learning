interface User {
    email: string,
    userId: number,
    age?: number,    //optional
    readonly cardNumber?: number,
    startTrial(): string,
    // startTrial: () => string
    getCoupon(name: string): number
}


//reponing interface
interface User {
    address: string
}

let userDetails: User = {
    email: "vmvmvm",
    userId: 1,
    startTrial() {
        return "Trial started"
    },
    getCoupon(coupon: "sducsnjkd") {
        return 10
    },

    address: "abcduj"
}



//Inheritence using interfaces

// Base interface
interface Animal {
    name: string;
    makeSound(): void;
}

// Derived interface inheriting from Animal
interface Dog extends Animal {
    breed: string;
}

// Implementing the derived interface
class Labrador implements Dog {
    name: string;
    breed: string;

    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }

    makeSound(): void {
        console.log(`${this.name} says: Woof!`);
    }
}

const dog = new Labrador("Buddy", "Labrador Retriever");
dog.makeSound(); // Output: Buddy says: Woof!

export { }
