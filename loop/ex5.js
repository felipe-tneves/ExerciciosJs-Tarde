// Imprimir os primeiros 10 números da sequência de Fibonacci.

// Inicializa os primeiros dois números da sequência de Fibonacci
let fib1 = 1;
let fib2 = 1;

// Imprime os primeiros 10 números da sequência de Fibonacci
console.log("Os primeiro 10 números da sequência de Fibonacci são: ")
console.log(fib1);
console.log(fib2);

// Itera para calcular e imprimir os próximos 8 números da sequência
for(let i = 2; i < 10; i++){
    let nextFib = fib1 + fib2;
    console.log(nextFib);

    //atualiza os valores de fib1 e fib2  para os proximos calculos
    fib1 = fib2;
    fib2 = nextFib;
}