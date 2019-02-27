var person = {
    firstname: 'Mike',
    lastname: 'Smith',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// demo purposes only -- don't do this in real life
john.__proto__ = person; 
console.log(john.getFullName());

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName())

var a = {};
var b = function() { };
var c = []