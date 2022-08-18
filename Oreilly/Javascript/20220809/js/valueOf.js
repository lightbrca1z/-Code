let point = {
    x:3,
    y:4,
    valueOf: function(){return Math.hypot(this.x,this.y);}
};
Number(point)
console.log(Boolean(point > 4));
console.log(Boolean(point > 5));
console.log(Boolean(point < 6));