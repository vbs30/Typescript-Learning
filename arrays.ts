let array1: Array<number> = []

for (let i = 0; i < 10; i++) {
    array1[i] = i
}

console.log(array1)


//Another way to make an array, empty one
let array2: [] = []
//array2.push(2)
//here you are saying that array must be empty throughout, meaning array has type 'never'
console.log(array2);



//2d arrays
let array3: number[][] = [
    [1, 2, 3],
    [2, 3, 4]
]

console.log(array3);


//Array of objects
type User = {
    name: string
    age: number
}

let array4: User[] = [
    { name: "@", age: 2 },
    { name: "#", age: 2 }
]

console.log(array4);


export { }