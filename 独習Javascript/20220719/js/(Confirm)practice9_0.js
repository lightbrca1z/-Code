class User{
    constructor(username){
        this.username = username;
        this.deleted = 0;
    }
    login(){
        if(this.deleted == 0){
            console.log(`${this.username}はログインに成功しました。`);
        }else{
            console.log(`${this.username}はログインに失敗しました。`);
        }
    }

}

class adminUser extends User {
    constructor(username){
        super(username);
    }
    deleteUser(user){
        if(!(user instanceof User)){
            throw new Error("Userオブジェクトを引数にする必要があります。" );
        }
        user.deleted = 1;
        console.log( `${ user.username }を削除しました。` );
    }
}
const user = new User("独習太郎");
const admin = new adminUser("独習管理者");
admin.deleteUser(user);
user.login();