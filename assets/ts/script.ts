abstract class Lavoratore {
  nome: string;
  cognome: string;
  reddito?: Reddito;
  protected codRedditivita?: number;
  constructor(nome: string, cognome: string, reddito: number) {
    this.nome = nome;
    this.cognome = cognome;
    this.reddito = new Reddito(reddito);
  }
}

class Ingegnere extends Lavoratore {
  codRedditivita = 48;
}

class Commerciante extends Lavoratore {
  codRedditivita = 28;
}

class Operaio extends Lavoratore {
  codReddittivita = 30;
}

class Reddito {
  codRedditivita?: number;
  redditoAnnuoLordo: number;
  tasseINPS: number = 33;
  tasseIRPEF?: number;
  redditoAnnuoNetto?: number;
  constructor(redditoAnnuoLordo: number) {
    this.redditoAnnuoLordo = redditoAnnuoLordo;
  }

  getUtileTasse() {
    if (this.redditoAnnuoLordo < 15000) {
      this.tasseIRPEF = 23;
    } else if (this.redditoAnnuoLordo < 28000) {
      this.tasseIRPEF = 25;
    } else if (this.redditoAnnuoLordo < 50000) {
      this.tasseIRPEF = 35;
    } else {
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
    let persona = new Ingegnere(inputName.value, inputSurname.value, Number(inputReddito.value));
    persona.reddito?.getUtileTasse();
    persona.reddito?.getRedditoAnnuoNetto();
    console.log(persona);
    p.innerHTML += String(`Nome: ${persona.nome} <br>
                        Cognome: ${persona.cognome} <br>
                    RedditoLordo: ${persona.reddito?.redditoAnnuoLordo}<br>
                    RedditoNetto: ${persona.reddito?.redditoAnnuoNetto}<br>
                        <br>`);
  });
};
