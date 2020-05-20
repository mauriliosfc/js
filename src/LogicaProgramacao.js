function somaInteiroMultiplos3e5(i, soma = 0) {
    i = i + 1

    if (i > 1000) {
        return soma
    }
    else if ((i % 3) == 0 || (i % 5) == 0) {
        soma = soma + i;
        return somaInteiroMultiplos3e5(i, soma);
    }
    return somaInteiroMultiplos3e5(i, soma);
}

exports.resultadoSoma = () => {
    console.log(`A soma de todos os múltiplos de 3 ou 5 abaixo de 1000 é: ${somaInteiroMultiplos3e5(0)}`)
}