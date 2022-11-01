var Human = function(name,age){
    this.name = name;
    this.age = age;

    this.talkHello = function(){
        return ("My Name is "+ name+"."+this.age+" years old.");
    }
}

var mike = new Human('Mike', 16);

mike.sleep = function(){
    return ("Good Night!");
};

console.log(mike.sleep());