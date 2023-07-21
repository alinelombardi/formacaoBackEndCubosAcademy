const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    }
  ];

  const verificaIdade = (usuarios) => {
    const faixaEtaria = usuarios.filter((idade) => {
        return idade.idade >= 18 && idade.idade <= 65
    });
    const temHabilitacao = faixaEtaria.every((habilitacao) => {
        return habilitacao.habilitado === true
    });
    if(temHabilitacao) {
        return "todos passaram no teste"
    } else {
        return "todos precisam estar habilitados"
    }
  };

  const resultado = verificaIdade(usuarios);
  console.log(resultado);