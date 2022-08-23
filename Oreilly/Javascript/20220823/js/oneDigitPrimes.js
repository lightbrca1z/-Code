function* oneDigitPrimes(){
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

let primes = oneDigitPrimes();

console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().done);

primes[Symbol.iterator]();

console.log([...oneDigitPrimes()]);
let sum = 0;
for(let prime of oneDigitPrimes()) sum += prime;
console.log(sum);