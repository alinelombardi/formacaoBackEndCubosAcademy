const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function atenderPaciente(pacientes, operacao, nomePaciente = '') {
    if (operacao === 'agendar') {
      pacientes.push(nomePaciente);
    } else if (operacao === 'atender') {
      pacientes.shift();
    }
  
    console.log(pacientes.join(', '));
  }
  
  
atenderPaciente(pacientes, 'atender');
  