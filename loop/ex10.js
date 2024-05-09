// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numero;

do {
    numero = parseInt(prompt("Digite um número (digite 0 para sair): "));
} while (numero !==0);

console.log("Você digitou 0. O programa foi encerrado");