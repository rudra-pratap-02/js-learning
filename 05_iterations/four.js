const AnotherObject = {
    js : 'JavaScript',
    css : 'Cascading Style Sheets',
    html : 'HyperText Markup Language',
    cpp : 'C++',
    rb : 'Ruby'
    
};

for (const key in AnotherObject) {
    // console.log(`The key is ${key} and the value is ${AnotherObject[key]}`);
}

const programmingLanguages = ['JavaScript', 'Python', 'C++', 'Ruby', 'Go'];

for (const key in programmingLanguages) {
    // console.log(programmingLanguages[key]);
}

// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// for (const key in map) {
//     console.log(map[key]);     
// }

// kyunki maps iterable nahi hote hain, isliye hum for...in loop ka use nahi kar sakte hain maps ke liye. 