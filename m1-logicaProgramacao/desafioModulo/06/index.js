function solucao(lista) {
    const resposta = lista.filter((numero) => {
        return numero >= 18;
    })

    if(resposta.length === 0) {
        console.log("CRESCA E APARECA")
    } else {
        let menorIdade = 999999999999999; 
        for(let item of resposta) {
            if(item < menorIdade){
                menorIdade = item;
            } else {
                menorIdade = menorIdade
            }
        }
        console.log(menorIdade)
    }
}


const lista = [12];

solucao(lista)

  