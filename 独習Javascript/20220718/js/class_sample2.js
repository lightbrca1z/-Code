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

//hanakoオブジェクトの作成
taro = new User("独習太郎","taro-pwd");
taro.login();

//hanakoオブジェクトの作成
const hanako = new User("独習花子","hanako-pwd");
hanako.login();