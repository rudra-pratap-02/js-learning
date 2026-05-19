// Immediately Invoked Function Expression (IIFE)

(function coffee() {
    console.log(`YAY`);
})();

// coffee()
    
( (num) => {
    console.log(`YAY ${num} `);
} )(5)