// object ko constructors ki help se kese declare kr skte h -
// const tinderUser = new Object() // singleton object 

const tinderUser = {}  // non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // isme obj1 m obj2 assign  hua h 
// const obj3 = Object.assign({}, obj1, obj2, obj4) // isme target source use hotaa h {} ye target h ar sare obj source to target k ander source ko assign kia jata h 

const obj3 = {...obj1, ...obj2}  // isme humne spread operator ko use kia h which is easiest way
// console.log(obj3);


// isme array k ander multiple objects lie h 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // ise sari keys ek array m bnke aajati h
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // ise array k anderarray milta h i.e har ek key value pair ko ek array bna dia jata h


// to check if this property available or not-
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // kahi baar property ko use krne se phele is method se dekhie vo property available bhi h ya ni 


// *************destructuring*******************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
