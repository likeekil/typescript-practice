function printLabel(labelObj) {
    console.log(labelObj.label);
}
function computeSquera(square) {
    var newSquare = { color: 'red', size: 400 };
    if (square.color) {
        newSquare.color = square.color;
    }
    return newSquare;
}
// let p123: Point = {x: 10, y: 20};
// p.x = 1;
// ReadOnlyArray 数组只读属性
var a = [1, 2, 3];
var b = a;
function getSquare(squareValue) {
    return { color: "string", size: 1 };
}
var mySquare = getSquare({ col: "12", size: 2 });
var mySquare1 = getSquare({ col: "1" });
var mySearch = function (source, size) { return true; };
var readonlyDic = { 1: "2", "2": "1" };
// readonlyDic["2"] = "2" 
