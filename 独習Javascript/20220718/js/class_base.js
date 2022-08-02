class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    login(){
        console.log(`ログイン[${this.username}/${this.password}]`);
    }
}

const taro = new User("独習太郎","taro-pwd");
const hanako = new User("独習花子","hanako-pwd");

taro.login();
hanako.login();
