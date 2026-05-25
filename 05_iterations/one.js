// for loop

for (let a = 0; a < 5; a++) {
    const index = a;
    if (index === 2) {
        // console.log('Found 2!');
    }
    // console.log(a);
}

for (let a = 0; a < 5; a++) {
    // console.log(`Outer loop: ${a}`);
    for (let b = 0; b < 5; b++) {
    // console.log(`Inner loop: ${b} and inner loop ${a}`);
    // console.log(a + `*` + b + `=` + a * b);
    }
}

let myArray = ["batman", "superman", "wonder woman", "flash", "aquaman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let a = 1; a <= 20; a++) {
//     if(a==5){
//         console.log('Found 5!');
//         break;
//     }
//     console.log(a);
// }


for (let a = 1; a <= 20; a++) {
    if(a==5){
        console.log('Found 5!');
        continue
    }
    console.log(a);
}