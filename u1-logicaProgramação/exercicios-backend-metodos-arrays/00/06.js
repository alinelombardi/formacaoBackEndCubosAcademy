//Diferença entre valor e referência
//Quando guardamos informações em variaveis podem ser primitivos (string, int, boleano), onde o comportamento é um, a atribuição é feita por cópia e guardando em lugar diferente da memoria, ele é clonado. 
//Todo o restante é um objetvo que tem um tratamento diferente, o dados é apenas um e toda alteração é feita nesse unico local da memória, é por referência. 

let numero1 = 5;
let numero2 = numero1;
numero1 = 10;
console.log("numero1 = ", numero1); //10
console.log("numero2 = ", numero2); //5

let texto1 = "abra";
let texto2 = texto1;
texto1 = texto1 + "cadabra";
console.log("texto1 = ", texto1); //abracadabra
console.log("texto2 = ", texto2); //abra

let obj1 = { prop: 5 };
let obj2 = obj1;
obj1.prop = 10;
obj2.prop = 20;
console.log("obj1 = ", obj1); //{ prop: 20 } 
console.log("obj2 = ", obj2); //{ prop: 20 }

let array1 = [1,2,3];
let array2 = array1;
array1.push(4);
array2.push(5);
console.log("arr1 = ", array1); //[ 1, 2, 3, 4, 5 ]
console.log("arr2 = ", array2); //[ 1, 2, 3, 4, 5 ]

