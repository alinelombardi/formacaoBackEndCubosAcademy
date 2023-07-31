function encontrarDonoDoPet(pet, usuarios) {
    let donoEncontrado = false;
    let nomeDono = '';
  
    for (let i = 0; i < usuarios.length; i++) {
      const usuario = usuarios[i];
  
      if (usuario.pets.includes(pet)) {
        donoEncontrado = true;
        nomeDono = usuario.nome;
        break;
      }
    }
  
    if (donoEncontrado) {
      console.log(`O dono(a) do(a) ${pet} é o(a) ${nomeDono}.`);
    } else {
      console.log(`Que pena ${pet}, não encontramos seu dono(a).`);
    }
  }

  const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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
]

const pet = "Max";
  

  encontrarDonoDoPet(pet, usuarios);
  





