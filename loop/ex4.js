// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.


let numero = parseInt(prompt("Digite um número para ver na tabuada: "))



if(!isNaN(numero)){

    for(let num = 1; num <=10; num++){
        console.log(numero + " X " + num + " = " + (numero*num));
    }

}else{
    console.log("Número invalido. Por favor, digite um número válido.")
}


console.log(isNaN("Óla")) // retorna true 
console.log(isNaN(123)) // retorna false 

//invertendo
console.log(!isNaN("Óla")) // retorna false 
console.log(!isNaN(123)) // retorna true 