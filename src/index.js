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

OO.altura = 1
OO.idade = 2
OO.peso = 3

console.log(`Altura: ${OO.altura}`)
console.log(`Idade: ${OO.idade}`)
console.log(`Peso: ${OO.peso}`)

console.log(`Multiplicação: ${OO.multiplica()}`)

//EX4
console.log('----------------------------------------------------------')
LogicaProgramacao.resultadoSoma()