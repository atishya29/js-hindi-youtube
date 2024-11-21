const name = "atishya"
const repoCount = 50

// console.log(name + repoCount + " Value");
// concatenate k karne ka ye syntax acha ni hai i.e, bohot outdated hai


// in present time use, backticks `` benifits of using it is
// it supports String Interpolation i.e you create placeholder and can directly inject variables in them
// Syntax of String Interpolation
// you can insert variables or expressions using ${expression}, where:
// ${} is the placeholder for the expression.
// expression is any valid JavaScript expression.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 

// string declare krne ka ek aur tareeka bhi h usme hum 'new' keyword use krte h jise hum objects use 
// krte h js k   
 const gameName = new String('atishyaaj')

 // console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
