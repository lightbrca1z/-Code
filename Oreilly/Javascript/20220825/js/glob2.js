class Glob{
    constructor(glob){
        this.glob = glob;

        let regexpText = glob.replace("?", "([^/]").replace("*","([^/]*)");

        this.regexp = new RegExp(`^${regexpText}$`,"u");
    }

    toString() {return this.glob; }

    [Symbol.search](s){return s.search(this.regexp);}
    [Symbol.match](s){return s.match(this.regexp);}
    [Symbol.replace](s, replacement){
        return s.replace(this.regexp, replacement);
    }
}


function glob(strings, ...values){
    let s = strings[0];
    for(let i = 0; i<values.length;i++){
        s += values[i] + strings[i+1];
    }

    return new Glob(s);
}

let root = "/tmp";
let filePattern = glob`${root}/*.html`;
console.log("/tmp/test.html".match(filePattern)[1]);