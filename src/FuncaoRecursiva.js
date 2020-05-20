function fn_recursiva(i) {
    if ((i % 2) == 0 && (i % 3) == 0 && (i % 10) == 0)
        return i;
    return fn_recursiva(i + 1);
}

exports.resultadoRecursivo = () => {
    console.log(`O menor número inteiro divisível por 2, 3 e 10 é: ${fn_recursiva(1)}`)
}