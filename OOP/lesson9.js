// constructor function || not using class keyword

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    
}

// access the prototype
// attach methods to prototype property
User.prototype.login = function(){
    this.online = true;
     console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
     console.log(this.email, 'has logged out');
}



var userOne = new User('sample@sample.com', 'Mike');
var userTwo = new User('sample1@sample.com', 'Mike1');

console.log(userOne);
userTwo.login();
userTwo.logout();

