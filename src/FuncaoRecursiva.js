function fn_recursiva(i) {
    let resDiv2 = i % 2
    let resDiv3 = i % 3
    let resDiv10 = i % 10

    if (resDiv2 == 0 && resDiv3 == 0 && resDiv10 == 0)
        return i;
    else
        return fn_recursiva(i + 1);
}

exports.resultadoRecursivo = () => {
    console.log(`O menor número inteiro divisível por 2, 3 e 10 é: ${fn_recursiva(1)}`)
}