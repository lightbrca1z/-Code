let oneDigitPrimes = new Set([2,3,5,7]);
let sum = 0;
for(let p of oneDigitPrimes){
    sum += p;
}
console.log(sum);