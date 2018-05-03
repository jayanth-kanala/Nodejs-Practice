// CLRS Excerises 1.2-1 to 1.2-3
// 1.2-1
// finger print, algorithm to be fast and accurate

// 1.2-2
// Inserstion sort of 8n^2, Merge sort 64nlogn
// find n where insertion sort beat merge
// 8n2 < 64n logn => n/8 < logn => 2^(n/8) < n
var n = 2
while (Math.pow(2, (n/8)) < n) {
    n=n+1
}
console.log(n)
// 1.2-3
// c is constant and n is input size
// requires cn^2 (100n^2), Merge sort requires cnlogn (64nlogn)
// find n where 100n^2 is faster for small n
var n = 1
while ((100 * n * n) > (Math.pow(2, n))) {
    n++
}
console.log(n)
// 1-1