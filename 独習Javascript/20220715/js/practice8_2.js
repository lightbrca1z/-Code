window.name = "独習　太郎";
const which = () => {
    console.log(this.name);
}

const hanako = {
    name: "独習　花子",
    callName(){
        which();
    }
}

hanako.callName();