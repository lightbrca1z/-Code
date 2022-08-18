let username = null;
if(username == null){
    username = "John Doe";
    console.log(username);
}

username = null;
if(!username) username = "Jone Doe";
console.log(username);

let address = null;
if(!address){
    address = "";
    message = "Please specify a mailing address";
    console.log(message);
}

let n = 1;
if (n === 1)
    console.log("You have 1 new message.");
else
    console.log(`You have ${n} new messages.`);