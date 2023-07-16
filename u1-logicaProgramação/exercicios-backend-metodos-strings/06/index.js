const celular = 7199918888;
const celular2 = 99918888;
const celular3 = 11999123456;

function formatarNumeroCelular(celular) {
    const numeroCelular = celular.toString();
    let celularFormatado = "";
  
    if (numeroCelular.length === 8) {
      celularFormatado = "9 " + numeroCelular.slice(0, 4) + "-" + numeroCelular.slice(4);
    } else if (numeroCelular.length === 9) {
      celularFormatado = numeroCelular.slice(0, 1) + " " + numeroCelular.slice(1, 5) + "-" + numeroCelular.slice(5);
    } else if (numeroCelular.length === 10) {
      celularFormatado = "(" + numeroCelular.slice(0, 2) + ") 9 " + numeroCelular.slice(2, 6) + "-" + numeroCelular.slice(6);
    } else if (numeroCelular.length === 11) {
      celularFormatado = "(" + numeroCelular.slice(0, 2) + ") " + numeroCelular.slice(2, 3) + " " + numeroCelular.slice(3, 7) + "-" + numeroCelular.slice(7);
    }
  
    return celularFormatado;
  }
  
  console.log(formatarNumeroCelular(celular));
  console.log(formatarNumeroCelular(celular2));
  console.log(formatarNumeroCelular(celular3));
  