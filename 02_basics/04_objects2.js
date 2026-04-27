// const gptuser = new Object(); // singleton
const gptuser = {}; // object literal

gptuser.name = 'ChatGPT';
gptuser.present = false ;
gptuser.id = 12345; 

// console.log(gptuser);

const googleUser = {
    email : "google@example.com",
    fullname : {
        userFullName: {
        firstName : "Google",
        lastName : "User"
    },isAdmin : false,
}
    
    }
// console.log(googleUser.fullname.userFullName.firstName);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "D", 5: "E", 3: "F" };

// const mergedObj = Object.assign({}, obj1, obj2);

const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);

const user = [
{
    email : "i@example.com",
    age: 22,

},
{
    email : "i@example.com",
    age: 22,
    
},
{
    email : "i@example.com",
    age: 22,
    
},
{
    email : "i@example.com",
    age: 22,
    
}

]

user[1].email
// console.log(gptuser);


// console.log(Object.keys(gptuser));//returns an array of keys of the object 
// console.log(Object.values(gptuser));//returns an array of values of the object 
// console.log(Object.entries(gptuser));//returns an array of key-value pairs of the object 

// console.log(gptuser.hasOwnProperty('i'));

const concertTix = {
    concertName: "Coldplay",
    concertDate: "2023-09-15",
    venue: "Madison Square Garden",
    price: 150,
    isAvailable: true,
}

const {concertName:name} = concertTix;
console.log(name);
