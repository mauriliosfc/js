module.exports = class OrientacaoObjeto {
    constructor() {
        this._peso = 0;
        this._idade = 0;
        this._altura = 0;
    }

    set idade(idade) {
        this._idade = idade;
    }

    get idade() {
        return this._idade;
    }

    set peso(peso) {
        this._peso = peso;
    }

    get peso() {
        return this._peso;
    }

    set altura(altura) {
        this._altura = altura;
    }

    get altura() {
        return this._altura;
    }

    multiplica() {
        return (this.idade * this.altura * this.peso)
    }
}

//No arquivo index.js linha 12 existe um exmplo de como ultilizar a classe