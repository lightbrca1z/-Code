Array.prototype[Symbol.iterator] = function*(){
    let arry = this;

    for(let index = 0; index < arry.length; index++){
        //インデックスと値をペアで返す。
        yield[index, arry[index]];
    }
}

for(let item of ["Heelo","World"]){
    console.log(item);
}