function countNums(a, b) {
    let begin = a;

    let timerId = setInterval(function() {
        console.log(begin);
        if (begin == b) {
            clearInterval(timerId);
        }
        begin++;
    },1000);
}

countNums(1,10)