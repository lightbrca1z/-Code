class User{

    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    login(){
        console.log(`ログイン[${this.username}/${this.password}]`);
    }

    changePassword(pwd){
        this.password = pwd;
        console.log(`パスワードが[${this.password}]に変更されました。`);
    }
}

//インスタンス化
const taro = new User("独習太郎", "taro-pwd");

taro.login();

taro.changePassword("new-pwd");

taro.login();