module.exports = class OrientacaoObjeto {
    constructor() {
        this.peso = 0;
        this.idade = 0;
        this.altura = 0;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    getIdade() {
        return this.idade;
    }

    setPeso(peso) {
        this.peso = peso;
    }

    getPeso() {
        return this.peso;
    }

    setAltura(altura) {
        this.altura = altura;
    }

    getAltura() {
        return this.altura;
    }

    multiplica() {
        return (this.getIdade() * this.getAltura() * this.getPeso())
    }
}

//No arquivo index.js linha 12 existe um exmplo de como ultilizar a classe