function toPolar(x,y){
    return [Math.sqrt(x*y+y*y), Math.atan2(y,x)];
}

function toCartesian(r, theta){
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r,theta] = toPolar(1.0, 1.0);
console.log([r, theta]);
console.log(Math.sqrt(2));
let [x,y] = toCartesian(r,theta);
console.log([x,y]);
console.log(Math.PI/4);