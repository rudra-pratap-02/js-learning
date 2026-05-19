const user = {
    username: "Rudra",
    token: "abc123",
    welcomeMessage: function() {
        console.log(`welcome, ${this.username}`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "notRudra"
// user.welcomeMessage()

// console.log(this);

const coffee = () => {
    let name = "espresso"
    console.log(this);
}
    
// coffee()

// -----------arrow functions do not have their own 'this' keyword, they inherit it from the parent scope. In the above example, 'this' refers to the global object (window in browsers) because the arrow function is defined in the global scope. If we were to define the arrow function inside an object method, it would inherit 'this' from that method's scope. For example:

// const music = (song1, song2) => {
//     return song1 + " " + song2
// }

// const music = (song1, song2) => song1 + " " + song2

// const music = (song1, song2) => ( song1 + " " + song2 )

const music = (song1, song2) => ({user: "Rudra"}) //object ko return karne ke liye parentheses ka use karna hi padega

console.log(music("MMM", "natkhat"));

const array1 = [2, 3, 2, 5, 7]

array1.forEach((num) => {})