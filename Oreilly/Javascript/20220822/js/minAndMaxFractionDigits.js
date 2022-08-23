let data = [0.05, .75, 1];
let formatData = Intl.NumberFormat(undefined,{
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
}).format;

console.log(data.map(formatData));