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

var userOne = new User('sample@sample.com', 'Mike')
var userTwo = new User('sample1@sample.com', 'Mike1')

// call the methods || method calls
userOne.login();
userTwo.logout();
userOne.updateScore();
userOne.updateScore();
console.log('----------------------')
userOne.login().updateScore().updateScore().logout()

console.log(userOne)
console.log(userTwo)