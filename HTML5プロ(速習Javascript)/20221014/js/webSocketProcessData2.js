function log(message){
    var client = new XMLHttpRequest();
    client.open("POST", "/log");
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send(message);
}

function fetchStatus(address){
    var client = new XMLHttpRequest();
    client.onreadystatechange = function(){
        if(this.readyState == this.DONE) returnStatus(this.status);
    };
    client.open("HEAD", address);
    client.send();
}