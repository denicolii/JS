 // exibir o maior numero

 function valorMaior(num1,num2) {
    let maior; 

    if (num1 > num2) {
        maior = num1;
    }

    else if (num2 > num1) {
        maior = num2;
    }

    else {
        maior = false;
    }

    return maior;
 }
 

 
 
 var numA = parseInt(prompt("Digite um número:"));
 var numB = parseInt(prompt("Digite outro número:"));

 var maior = valorMaior(numA,numB);

 if (maior) {
    document.write('O maior valor é ' +maior);
 }

 else {
    document.write("Os números possuem o mesmo valor");
 }

