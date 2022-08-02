function replacer(prop,value){
    console.log(`prop[${prop}] value[`,value,`]`);
    return value;
}

const nestedObj = {a:{b:{c:0}}};
const jsonStr = JSON.stringify(nestedObj,replacer);
console.log(jsonStr);