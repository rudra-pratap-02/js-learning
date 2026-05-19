// var c = 0
let a = 0

if (true) {
    let a = 1
    const b = 2
// var c = 3
// console.log("Inner:",a )
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "John"
    console.log(username)
    
        function two() {
            const website = "example.com"
            console.log(username);
        }
    
    // console.log(website);
    
    two()
            
}

// one()

if (true) {
    const username = "Rudra"
    if(username === "Rudra") {
        const website = " example.com"
        // console.log(username + website);
    }
}

// ----------interesting---------------

console.log(addOne(5));

function addOne(num){
    return num + 1
}


console.log(addTwo(7)); //error trying to use variable before declaration

const addTwo = function(num) {
    return num + 2
}
