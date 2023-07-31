function solucao(jogadores) {
    let quantidade0 = 0;
    let quantidade1 = 0;
    let jogadores0 = [];
    let jogadores1 = [];

    for (let item of jogadores) {
        if (item.jogada === 0) {
            quantidade0++;
            jogadores0.push(item.nome)
        } else {
            quantidade1++
            jogadores1.push(item.nome)
        }
    }

    if(quantidade0 === 1) {
        console.log(jogadores0.join(""))
    } else if (quantidade1 === 1) {
        console.log(jogadores1.join(""))
    } else {
        console.log("NINGUEM")
    }

}


const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

solucao(jogadores)