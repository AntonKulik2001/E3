function plusFunc(a) {
    return function(b) {
        c = a + b
        return c;
    }
}

let resultFunc = plusFunc(2);

let finalResultFunc = resultFunc(6);

console.log(finalResultFunc)