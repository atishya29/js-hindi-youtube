// function ka basic mtlb h jo bhi humne code likha h 10 20 line ka use ek package m band krdena us package ki khai bhi copy lejaskte h


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// jab hum function ki defination bnate hai uske ander () jo bhi input lete h use parameters kehte h
// jab hum function ko caall krate h uske ander jo bhi value pass krte h use arguments kehte h

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5) // js m isko ek variable k ander bhi store krskta hu lekin isme store ni hori because console likkhne ka mtlb ye ni h function vo value return bhi kra iska mtlb sirf print krana h 
// ab is function ko dusre tarike se krte h -


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    // console.log("atishya"); // ye kbhi bhi execute ni hoga because by default function ki defination ka rule hotaa hai return k baad ka code execute nahi hota
    
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
// to ab ye smjh aagaya jab bhi hum return krte h tab use kisi variable m store krskte h 


// js m ! ye true ko false and faalse ko true m convert kr deta h 
// !username and username === undefined same hi kam kregi if statement m because undefined ko by default false man lia jaata h use ! se true m convert krke scope m enter kr jayenge
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//isme if vali situation avoid krne k lie kuch default value bhi deskte h like sam is given ise agr koi value ni denge hum to sam just logged in aayega vrna vo sam pr overwrite krdega

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// shoping cart k ander hume pta ni hota h kitne number of items add honge to hume pta hi ni hota kitne arguments aane vale to us hisab se hi parameter lene hote h to hum rest opperator use krte hr
// rest aur spread dono opperator ... ese hi use hote h bs inke use case k base p btaya jata h konsa rest h konsa spread
// rest ka mtlb h jinta bhi item muje milra h vo bikkhra hua h use ek bundle m pack krke muje dedo  
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));