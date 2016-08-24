// function alertNumber(a, b) {
//   let result  = a + b;
//   alert(result);
// }
//
// alertNumber(3, 6);
//
// function logNumbers (a, b) {
//   let result = a + b;
//   console.log(result);
// }
//
// logNumbers(4, 7);


function addNumbers (a:number, b, callback) {
  let result = a + b;
  if (typeof callback ==='function') {
    callback(result)
  }
}

function handleResults(x) {
  let result = x * 2;
  alert(result);
}

// addNumbers(2, 3, handleResults);
// addNumbers(2, 9, alert);
// addNumbers(9, 5, prompt);

function forEach (array, callback){
  for (var i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

function consoleLog(i) {
  console.log(i)
}

var testArray = [1, 2, 3, 4, 5];
forEach(testArray, consoleLog)


forEach(testArray, alert);
