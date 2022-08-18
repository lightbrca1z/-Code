const random = {
    get octet() {return Math.floor(Math.random()*256);},
    get uinit16(){return Math.floor(Math.random()*65536);},
    get init16(){return Math.floor(Math.random()*65536)- 32768;}
};

console.log(random.octet);
console.log(random.uinit16);
console.log(random.init16);