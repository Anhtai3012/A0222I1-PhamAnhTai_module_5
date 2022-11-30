
function fibonacci(n) {
    if (n == 1)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var sum = 0;
sum = fibonacci(5);
console.log(sum);
