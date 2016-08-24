function addNumbers(a, b, callback) {
    var result = a + b;
    if (typeof callback === 'function') {
        callback(result);
    }
}
function handleResults(x) {
    var result = x * 2;
    alert(result);
}
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
function consoleLog(i) {
    console.log(i);
}
var testArray = [1, 2, 3, 4, 5];
forEach(testArray, consoleLog);
forEach(testArray, alert);
