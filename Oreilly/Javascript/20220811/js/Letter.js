let letters = [..."Hello world"];
let string = "";
for(let letter of letters){
    string += letter;
}
// console.log(string)

// let everyother = "";
// for(let [index, letter] of letters.entries()){
//     f (index % 2 === 0) everyother += letter;
// }
// console.log(everyother);

let uppercase = "";
letters.forEach(letter => {
    uppercase += letter.toUpperCase();
});
console.log(uppercase);