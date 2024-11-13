let score = "33abc" // ye string number m convert hojayegi lekin jab uski value check kroge to nan aayega 

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// konsa datatype number m kese convert hoga-
// "33" => 33
// "33abc" => NaN // iski full form a not an number but type number hi h
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// conversion to boolean
// 1 => true
// 0 => false
// "anytext" => true
// "" => false
// null/undefined => false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

