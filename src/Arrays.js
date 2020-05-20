const estados_abv = ['ES', 'MG', 'RJ', 'SP', 'MT']
const estados = ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo']

function nv_arrays(params) {
    arr = new Map();
    i = 0
    estados_abv.reverse().map(item => {
        arr.set(item, estados[i])
        i++;
    })
    return [...arr];
}

exports.imprime = () => {
    console.log(nv_arrays())
} 