class TestCls{
    method(arg){
        console.log(`引数:[${arg}]でメソッドを実行`);
    }
}

const test = new TestCls;
test.method("テスト");