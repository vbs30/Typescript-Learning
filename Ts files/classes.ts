class AdminUser{

    name: string
    email: string
    city: string = "New York"

    constructor(){
        this.name = "John Doe"
        this.email = "abc.com"
    }
}

const adminUser = new AdminUser()
console.log(adminUser)



class User{

    name: string
    email: string
    city: string = "New York"
    private age: number = 1

    constructor(name: string, email: string){
        this.name = name
        this.email = email
    }
}

const user1 = new User("vbs", "vvv@aa.com")
console.log(user1) //public fields can be accessed outside the class
// console.log(user1.number)  //undefined as private age can only be accessed inside the class, not outside

/* Short cut way of writing classes */

class shortcutUser{
    constructor(public name: string, private age: number){
        this.name = name
        this.age = age
    }
}

const shortcutUser1 = new shortcutUser("vbs", 22)
console.log(shortcutUser1.name) //vbs as name is public and can be accessed outside the class
//console.log(shortcutUser1.age) //undefined as private age can only be accessed inside the class, not outside


export { }