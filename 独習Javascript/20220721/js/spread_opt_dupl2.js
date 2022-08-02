const original = ["元の値"];
const duplicated = original;
duplicated[0] = "変更後の値";
console.log(`original[${original[0]}] duplicated[${duplicated[0]}]`);