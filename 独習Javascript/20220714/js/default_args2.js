function hello(greeting = "こんいちは", person = "独習太郎"){
    console.log(greeting + person);
}

//引数にundefinedを渡した場合
hello(undefined,undefined);

//引数にnullを渡した場合
hello(null,null);

//引数を省略した場合
hello();