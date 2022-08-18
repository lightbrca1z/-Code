let s = "Hello, world";
let a = "Hello, world";

s = a;
s = s.substring(1,4);
console.log(s);
s = a;
s =s.slice(1,4);
console.log(s);
s = a;
s =s.slice(-3);
console.log(s);
s = a;
s = s.split(",");
console.log(s);


s = a;
s = s.indexOf("l");
console.log(s);
s = a;
s = s.indexOf("l" , 3);
console.log(s);
s = a;
s = s.indexOf("zz");
console.log(s);
s = a;
s = s.lastIndexOf("l");
console.log(s);

s = a;
s.startsWith("Hell");
console.log(s);
s = a;
s.endsWith("!");
console.log(s);
s = a;
s.includes("or");
console.log(s);

s = a;
s.replace("llo","ya");
console.log(s);
s = a;
s.toLowerCase();
console.log(s);
s = a;
s.toUpperCase();
console.log(s);
s = a;
s.normalize();
console.log(s);
s = a;
s.normalize("NFD");
console.log(s);

s = a;
s.charAt(0);
console.log(s);
s = a;
s.charAt(s.length-1);
console.log(s);
s = a;
s.charCodeAt(0);
console.log(s);
s = a;
s.codePointAt(0);
console.log(s);

console.log("x".padStart(3));
console.log("x".padEnd(3));
console.log("x".padStart(3,"*"));
console.log("x".padEnd(3,"-"));

console.log(" test ".trim());
console.log(" test ".trimStart());
console.log(" test ".trimEnd());

s = a;
console.log(s.concat("!"));
console.log("<>".repeat(5));