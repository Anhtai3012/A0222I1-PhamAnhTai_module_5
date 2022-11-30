
function  fibonacci(n:number):number{
    if (n == 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
let sum:number=0;
sum = fibonacci(5);
console.log(sum);

