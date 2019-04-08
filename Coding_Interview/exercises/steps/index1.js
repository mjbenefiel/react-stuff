function printNumber(n) {
    if (n === 1) {
        return
    } else {
        console.log(n);
        printNumber(n - 1);
    }
}

printNumber(10)