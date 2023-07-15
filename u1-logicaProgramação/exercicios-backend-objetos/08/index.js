const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];


function temPets(usuarios) {
    for (let item of usuarios) {
        const pet = item.pets;
        const quantidade = pet.length;
        if (pet.length === 0) {
            console.log(`Sou ${item.nome} e não tenho pets`);
        } else if (pet === 1) {
            console.log(`Sou ${item.nome} e tenho ${quantidade} pet`);
        } else {
            console.log(`Sou ${item.nome} e tenho ${quantidade} pets`);
        }
    }
}

temPets(usuarios);