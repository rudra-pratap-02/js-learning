const email = []

if (email) {
    console.log("You have an email")
} else {
    console.log("You don't have an email")
}

// falsy values
// false, 0,-0,BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", "null", "undefined", "NaN", true, [], {}, function(){}, Symbol(), BigInt(1)
// true, 1, -1, " ", [], {}, function(){}, Symbol(), BigInt(1)

// if (email.length===0) {
//     console.log("array is empty");
// }

// to check if an object is empty

// const user = {};

// if (Object.keys(user).length === 0) {
//     console.log("object is empty");
// }


// nullish coalescing operator (??) - null or undefined

let val1;
// val1 = 5 ?? 10; 
// val1 = null ?? 10; 
// val1 = undefined ?? 10; 
val1 = null ?? 0 ?? 10;

console.log(val1); 

// terniary operator

// condition ? expressionIfTrue : expressionIfFalse

const age = 20;
const canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);