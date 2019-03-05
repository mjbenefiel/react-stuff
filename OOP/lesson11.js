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

function Admin(...args){
    // takes the function User and runs it
   User.apply(this, args);
   this.role = 'super admin';

}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email !== u.email
    });

}

var userOne = new User('sample@sample.com', 'Mike');
var userTwo = new User('sample1@sample.com', 'Mike1');
var admin = new Admin('admin@admin.com', 'SuperAdmin');

var users = [userOne, userTwo, admin];

console.log(admin)
console.log(userOne)
admin.login()
console.log(users)
admin.deleteUser(users[1])
console.log(users)
