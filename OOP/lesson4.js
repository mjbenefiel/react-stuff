class User {
  constructor(email, name) {
      this.email = email;
      this.name = name;
  }
}

var userOne = new User('sample@sample.com', 'Mike')
var userTwo = new User('sample1@sample.com', 'Mike1')

console.log(userOne, userTwo)