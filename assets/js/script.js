"use strict";
class Lavoratore {
    constructor(nome, cognome, reddito) {
        this.nome = nome;
        this.cognome = cognome;
        this.reddito = new Reddito(reddito);
    }
}
class Ingegnere extends Lavoratore {
    constructor() {
        super(...arguments);
        this.codRedditivita = 48;
    }
}
class Commerciante extends Lavoratore {
    constructor() {
        super(...arguments);
        this.codRedditivita = 28;
    }
}
class Operaio extends Lavoratore {
    constructor() {
        super(...arguments);
        this.codReddittivita = 30;
    }
}
class Reddito {
    constructor(redditoAnnuoLordo) {
        this.tasseINPS = 33;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
    getUtileTasse() {
        if (this.redditoAnnuoLordo < 15000) {
            this.tasseIRPEF = 23;
        }
        else if (this.redditoAnnuoLordo < 28000) {
            this.tasseIRPEF = 25;
        }
        else if (this.redditoAnnuoLordo < 50000) {
            this.tasseIRPEF = 35;
        }
        else {
            this.tasseIRPEF = 43;
        }
        return (this.redditoAnnuoLordo * this.tasseINPS) / 100 + (this.redditoAnnuoLordo * this.tasseIRPEF) / 100;
    }
    getTasseINPS() {
        return this.tasseINPS;
    }
    getTasseIRPEF() {
        return this.tasseIRPEF;
    }
    getRedditoAnnuoNetto() {
        return (this.redditoAnnuoNetto = this.redditoAnnuoLordo - this.getUtileTasse());
    }
}
window.onload = () => {
    let inputName = document.createElement("input");
    inputName.placeholder = "Nome";
    let inputSurname = document.createElement("input");
    inputSurname.placeholder = "Cognome";
    let inputReddito = document.createElement("input");
    inputReddito.placeholder = "Reddito";
    let button = document.createElement("button");
    let p = document.createElement("p");
    button.innerHTML = "Aggiungi Persona";
    document.body.appendChild(inputName);
    document.body.appendChild(inputSurname);
    document.body.appendChild(inputReddito);
    document.body.appendChild(button);
    document.body.appendChild(p);
    button.addEventListener("click", () => {
        var _a, _b, _c, _d;
        let persona = new Ingegnere(inputName.value, inputSurname.value, Number(inputReddito.value));
        (_a = persona.reddito) === null || _a === void 0 ? void 0 : _a.getUtileTasse();
        (_b = persona.reddito) === null || _b === void 0 ? void 0 : _b.getRedditoAnnuoNetto();
        console.log(persona);
        p.innerHTML += String(`Nome: ${persona.nome} <br>
                        Cognome: ${persona.cognome} <br>
                    RedditoLordo: ${(_c = persona.reddito) === null || _c === void 0 ? void 0 : _c.redditoAnnuoLordo}<br>
                    RedditoNetto: ${(_d = persona.reddito) === null || _d === void 0 ? void 0 : _d.redditoAnnuoNetto}<br>
                        <br>`);
    });
};
