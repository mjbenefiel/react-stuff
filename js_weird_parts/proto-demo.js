function Person(firstname, lastname) {

this.firstname = firstname;
this.lastname = lastname;

}

Person.prototype.getFullname = function () {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john)

var jane = new Person('Jane', 'Doe');
console.log(jane)

console.log(john.getFullname());