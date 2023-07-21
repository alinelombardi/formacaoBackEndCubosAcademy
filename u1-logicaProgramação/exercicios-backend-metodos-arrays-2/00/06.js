const arquivos = ['teste.pdf', 'teste.csv', 'teste.bat'];

const verificaArquivo = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        return arquivo.includes('.bat')
    });
    if(resultado) {
        console.log('vírus detectado')
    } else {
        console.log('nenhum vírus encontrado')
    }
}

verificaArquivo(arquivos);