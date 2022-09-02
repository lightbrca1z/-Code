fetch(documentURL)
.then(response => response.json())
.then(document => {
    return render(document);   
})
.then(rendered => {
    cacheInDatabase(rendered);
})
.catch(error => handle(error));