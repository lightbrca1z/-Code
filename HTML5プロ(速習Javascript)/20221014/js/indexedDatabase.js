var request = indexedDB.open("library");
request.onupgradeneeded = function(){
    //データベースが存在していなかったので、オブジェクトとインデックスを作成します。
    var db = request.result;
    var store = db.createObjectStore("books", {keyPath: "isbn"});
    var titleIndex = store.createIndex("by_title", "title", {unique:true});
    var authorIndex = store.createIndex("by_author", "author");
    // Populate with initial data.
    store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
    store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
    store.put({title: "Bedrock Nights", author:"Barney",isbn: 345678});
};
request.onsuccess = function(){
    //データベースのオープンに成功しました。
    db = request.result;
}