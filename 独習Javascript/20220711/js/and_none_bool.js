console.log("hello" && "world");
console.log("hello" && undefined);
console.log(null && "world");
console.log("hello" && "world" && "!!");

//論理積の場合、オペランドがTruthyの場合、
//truthyを返すが、falsyの場合、元の値を返す。