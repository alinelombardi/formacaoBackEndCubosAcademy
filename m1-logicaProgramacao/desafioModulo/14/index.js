function processData(input) {
    const palavras = input.split("\n");
    const senhaCorreta = palavras[0];
    const palavraDigitada = palavras[1];
    let quantidadeLetrasIguais = 0;
    
    function abreCofre (senha, palavra) {
        for(let i = 0; i < palavra.length; i++) {
            if(palavra[i] === senha[quantidadeLetrasIguais]) {
                quantidadeLetrasIguais++;
            }
            if(quantidadeLetrasIguais === senhaCorreta.length) {
                return "SIM";
            }
        }
        return "NAO";
    }

    const resultado = abreCofre(senhaCorreta, palavraDigitada);
    console.log(resultado)  
} 

processData("cubos\ncuggbyos")