//var student1 = "alfred";
//var student2 = "ceasar";
//var student3 = "prince";
var students = ["alfred","ceasar","prince"];

var naughtyList = [];
naughtyList.push = (students[0]);

var index = naughtyList.indexOf("alfred");
console.log(naughtyList);

if (index > -1) {
  naughtyList.splice(index, 1);
}

console.log(naughtyList);