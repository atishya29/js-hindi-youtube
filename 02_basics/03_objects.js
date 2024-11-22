// object ko declare krne k do tarike hote h literals ki tarah ya constructor ki tarah
// singleton mtlb ye apne tarah ka ek hi object h jab bhi constructor se bnate h tab ye bnata h literals se ni bnta
// Object.create(ise hi bola jata h constructor method k through object bnana)


// object literals( way of creating an object dono se kuch difference ni aata bs singleton ka hota h)

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",  // ise hum dot se access ni krskte to sq notation hi use krna pdega
    [mySym]: "mykey1",  // symbol ki tarah use krna h to isi syntax ko use krna pdega symbol ko object m 
    //                     add krne k lie
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());