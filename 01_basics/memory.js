// Stack memory and Heap memory


// Stack (Primitive)
// iske ander ek kuch bhi lenge uski copy milegi i.e agr kuch chng krenge to copy m hoyega 

let myYoutubename = "atishyajaindotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


// Heap (Non Primitive)
// iske ander reference milega i.e kuch change krenge to original m change hoyega

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "atishya@google.com"

console.log(userOne.email);
console.log(userTwo.email);




