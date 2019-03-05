class User {
  constructor(email, name) {
      this.email = email;
      this.name = name;
      this.score = 0;
  }
login(){
    console.log(this.email, "just logged in");
    return this //returning object
}
logout(){
    console.log(this.email, "just logged out");
    return this //returning object
}
updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this //returning object
}
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u =>{
            return u.email !== user.email
        })

    }
}

var userOne = new User('sample@sample.com', 'Mike');
var userTwo = new User('sample1@sample.com', 'Mike1');
var admin = new Admin('node@ninjas.com', 'Code Ninja');

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo)

console.log(users)

