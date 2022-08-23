let vowel = /[aeiou]/y;
console.log("test".match(vowel));
vowel.lastIndex = 1;
console.log("test".match(vowel)[0]);
console.log(vowel.lastIndex);
console.log("test".match(vowel));
console.log(vowel.lastIndex);