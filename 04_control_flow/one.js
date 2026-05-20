// if
const isUserLoggedIn = false;

if (isUserLoggedIn) {
  console.log("Welcome");
}
else {
  console.log("Please log in");
}

// if (2 !=="2"){
//     console.log(`2 is equal to "2"`);
// }

// === is the strict equality operator, it checks for both value and type

// const score = 85;

// if (score <= 90) {
//     let message = "keep working hard";
//     console.log(` note: ${message}`);
// }

// console.log(` note: ${message}`);

// const balance = 1000;

// if (balance > 500) console.log("ameer"),
// console.log("rich"),console.log("wealthy");

const userOnline = true;
const card = true;
const loggedFromGoogle = false;
const loggedFromFacebook = true;

if(userOnline && card){
    console.log(`allowed to shop`);
    
}

if (loggedFromGoogle || loggedFromFacebook){
    console.log(`logged in successfully`);
}
