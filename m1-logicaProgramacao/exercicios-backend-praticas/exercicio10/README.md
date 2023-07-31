## 🗂️ Pontos no campeonato

Num campeonato de futebol, um time joga várias partidas ao longo do ano e vai somando pontos de acordo com seu resultado em cada partida. Um time ganha:

* 3 pontos quando vence uma partida
* 1 ponto quando empata uma partida
* nenhum ponto quando perde uma partida

Você está trabalhando no setor de TI de um clube de futebol que deseja fazer várias simulações de desempenho a depender do seu resultado em cada jogo.

Para facilitar esse trabalho, você deve desenvolver o programa que calcula a pontuação final do clube a depender desses resultados em cada partida.

**Formato de entrada:**

A entrada será sempre composta por apenas uma variável que é um array contendo as várias strings, que definem qual foi o resultado do time em cada partidaresultados

Cada item desse array é sempre do tipo string, contendo uma das opções abaixo:

* V, que representa que o time venceu essa partida
* E, que representa que o time empatou essa partida
* D, que representa que o time perdeu essa partida

**Formato de saída:**

Imprima na tela apenas um número representando a quantidade de pontos ganhos pelo time na competição.

**Entrada:**
`
[
  "V",
  "E",
  "V",
  "E"
]
`

**Saída:** 8

**Explicação:** Como o time teve 2 vitórias (2x3) e dois empates (2x1), ele fica com 8 pontos (6+2).