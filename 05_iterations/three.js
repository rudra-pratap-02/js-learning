//  for of

// ["","", ""]
// [{}, {}, {}]

const array = ["a", "b", "c"];

// for (const num of array) {
//     console.log(num);
    
// }

const greeting = "Hello Veere";

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('a', 1);
map.set('a', 1);

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'name': "Veere",
    'name2': "veere2"
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
