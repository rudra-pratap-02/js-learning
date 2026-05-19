// array

const arr = [1, 2, 3, 4, 5];
const rappers = ["Encore","Calm", "Krsna", "Raftaar"];

const arr1 = new Array(0, 2, 4, 6, 8);
// console.log(arr[0]);

// arr.push(6); // add element at the end of the array
// arr.push(7); // add element at the end of the array
// arr.pop();

// arr.unshift(0); // add element at the beginning of the array
// arr.shift(); // remove element from the beginning of the array

//  console.log(arr.includes(7));
//  console.log(arr.indexOf(13));
 
const newArr = arr.join();
console.log(arr);
console.log(newArr);


// -----slice,splice------

console.log("R",arr);

const slicedArr = arr.slice(1, 4); // does not modify the original array

console.log("Sliced", slicedArr);
console.log("R",arr);

const splicedArr = arr.splice(1, 3); // modifies the original array

console.log("Spliced", splicedArr);
console.log("R",arr);