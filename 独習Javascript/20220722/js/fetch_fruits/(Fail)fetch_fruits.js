fetch("sample.json")
.then(response => response.json())
.then(data => {
    for (const { key, value } of data) {
        console.log(key + ":" + value);
    }
});

async function myFetch() {
const response = await fetch("sample.json");
const data = await response.json(); // jsonメソッドもPromiseを返す
for (const { key, value } of data) {
    console.log(key + ":" + value);
}
}
myFetch();