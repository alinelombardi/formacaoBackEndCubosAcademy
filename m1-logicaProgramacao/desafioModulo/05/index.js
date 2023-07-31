const cartaParaCima = "Q";


// | Q                    | J       |
// | J                    | K       |
// | K                    | A       |
// | A                    | 2       |
// | 2                    | 3       |
// | 3                    | Q       |

function solucao(carta) {

    if (carta == "Q") {
        console.log("J")
    } else if (carta == "J") {
        console.log("K")
    } else if (carta == "K") {
        console.log("A")
    } else if (carta == "A") {
        console.log("2")
    } else if (carta == "2") {
        console.log("3")
    } else if (carta == "3") {
        console.log("Q")
    } else {
        console.log("carta inválida")
    }
}

solucao(cartaParaCima);