const original = ["元の値"];
const copied = original.concat();
copied[0] = "変更後の値";
console.log(original[0]);