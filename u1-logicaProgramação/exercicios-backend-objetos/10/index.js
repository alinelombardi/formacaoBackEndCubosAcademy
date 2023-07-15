// clientes
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 };
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 };
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 };
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 };
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 };
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 };
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 };

// a. Adicione uma tv, dois cabos usb e uma webcam para o José
jose.carrinho.push({ item: tv, quantidade: 1 });
jose.carrinho.push({ item: caboUsb, quantidade: 2 });
jose.carrinho.push({ item: webcam, quantidade: 1 });
console.log(JSON.stringify(jose, null, 2));


// b. Adicione dois notebooks para o Carlos
carlos.carrinho.push({ item: notebook, quantidade: 2 });
console.log(JSON.stringify(carlos, null, 2));

// c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
patricia.carrinho.push({ item: teclado, quantidade: 1 });
patricia.carrinho.push({ item: caboUsb, quantidade: 2 });
patricia.carrinho.push({ item: carregador, quantidade: 1 });
patricia.carrinho.push({ item: mouse, quantidade: 1 });
patricia.carrinho.push({ item: monitor, quantidade: 1 });
console.log(JSON.stringify(patricia, null, 2));

// d. Adicione cinco webcams para o Renato
renato.carrinho.push({ item: webcam, quantidade: 5 });
console.log(JSON.stringify(renato, null, 2));

// e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
roberto.carrinho.push({ item: webcam, quantidade: 1 });
roberto.carrinho.push({ item: caboUsb, quantidade: 2 });
roberto.carrinho.push({ item: monitor, quantidade: 1 });
console.log(JSON.stringify(roberto, null, 2));