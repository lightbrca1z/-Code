var member = {
    foo:{
        number : 001,
        name : "foo",
    },
    bar:{
        count: 002,
        name: "bar",
    },
    hoge:{
        count: 003,
        name: "hoge",
    }
};

var json_str = JSON.stringify(member);

console.log(json_str);