const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

const limiteRendimentos = 2855970 // EmCentravos

if(aposentada === true || portadoraDeDoenca == true) {
    console.log("ISENTA");
} else if(totalDeRendimentos < limiteRendimentos) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
    console.log("PEGA LEAO");
}