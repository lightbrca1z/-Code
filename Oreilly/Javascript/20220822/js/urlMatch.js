let url=/(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "Visit my blog at http://www.example.com/~david";
let match = text.match(url);
let fullurl, protocol, host, path;
if (match !== null){
    console.log(fullurl = match[0]);
    console.log(protocol = match[1]);
    console.log(host = match[2]);
    console.log(path = match[3]);
}