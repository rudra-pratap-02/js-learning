const user ={
    loginName : "Rudra",
    loginCount : 1,
    signedIn : true ,

    getUserDetails : function(){
        console.log(`got user details`);
        console.log(`${this.loginName}`);
        
        
    }
}

// console.log(user.loginName);
// console.log(user.getUserDetails());

function info(name,age){
    this.name = name;
    this.age = age;

    this.greeting = function(){
        console.log(`hi! ${name}`);
        
    }

    
}

const user1 = new info("ru",1);
console.log(user1);
console.log(user1.greeting());

