function Test(){}

//関数はオブジェクトの一種
Test.prop = "値";
console.log(Test.prop);

//prototypeプロパティの存在確認
console.log("prototype" in Test);