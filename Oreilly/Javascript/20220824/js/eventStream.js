function eventStream(elt, type){
    const q = new AsyncQuere();
    elt.addEventLisener(type, e=>q.enqueue(e));
    return q;
}

async function hndleKeys(){
    for await (const event of eventStream(document, "keypress")){
        console.log(event.key);
    }
}