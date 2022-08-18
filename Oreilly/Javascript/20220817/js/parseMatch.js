//static 
function parse(s){
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if(!matches){
        throw new TypeError('Cannot parse Range from "${s}".');
    }
    return new Range(parseInt(matches[1]), parseInt(matches[2]));
}