// // nullish coalescing operator
// 0 ?? 129 // Coalese is a default to the left side always for a falsy value instead of or ||
// null ?? 129 // then the right side returns

// function that calculates the sum of all numbers from 1 up to (and including) some number n.
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// or
function addUpTo(n) {
    return n * (n + 1) / 2;
}

// check performance
var t1 = performance.now()
addUpTo(10000000000)
var t2 = performance.now()
console.log(`Time Elasped: ${(t2 - t1) / 1000} seconds.`)

console.log(addUpTo(100))

