const estados_abv = ['ES', 'MG', 'RJ', 'SP', 'MT']
const estados = ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo']

function nv_arrays(params) {
    arr = []
    estados_abv.map(item => {
        switch (item) {
            case 'ES':
                arr.push({ ES: estados.find(el => el == 'Espírito Santo') })
                break;
            case 'MG':
                arr.push({ MG: estados.find(el => el == 'Minas Gerais') })
                break;
            case 'RJ':
                arr.push({ RJ: estados.find(el => el == 'Rio de Janeiro') })
                break;
            case 'SP':
                arr.push({ SP: estados.find(el => el == 'São Paulo') })
                break;
            case 'MT':
                arr.push({ MT: estados.find(el => el == 'Mato Grosso') })
                break;
            default:
                break;
        }
    })
    return arr
}

exports.imprime = () => {
    console.log(nv_arrays())
} 