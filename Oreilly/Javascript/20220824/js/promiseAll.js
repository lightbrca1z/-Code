const urls = [];
promises = urls.map(url => fetch(url).then(r => r.text()));

Promise.all(promises)
.then(bodies => { console.log("Hello World!")})
.catch(e => console.error(e));