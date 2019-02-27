var _ = require('underscore');

var person = {
  firstname: "Mike",
  lastname: "Smith",
  getFullName: function() {
    return this.firstname + " " + this.lastname;
  }
};

var john = {
  firstname: "John",
  lastname: "Doe"
};

// demo purposes only -- don't do this in real life
john.__proto__ = person;

// loops over all properties and methods of john object
for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ": " + john[prop]);
  }
}


var jane = {
    address: '111 main st',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
  getFirstName: function() {
    return firstname;
  }
}

_.extend(john, jane, jim)

console.log(john)