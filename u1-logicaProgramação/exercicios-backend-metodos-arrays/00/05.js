//splice

let lista = ["a", "b", "c", "d", "e"];
lista.splice(1, 2, "f");
console.log(lista); //[ 'a', 'f', 'd', 'e' ] 

lista = ["a", "b", "c", "d", "e"];
lista.splice(1, 2, "f", "g", "h");
console.log(lista); // [ 'a', 'f', 'g', 'h', 'd', 'e' ]

lista = ["a", "b", "c", "d", "e"];
lista.splice(1, 0, "f");
console.log(lista); // [ 'a', 'f', 'b', 'c', 'd', 'e' ]

//push
lista = ["a", "b", "c", "d", "e"];
lista.push("f");
console.log(lista); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

lista = ["a", "b", "c", "d", "e"];
const quantidade = lista.length;
console.log(quantidade); //5

lista = [ 'a', 'b', 'c', 'd' ];
lista.pop();
console.log(lista); 
