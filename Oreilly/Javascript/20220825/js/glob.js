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

let pattern = new Glob("docs/*.txt");
console.log("docs/js.txt".search(pattern));
console.log("docs/js.htm".search(pattern));
let match = "docs/js.txt".match(pattern);
console.log(match[0]);
console.log(match[1]);
match.index
"docs/js.txt".replace(pattern, "web/$1.htm")