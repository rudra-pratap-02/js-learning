const myNums = [1, 2, 3, 4, 5]

// const i = myNums.map( (num) => { return num *5 })

const i = myNums
                .map((num) => num*100)
                .map((num) => num+7)
                .filter((num) => num>300)


console.log(i);