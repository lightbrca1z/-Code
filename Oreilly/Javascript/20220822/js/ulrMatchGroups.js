let url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
let text = "Vist my blog at http://www.example.com/~david";
let match = text.match(url);
console.log(match[0]);
console.log(match.input);
console.log(match.index);
console.log(match.groups.protocol);
console.log(match.groups.host);
console.log(match.groups.path);