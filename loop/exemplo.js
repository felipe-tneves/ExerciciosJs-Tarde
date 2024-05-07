//for - Loop contado

for(let cont=10; cont >=0; cont--){
    console.log(cont);
}

//while - Loop condicional
let contador =0;

while(contador <= 5){
    console.log(contador);
    contador+=1
}

//do - while -> Loop condicional

let num2 = 0;

do {

    console.log(num2);
    num+=1;
    
} while (num2 < 10);


//ForEach(Para cada) - percorrer a lista

let num = [1,2,3,4,5,6,7];

num.forEach(elemento => {
    console.log("O número é: " + elemento)

});

for(let elemento of num){
    console.log(elemento)
}
