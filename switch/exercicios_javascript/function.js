function cubo() {
   num = parseInt(prompt('Digite um numero: ')); 
   res = num*num*num ; 
   return res ; 
}

document.write(cubo());

// object

var usuario = {
    nome: "João",
    sobrenome:"Silva",
    idade:33
};

var usuario2 = new Object();
usuario2.nome = "Denicoli";
usuario2.sobrenome = "Delicia";
usuario2. idade = 18;

console.log(usuario2.sobrenome,usuario2.idade);

var lista1 = [usuario,usuario2];

console.log(lista1);

// array

var cores = ['Rosa', 'Preto', 'Purple'] ; 
console.log(cores)
console.log(cores[2])

