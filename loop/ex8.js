// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let idade = parseInt(prompt("Digite sua idade: "));

while(idade < 18){
    idade = parseInt(prompt("Você é menor de idade. Por favor, digite sua idade novamente: "))
}

console.log("Você é maior de idade. Sua idade é: " + idade);