const chuka = ["回鍋肉","青椒肉絲","餃子"];
const desert = ["杏仁豆腐","ごま団子"];

const chukaCopy = [...chuka];
console.log(chukaCopy);
let newChuka = chukaCopy.concat(desert);
console.log(newChuka);
newChuka.splice(2,0,"坦々麺");
console.log(newChuka);