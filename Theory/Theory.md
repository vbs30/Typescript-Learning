# 🚀 TypeScript: A Comprehensive Guide

Typescript is considered to be a superscript of javascript
This statement can be true but it does not add more new features than javascript

Typescript when compiled, it actually converts itself to javascript and then is able to show the results, 
so it does not make any new features available to us that js doesn't have

It just allows you to write js in much precise manner so that your code do not come accross any error at runtime
Like you can write js code but if any error, it might run or compile.

**TYPESCRIPT, is honestly, a Development Tool**

Eg. Consider in js we have often seen operations like this: 
```javascript
2 + '2' = 22
true + 1 = 2
undefined + 2 = NaN
nul + 2 = 2
```

In js, these all things get compiled and we get those results, but is it true, is it logical to add a string with a number or 
adding boolean value with number value to get some result.

To cope up this or to handle this before compile time, Typescript comes handy
Typescript is a **TYPE SAFETY** composition where you are not allowed to do such operations, meaning you just can't add any null value with number value here,
it will show an error and will not compile till you solve it.

Simply saying, Typescript provides **STATIC CHECKING**. 
Considering above operations, typescript will just tell you that this should not happen or you cannot do this while writing the code itself,
Isn't this good thing, you can handle and modify your errors while writing the code itself, no need to wait for compiling and then checking what error actually is

In typescript, you write more code than what you write in js, but it is worth it

## 🔄 Development process:
1. You write your code in ts or tsx (while writing react)
2. This code is transpiled (converted) in js while compilation.

To run a ts file, you just need to type **tsc filename.ts**
This compiles and converts ts file in js

## 📝 Basic Syntax to define a variable
```typescript
let variable_name: type = value
```
type is data types which you need to specify, not necessarily

## 📊 Data Types in Typescript:

### 1. **number** 🔢

In typescript, there is nothing like int or float to be defined seperately, everything comes under 'number'

Syntax to define: 
```typescript
let num1: number = 22
let num2: number = 33
```

### 2. **string** 📝

Syntax to define:
```typescript
let greetings: string = "Hello"
```

### 3. **boolean** ✅

```typescript
let isLoggedIn: boolean = false
```

### 4. **any** ⚠️

When any variable is not assigned a type, the bydefault type it takes is any
Using any tells that please remove type checking as my variable will hold any value like string number or anything

### 5. **void** 🚫

Void represents the absence of any value. It's typically used as the return type of functions that don't return anything.

### 6. **null** 🈳

It represents an intentional absence of any object value.
A variable is explicitly set to null when we want to indicate that it has no value.

### 7. **undefined** 🔍

It means a variable has been declared but hasn't been assigned any value yet.
It's the default value of uninitialized variables in TypeScript and JavaScript.

### 8. **never** ❌

to be used when function NEVER returns anything, so you can use it while throwing any error as it will handle the function and throw any error 
Never represents value which is never observed, in return type, this means that function throws an exception or error or terminates the program

### 9. **object** 📦

Objects contain key value pairs, more useful when you want to send data to db or to browser storage, key value pairs come in handy, indirectly using objects
```typescript
function createDetails():{name: string}{
    return {name: "Vinayak"}
}
```

### 10. **array** 📚

Array can be thought of as group or bunch of elements in a single data structure.

Syntax: 
```typescript
const arrayElements : type [] = []
```

Eg. const details: string [] = []
then you can use methods like push, pull, loop through it and all

Another way to declare array: 
```typescript
const array : Array<number> = []
```

For two dimensional array:
```typescript
const 2dArray: number[][] = [[], []]
```

### 11. **tuple** 📋

fixed-size, ordered collection of elements where each element can have a different type. It's like an array, but with strict types and a fixed number of items.

Use case for using tuple may be :
1. returning multiple values from a string
2. key value pairs in an array, fixed length, need not to use objects as objects can have more keys. Simply saying you can restrict key value pairs like [string, string] and save only string values
3. Can be used to send a status notification with message 

```typescript
function apiResponse(success: boolean): [number, string] {
    return success ? [200, "Success"] : [500, "Internal Server Error"];
}
const response = apiResponse(true);
console.log(response); // [200, "Success"]
```

### 12. **enum** 🔄

special type used to define a set of named constants. Enums make it easier to document intent and create a set of distinct values that can represent states, categories, or options.

Important points: 
WHEN YOU COMPILE THESE ENUMS IN JS, IT GETS CONVERTED INTO IIFE (CHECK THIS AFTER TS FILE COMPILATION)
Values start from 0 by default and increment by 1.
You can manually assign numbers.

```typescript
enum StatusCode {
    OK = 200,
    BadRequest = 400,
    NotFound = 404
}
console.log(StatusCode.OK);       // 200
```

Values are assigned as strings.
Combine numeric and string values.


For real life example, consider an ecommerce app where role is to be defined and based on role, further actions or consider some routes are to be displayed.
Eg. 
For role user, you may show products, carts, categories, payments
For role admin, you may show dashboards, products adding deleting, changing status for orders, etc

Now consider that there are more than 5-6 roles, and when in coding you will have to type hardcoding in switch cases that hey if role is admin, then show this and so on.
Here, maintaining these many roles directly is a messy thing as if new coders wanna work on it, they will have to check for each role what is who and so on, they will not have a simple document which will make them understand.

So in such cases enums come in handy, What enum does is it maintains a seperate document assigning values from 0 to each roles
So when coding, you can directly use it as a documentation or a category stuff.

```typescript
enum Role {
    Admin,
    User,
    Guest
}

enum OrderStatus {
    Placed,
    Shipped,
    Delivered,
    Cancelled
}
```

### 13. **union** 🔀

Union type is something which you can use when you don't know which type of data will be stored, like number or string.
Yes we have 'any' but as we saw previously, any is quite a bad practice to work with.
Instead we use 'Union', now Union gives us power to combine two or more values of different data type, Isn't it better than any

We use '|' sign to combine two or more datatypes to a single variable, function or array, objects, expect

eg. 
```typescript
let value : string | number | boolean = value
```

Now, using '|' we can combine n number of datatypes, but it will be a good practice to string and reduce the types to what actually can be stored. Making it strict meaning reducing the datatypes. This will allow more good readability and no confusions

Can also define objects with two differnt type objects
```typescript
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
```

Can also be used in functions where you can either pass and return a data as string or number or boolean
```typescript
function function_name(id: number | string): number | string {}
```

At array side, we can also make an array either take string or number, instead of using type 'any', this will be a great operations
Why to use in array, considering an array can be a bunch of elements, elements were strict for number or string or boolean or any other type, now using '|' union type, storing becomes easy.

Imagine you're building a user notification system for a web app. Notifications can have different types of content — like text messages, status codes, and read/unread flags.
This way, union types let you structure mixed-type data in a way that makes sense for your app — no need for separate arrays or complex objects when a simple union array works perfectly.

## 🧠 Type inference:

What happens is when we write 
```typescript
let variable_name: number = 222
```
we are giving an obvious value 222 with assigning the type as number which is certainly not a good practice
Not saying that you should not give type but cases where you are immediatlely assigning the same value which type you have defined, 
it's not a good practive
WHY?
because typescript is smart enough to know that this type is string
lets say you types let num1 = 11, now typescript automatically gets to know that this is type: number, 
so in such cases, no need to give a type when you are giving the value immediately

### Cases where Type Inference is needful
Type inference is important in a case which is type: any
suppose you created a variable which you don't know what value will it hold, either string, number or boolean
what you do is without mentioning a type, you just declare the variable and in this case, the variable is assigned as 
*type: any*

Using any tells that please remove type checking as my variable will hold any value like string number or anything
What makes it challenging is, when you have given string value to this variable and suppose any other coder uses this variable and gives a boolean value
Both are logically doing correct job at their side but if that variable gets a string value, so you won't want anyone to make it boolean or number 

In such cases Type inference is important as you mention the type for the variable so that no one can change or modify the value with other types
Another important use case of type inference is whole functions

## 🔧 Functions: 

Syntax: 

```typescript
function function_name (value1: type, value2: type...){
    return ___
}
```

Syntax is almost same as javascript
There are some things to look for, firstly argumenets passed in function should have a type specified (type inference to be used)
Why? Because when calling the function and passing values, if bydefault type 'any' is kept, there can be an issue or mismatch
Suppose you want the value as a string, but another user passes integer value, Breaks the logic right
So here we need type inference as to specify that argumenet to be of a particular type

You can also make type safety by declaring a function with return type

```typescript
function function_name (value1: type, value2: type...): number{
    return ___
}
```

How this helps, consider a example where you are passing numbers as argument and returning boolean or string value, 
These functions do exist and have a meaning too like returning true or false as boolean or string for the passed number to be prime.
But what about the cases where you pass a number and expect number to return and instead a string or boolean is returned, this makes the code messy and error handling becomes to much hectir
To solve this problem, we use type safety so to make function return what we want and not random datatype. 

### Map functions
Functions like map where you compute and return values from array or objects
You can use type inference and not using it also is okay for the map function to return the datatype. 


### Void datatype for a function: 
to be used when your function is not returning anything
Normally not declaring datatype as void also works but it's a bad practice, so make it void use type inferencing even if function not returning anything
This practice makes the function strict to not return anything.

```typescript
function greetingUser(username: string): void {
    console.log(`Good morning`, username);
}
console.log(greetingUser("Vinayak"));
```

## 🔗 Type aliases

Type aliases in TypeScript are used to create a custom name for a type, making your code cleaner, more readable, and easier to maintain.
Provides a single, clean name for complex types like objects, unions, intersections, and function signatures.
Allows the same type definition to be reused across multiple variables, functions, and components.

You can combine two or more objects directly to form a new object, can be done easily with mismatch types
cardDetails will have all the objects, this technique can be handy when you want to combine multiple objects with 100s of variables.

```typescript
type cardNumber = {
    number: number
}

type cardExpiry = {
    date: Date
}

type cardDetails = cardNumber & cardExpiry & {
    nameOfBank: string
}
```