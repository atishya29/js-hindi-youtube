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
// console.log(typeof stringNumber);
// console.log(stringNumber);


// ******************** Operations ************************

let value = 3
let negValue = -value
// console.log(negValue);

//baisc arithmatic operations-
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " atishya"

let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // to understand this visit "https://tc39.es/ecma262/2023/multipage/ 
//  abstract-operations.html#sec-type-conversion"  abhi sirf itna yaad rakh agr string first hai to 
// sabi ko string m treat kra jaayega vrna starting ka opperation hojyega baad m string ki tarah treat 
// hoga 
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3); //use () to make it specific which operation should take place first
// these all are not good practices code readiability is negative

// console.log(+true);
// console.log(+"");
// ye dono tricky conversions h we should avoid these but we have to study Operator precedence

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter); // yaha dono m koi chng ni aaya but chnges aate hai 
// read about prefix and postfix opperator at mdn





