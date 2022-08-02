class User{

    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    login(){
        this.check();
        console.log(`ログイン[${this.username}/${this.password}]`);
    }

    check(){
        console.log(`ログイン情報をチェックします。`);
    }
}

taro = new User("独習太郎","taro-pwd");
taro.login();
