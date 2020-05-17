const Arrays = require('./Arrays');
const FuncaoRecursiva = require('./FuncaoRecursiva');
const OrientacaoObjeto = require('./OrientacaoObjeto');
const LogicaProgramacao = require('./LogicaProgramacao');
//EX1
Arrays.imprime()

//EX2
console.log('----------------------------------------------------------')
FuncaoRecursiva.resultadoRecursivo()

//EX3
console.log('----------------------------------------------------------')
const OO = new OrientacaoObjeto()

OO.setAltura(1)
OO.setIdade(2)
OO.setPeso(3)

console.log(`Altura: ${OO.getAltura()}`)
console.log(`Idade: ${OO.getIdade()}`)
console.log(`Peso: ${OO.getPeso()}`)

console.log(`Multiplicação: ${OO.multiplica()}`)

//EX4
console.log('----------------------------------------------------------')
LogicaProgramacao.resultadoSoma()