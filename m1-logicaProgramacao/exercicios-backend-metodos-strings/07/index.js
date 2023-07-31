const email = "aluno@cubos.academy";

function validarEmail(email) {
    if (!email.includes("@") || !email.includes(".")) {
        console.log("E-mail inválido");
    }

    if (email.startsWith(".") || email.endsWith(".")) {
        console.log("E-mail inválido");
    }

    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (dotIndex - atIndex < 2) {
        console.log("E-mail inválido");
    }

    console.log("E-mail válido");
}

validarEmail(email);
validarEmail('jose@cubos.academy');
validarEmail('jose@cubos.academy.br');
validarEmail('jose.messias@cubos.academy');
validarEmail('jose.messias@cubos.io');
validarEmail('jose@cubos');
validarEmail('jose.messias@cubos');
validarEmail('jose.messias@.');
validarEmail('jose.@cubos');
validarEmail('.@');
validarEmail('@.');
validarEmail('jose.messias@cubos.');
validarEmail('.messias@cubos.');
validarEmail('.messias@cubos');
