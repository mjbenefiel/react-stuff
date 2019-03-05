class User {
  constructor(email, name) {
      this.email = email;
      this.name = name;
  }
login(){
    console.log(this.email, "just logged in");
}
logout(){
    console.log(this.email, "just logged out");
}
}

var userOne = new User('sample@sample.com', 'Mike')
var userTwo = new User('sample1@sample.com', 'Mike1')

userOne.login()
userTwo.logout()

console.log(userOne)
console.log(userTwo)