let square = function (x){ return x * x;};
console.log(square(3));

let Square = class{ constructor(x){this.area = x * x}};
console.log(new Square(3).area);