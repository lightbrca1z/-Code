let phrases = ["hello world","the definitive guide"];
let words = phrases.flatMap(phrases => phrases.split(" "));
console.log(words);