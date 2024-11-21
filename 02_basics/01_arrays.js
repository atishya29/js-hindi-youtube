// array

//array is allways written in sq bracket 

const myArr = [0, 1, 2, 3, 4, 5]  // 0, 1, 2, etc are elements and they can be of different types
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);



// Array methods

// myArr.push(6) // add this in the last
// myArr.push(7)
// myArr.pop() // remove last element

// myArr.unshift(9)  // add in the start 
// myArr.shift()  // remove first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// baisc difference betwween slice and splice is 
// in slice original array do not change 
// in splice original array changes