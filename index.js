console.log(process.argv)
const argumento = process.argv.slice(2)
const nome = argumento[0].split('=')[1]
console.log(nome)
const idade = argumento[1].split('=')[1]
console.log(idade)