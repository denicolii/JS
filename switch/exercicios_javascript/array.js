function maiorValor() { 
    var valor1 = parseInt(prompt("Digite o primeiro valor: "));
    var valor2 = parseInt(prompt("Digite o segundo valor: "));
    var maior = '';

    if (valor1 > valor2) {
        maior = valor1
        console.log(`O valor maior é:  ${maior}`);
    } else {
        maior = valor2 
        console.log(`O maior valor é: ${maior}`)
    }
}

    maiorValor()