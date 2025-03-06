const user = {
    name: "Vinayak",
    age: 24
}

function createUser({ name: string, age: number, isAuthenticated: boolean }) {


}

createUser({ name: "Vinayak", age: 24, isAuthenticated: true })

function createDetails(): { name: string } {
    return { name: "Vinayak" }
}

export { }