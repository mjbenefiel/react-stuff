// constructor function || not using class keyword

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in')
    }
}

var userOne = new User('sample@sample.com', 'Mike');
var userTwo = new User('sample1@sample.com', 'Mike1');

console.log(userOne);
userTwo.login();

