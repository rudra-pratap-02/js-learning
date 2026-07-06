// const coding = ['JavaScript', 'Python', 'Ruby', 'Go', 'C++']

// const value =coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(value);
// forEach does not return anything


const myNums = [1, 2, 3, 4, 5]

const i = myNums.filter( (item) => { 
    return item > 3})
// console.log(i);

newNums = []

myNums.forEach( (item) => {
    if (item<5){
        newNums.push(item)
    }
})
console.log(newNums);