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

console.log(userLoginMessage("Rudra"));
console.log(userLoginMessage());
