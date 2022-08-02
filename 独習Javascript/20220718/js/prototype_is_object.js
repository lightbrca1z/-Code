//prototypeプロパティの存在の確認

function Test1(){ }

console.log("prototype" in Test1);


//オブジェクトの存在の確認
function Test2(){
    console.log(typeof Test2.prototype);
}

Test2();