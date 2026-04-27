//  singleton
// object.create

// object literals
const mySymbol = Symbol('mySymbol');

const JsUser = {
    name: 'Rudra',
    "full name": 'RPSingh',
    age: 22,
    [mySymbol]: 'myValue',
    isDeveloper: true,
    email : 'rudra@example.com',
    location: 'India',
    
}

// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = 'notrudra@mail.com';
// Object.freeze(JsUser.email);
JsUser.email = 'notrudra@google.com';
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello veere!");
}
JsUser.greeting2 = function() {
    console.log(`Hello ${this.name}!`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
