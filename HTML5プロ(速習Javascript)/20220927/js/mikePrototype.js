function Person(name){
    this.name = name;
}

var newPerson = new Person("Mike");

Person.prototype.sex = "male";

console.log(newPerson.sex);