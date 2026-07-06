const a = [1,2,3]

// const a1 = a.reduce(function (acc, currval) {   
    
//     console.log(`${acc} = acc & ${currval} = current value`);
        
//     return acc + currval

// },0)

// const a1 = a.reduce((acc,curr) => acc+curr, 0)

// console.log(a1);


const shoppingCart = [
    {
    itemName : "jsCourse",
    price: 299
    },
    {   
    itemName : "python Course",
    price: 999
    },
    {
    itemName : "CPP Course",
    price: 599
    },
]

const totalVal = shoppingCart.reduce((acc, curr) => acc+curr.price,0 )

console.log(totalVal);
