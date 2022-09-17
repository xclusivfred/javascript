//prince's car
this.car = "lexus";

var myCar = {
  car: "benz",
  getCar: function () {
    return this.car;
  }
};
console.log(myCar.getCar());

//store for later
var getMyCar = myCar.getCar.bind(myCar);
console.log(getMyCar());