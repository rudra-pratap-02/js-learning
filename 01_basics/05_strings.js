const name = "rud"
const repoCount = 101

// console.log(`Name is ${name.toUpperCase()} and repo count is ${repoCount}`);

const gameId = new String('d-r-a-g-o')

// console.log(gameId[4]);
// console.log(gameId.__proto__);

// console.log(gameId.length);
// console.log(gameId.toUpperCase());


// console.log(gameId.charAt(6));
// console.log(gameId.indexOf('r'));

const newString = gameId.substring(0, 2)
console.log(newString);

const newString1 = gameId.substring(-4, 3)
console.log(newString1);


const newString2 = "      rudra         "
console.log(newString2);
console.log(newString2.trim());


const url = "https://www.youtube.com/channel/crazyMovie%404"
console.log(url.replace("%404", "forAll"));

console.log(url.includes('Marvel'));

console.log(gameId.split('-'));