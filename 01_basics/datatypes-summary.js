//  Primitive (call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// also remember that js is dynamicaly typed language(we dont have to define type in js)


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n //bigInt



// Reference (Non primitive) (call by reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //array
let myObj = {
    name: "hitesh",
    age: 22,
} //object

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3