class Visor {
  constructor(visorFirtsValue, visorSecondValue) {
    this.visorFirtsValue = visorFirtsValue;
    this.visorSecondValue = visorSecondValue;
    this.calculador = new Calculadora();
    this.typeOpera = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      dividir: "/",
      multiplicar: "X",
      restar: "-",
    };
  }

  delete() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.typeOpera = undefined;
    this.printValue();
  }
  computar(tipo) {
    this.typeOpera !== "igual" && this.calcular();
    this.typeOpera = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.printValue();
  }

  addNumber(numero) {
    if (numero == "." && this.valorActual.includes(".")) return;
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.printValue();
  }

  printValue() {
    this.visorFirtsValue.textContent = this.valorActual;
    this.visorSecondValue.textContent = `${this.valorAnterior} ${
      this.signos[this.typeOpera] || ""
    }`;
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculador[this.typeOpera](
      valorAnterior,
      valorActual
    );
  }
}
