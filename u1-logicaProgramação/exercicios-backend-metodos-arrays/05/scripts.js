const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, nomePaciente) {
    pacientes.push(nomePaciente);
    console.log(pacientes.join(', '));
}

agendarPaciente(pacientes, "Aline")

function atenderPaciente(pacientes) {
    pacientes.shift();
    console.log(pacientes.join(', '));
} 
  
atenderPaciente(pacientes);

function cancelarAtendimento (pacientes, paciente) {
    const indice = pacientes.indexOf(paciente);
    pacientes.splice(indice, 1)
    console.log(pacientes.join(', '));
}

cancelarAtendimento(pacientes, "Maria");