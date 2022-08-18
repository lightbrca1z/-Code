const modules = {};
function require(moduleName){ return modules[moduleName];}

modules["sets.js"] = (function(){
    const exports = {};

    exports.BitSet = class BitSet { ... };

    return exports;
}());

modules["stats.js"] = function(){
    const exports = {};
    // stats.jsファイルの内容をここに記述する。
    const sum = (x,y) => x + y;
    const square = x => x * x;
    exports.mean = function(data) { ... };
    exports.stddev = function(data) { ... };

    return exports;
}();