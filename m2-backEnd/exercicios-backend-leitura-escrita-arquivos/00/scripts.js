const fs = require('fs');

console.log('antes de ler');

// leitura de arquivos síncrono (não recomendado)
const a = fs.readFileSync('a.txt').toString();
console.log(a);
console.log('depois de ler');

// funções assíncronas com callback
fs.readFile('a.txt', (erro, data) => {
    if(erro){
        console.log(erro);
    } else {
        console.log(data.toString());
    }
})

console.log('depois de ler');