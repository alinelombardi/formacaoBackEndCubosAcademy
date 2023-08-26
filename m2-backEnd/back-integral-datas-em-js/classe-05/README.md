# Exercício de classe 🏫

## E aí, continua aberto?

Uma determinada loja funciona das 8h00 (já aberto) as 18h (ainda aberto, fechado as 18h01) de segunda a sexta, e aos sábados das 8h as 12h, apenas. Faça uma função que recebe como argumento um objeto Date do JS, representando o momento em que o cliente chega na loja. Sua função deverá retornar `true` caso a loja esteja aberta e `false` caso a loja esteja fechada.


Pode considerar o fuso UTC para tudo.

```
taAberto(newDate(2021,3,25,12)); // deve retornar false, pois é um domingo

taAberto(newDate(2021,3,26,12)); // deve retornar true, pois é uma segunda

taAberto(newDate(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)

taAberto(newDate(2021,3,24,9,30)); // deve retornar true, pois é sábado de manhã (9h30)
```