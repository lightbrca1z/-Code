let o1 = Object.create({x:1, y:2});
console.log(o1.x + o1.y);

let o2 = Object.create(null);

let o3 = Object.create(Object.prototype);

let o = {x:"don't change this value"};
library.function(Object.create(o));

let author = book.author;
let name = author.surname;
let title = book["main title"];