const date = new Date();

//3番目の引数に1を設定して、月初に設定出来る。
const firstDay = new Date(date.getFullYear(), date.getMonth(),1);
console.log(firstDay.toDateString());

//月に1を足し、3番目の引数に0を設定して、月末に設定出来る。
const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0);
console.log(lastDay.toDateString());