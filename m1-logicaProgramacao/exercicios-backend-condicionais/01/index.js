const jogada1 = "tesoura"
const jogada2 = "pedra"

//pedra ganha de tesoura
//tesoura ganha de papel
//papel ganha de pedra


if (jogada1 === jogada2) {
    console.log("empate");
} else if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
    console.log(jogada1);
} else {
    console.log(jogada2);
}
