var student = {
  name: "alfred",
  age: 10,
  sex: "male",
  greeting: function () {
    return "hi, my name is " + this.name;
  }
};
console.log(student.greeting());

console.log(student.name);

var student1 = new Object();
student1.age = 13;
student1.sex = "male";

console.log(student1);

var student2 = {};
student2.name = "ceasar";
student2.age = 15;
student2.sex = "male";
console.log(student2);

var record = [];
function person (first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.greeting = function () {
    return "hi, my name is " + this.firstName;
  };
}
var people = new person("khay", "frosh", 12);
console.log(people);

record.push(new person("gee", "mern", 4));
console.log(record);
record.push(new person("willie", "cane", 4));
console.log(record);

for (index = 0; index < record.length; index++) {
  var chat = record[index];
  console.log(chat.greeting());
}
