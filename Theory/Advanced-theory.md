# Interface

In TypeScript, an interface is a way to define a contract for the shape of an object. It describes the structure that an object should adhere to, including its properties and methods, without providing implementation details. This feature helps catch errors at compile time by ensuring that objects meet the required structure.

Syntax: 

```typescript
interface User {
    email: string,
    userId: number,
    age?: number,
    readonly cardNumber: number,
    startTrial(): string,
    getCoupon(name: string): number
}
```

## Reopening of interfaces: 
Basically it means that you can re write or simply add more variables to the interface

## Inheritence advantage for interface: 
Using extends keyword, you can achieve inheritence for instances

## Difference between Interface and Type aliases

1. Interface: Can be extended (merged) using extends or declared multiple times to add properties.
    Type Alias: Cannot be reopened or extended the same way, but can use intersections (&).

2. Interface: Primarily used to describe object shapes and class contracts.
    Type Alias: Can represent not only objects but also unions, intersections, tuples, and primitives.

3. Interface: Slightly better performance in some scenarios due to better optimization.
    Type Alias: Might be slower with very complex types.

3. Use interface when you expect the shape to be extended or merged.
    Use type alias when you need to define complex types (unions, intersections, primitives).


