const set = new Set(["値1","値2"]);

set.forEach((value,sameValue,set) => {
    console.log(`value : [${value}], sameValue:[${sameValue}],set:`,set);
});