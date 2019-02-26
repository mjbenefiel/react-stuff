
// points to current state of for loop (after it has run) 3, 3, 3
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();



// let variable is scoped to block -- every time for loop runs, will be new variable in memory
function buildFunctions2() {
    var arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}


var fs = buildFunctions2();

fs[0]();
fs[1]();
fs[2]();