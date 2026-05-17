function printName() {
console.log("R");
console.log("u");
console.log("d");
console.log("r");
console.log("a");
}

// printName();

// function add(n1, n2) {
//     console.log(n1 + n2);
// }

function add(n1, n2) {
    // let result = n1 + n2
    // return result 
    return n1 + n2 // this will return the sum of n1 and n2 and exit the function immediately
    console.log("me");// this will not be printed as return statement is above it   
    
}
const result = add(10, 20);
// console.log(result);

function userLoginMessage(username) {
    if (!username) {
        console.log("Please provide a username to login");
         return; // this will exit the function immediately if username is not provided
    }
    return `Hey there ${username}, welcome back! `
}

// console.log(userLoginMessage("Rudra"));
// console.log(userLoginMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(20,10,30)); 

const user = {
    name: "Rudra",
    prices: 1000,
}

function handleObject(anyObject){
    console.log(`name is ${anyObject.name} and price is ${anyObject.price }`);
}

// handleObject(user);
handleObject({
    name: "notRudra",
    price: 101,
})

const myNewArray = [100,3,400,5]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,3,4]));