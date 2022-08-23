function *oneAndDone(){
    yield 1;
    return "done";
}

console.log([...oneAndDone()]);

let generator = oneAndDone();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
