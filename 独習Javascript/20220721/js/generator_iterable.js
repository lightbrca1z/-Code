class Iterable{
    *[Symbol.iterator](){
        for(let key in this){
            yield [key, this[key]];
        }
    }
}

const fruits = new Iterable();
fruits.apple = "リンゴ";
fruits.banana = "バナナ";
for(const row of fruits){
    console.log(row[0],row[1]);
}