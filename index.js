const minimist = require('minimist')
const args = minimist(process.argv.slice(2))
//NO TERMINAL PASSAR --nome=joao 
const soma = require("./soma").soma
const valorUm = parseInt(args['valorum'])
const valorDois = parseInt(args['valordois'])
soma(valorUm, valorDois)