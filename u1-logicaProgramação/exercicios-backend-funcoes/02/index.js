const carro = {
    ligado: false,
    velocidade: 0,
    devolveStatus: function () {
        return this.ligado ? "ligado" : "desligado";
    },
    imprimeStatus: function () {
        console.log(`Carro ${this.devolveStatus()}. Velocidade: ${this.velocidade}.`);
    },
    ligar: function () {
        if(this.ligado === true) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            this.imprimeStatus();
        }
    },
    desligar: function () {
        if(this.ligado === false) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            this.imprimeStatus();
        }
    },
    acelerar: function () {
        if(this.ligado === false) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            this.velocidade += 10;
            this.imprimeStatus();
        }
    },
    desacelerar: function () {
        if(this.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
            this.imprimeStatus();
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();


