let x = 1;

function convert(x){
    switch(typeof x){
    case "number":
        return x.toString(16);
    case "string":
        return '"'+x+'"';
    default:
        return String(x);
    }
}

console.log(convert(x));