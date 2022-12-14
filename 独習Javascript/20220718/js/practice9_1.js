class User{

    constructor(username, password,roll){
        this.username = username;
        this.password = password;
        this.roll = roll;
    }

    login(){
        this.check();
        console.log(`ログイン[${this.username}/${this.password}]`);
    }

    check(){
        console.log(`ログイン情報をチェックします。`);
    }

    checkRoll(){
        if(this.roll === "admin"){
            console.log("管理者権限です。");
        }else{
            console.log("一般ユーザーです。")
        }
    }

}

// 一般ユーザーとしてインスタンスを生成
taro = new User("独習太郎","taro-pwd");
taro.login();

// 管理者としてインスタンスを生成
const hanako = new User("独習　花子","hanako-pwd","admin");
hanako.checkRoll();