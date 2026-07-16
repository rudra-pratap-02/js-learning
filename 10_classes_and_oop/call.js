function setUsername(username) {
    // complex DB calls
    this.username = username;
}

function CreateUser(username,pass,email){
        setUsername.call(this, username)
    this.email = email;
    this.pass = pass ;

}

const Red = new CreateUser("red", "redisbest" ," red@color.com");
console.log(Red);
