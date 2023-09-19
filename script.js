// Solicita ao usuário para inserir três números
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número: "));
const numero3 = parseFloat(prompt("Digite o terceiro número: "));

// Verifica qual é o maior número
let maiorNumero;

if (numero1 >= numero2 && numero1 >= numero3) {
    maiorNumero = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maiorNumero = numero2;
} else {
    maiorNumero = numero3;
}

// Exibe o resultado em um alerta
alert(`O maior número entre ${numero1}, ${numero2} e ${numero3} é ${maiorNumero}`);
