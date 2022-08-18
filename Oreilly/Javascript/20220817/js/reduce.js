const sum = (x,y) => x+y;
const square = x => x*y;

let data = [1,1,3,5,5];
let mean = reduce(data, sum) / data.length;
let deviations = map(data, x => x-mean);
let stddev = Math.sqrt(reduce(map(deviations,square), sum)/(data.length-1));
console.log(stddev);