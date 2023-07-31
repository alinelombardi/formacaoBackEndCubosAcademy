## 🗂️ Brasil com "P"

Brasil com "P" é uma música bastante famosa, em que todas as palavras da música inteira começam com a letra "P".

GOG, o compositor desta música, decidiu dar um próximo passo nesse estilo e fazer músicas em que todas as palavras comecem sempre com as mesmas duas primeiras letras. Contudo ele ainda não decidiu quais duas primeiras letras serão essas. Como está com um pequeno bloqueio no seu processo criativo, ele decidiu analisar várias combinações e analisar as palavras que surgem para cada par de letras, e escolher o par a depender das palavras que surjam.

Como apenas olhar no dicionário estava sendo bastante lento e entediante, ele te contratou para fazer um programa que, dado um par de letras qualquer, imprima na tela as palavras que começam com essas duas primeiras letras.

**Formato de entrada:**

A entrada será sempre composta por três variáveis:

* `palavras:` que será sempre um array de strings, contendo palavras que servem como base para a sua busca. As palavras são sempre com todas as letras minúsculas e sem acentos.

* `primeiraLetra:` que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a primeira letra das palavras.

* `segundaLetra:` que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a segunda letra das palavras.

**Formato de saída:**

Você deve imprimir na tela as palavras contidas no array de palavras que tem como primeira letra a fornecida na entrada e a segunda letra a fornecida na entrada. Imprima uma palavra em cada linha.primeiraLetrasegundaLetra

Caso não nenhuma palavra do array de atenda aos requisitos, imprima na tela .palavrasNENHUMA

**Entrada:**

`
{
  "primeiraLetra": "c",
  "segundaLetra": "v",
  "palavras": [
    "aveia",
    "manha",
    "ave"
  ]
}
`

**Saída:** 0

**Entrada:**

`
{
  "primeiraLetra": "a",
  "segundaLetra": "v",
  "palavras": [
    "aveia",
    "manha",
    "ave"
  ]
}
`

**Saída:**

aveia
ave