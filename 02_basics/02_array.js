const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //  isme dc heros ko ek element bna k add kia jayega existinng arry m hi 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat ek naya  array bnadeta h dono array add krke
// console.log(allHeros);


// spread operator- ye array ko spread krdeta h aur kyuki array  spread hogye h to vo  array ni rahe unka ek ek element individual aayega ye bhi ek tarah se concat ki tarah hi result deta h
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array);
// flat- Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. isme depth infinity krdete h to vo apne aap dekh leta h kaha tk concat krna h


console.log(Array.isArray("Hitesh")) // isme puch rahe h ki kya vo array h 
console.log(Array.from("Hitesh")) // isme convert kr rahe h use array mai
console.log(Array.from({name: "hitesh"})) // interesting
// isme isne ek empty array dia because ye directly ise convert nahi kr paaraha h to isme bolna pdega ki keys ka array bnana h ya values ka

//esi situation bhi aayegi ki humare pas multiple variable h unhe array m convert krna h-
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));