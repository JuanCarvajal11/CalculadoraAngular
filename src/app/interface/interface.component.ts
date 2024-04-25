import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
})
export class InterfaceComponent implements OnInit {
  numerosIngresados: string = '';
  ultimoResultado: string = '';
  exp = '';
  floatActive1: boolean = false;
  floatActive2: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  agregarCaracter(caracter: string) {
    this.numerosIngresados += caracter;
  }

  eliminarCaracter(): void {
    let result = '';
    for (let i = 0; i < this.numerosIngresados.length - 1; i++) {
      result += this.numerosIngresados[i];
    }
    this.numerosIngresados = result;
  }

  eliminarTodo(): void {
    this.numerosIngresados = '';
  }

  getRoot(number: number): number {
    let low = 0;
    let high = number;
    let mid = (low + high) / 2;

    while (low <= high) {
        if (mid * mid === number) {
            return mid;
        } else if (mid * mid < number) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        mid = (low + high) / 2;
    }

    return mid;
}


  operar() {
    let num1 = '';
    let num2 = '';
    let operador = '';
    let isoperadorFound = false;

    for (let i = 0; i < this.numerosIngresados.length; i++) {
      const valorActual = this.numerosIngresados[i];

      if (
        valorActual === '+' ||
        valorActual === '-' ||
        valorActual === '*' ||
        valorActual === '÷' ||
        valorActual === 'E' ||
        valorActual === 'L' ||
        valorActual === '²' ||
        valorActual === '³' ||
        valorActual === '^' ||
        valorActual === '√'
      ) {
        isoperadorFound = true;
        operador = valorActual;
      } else if (!isoperadorFound) {
        num1 += valorActual;
      } else {
        num2 += valorActual;
      }
    }
    if (operador === '+') {
      const result = +num1 + +num2;
      this.numerosIngresados += ' = ' + result;
      this.ultimoResultado = result + '';
    }

    if (operador === '-') {
      const result = +num1 - +num2;
      this.numerosIngresados += ' = ' + result;
      this.ultimoResultado = result + '';
    }

    if (operador === 'E') {
      for (let i = 0; i < num1.length; i++) {
        const validarFloat = num1[i];
        if (validarFloat === '.') {
          this.floatActive1 = true;
        }
      }
      for (let i = 0; i < num2.length; i++) {
        const validarFloat2 = num2[i];
        if (validarFloat2 === '.') {
          this.floatActive2 = true;
        }
      }

      if (this.floatActive2 == true) {
        this.numerosIngresados = 'Sintax Error';
      } else if (this.floatActive1 == true && this.floatActive2 == false) {
        for (let i = 0; i < +num2; i++) {
          this.exp = num1 += '0';
        }
        let resultadotexp = '';
        for (let i = 0; i < this.exp.length - 1; i++) {
          const caracterActual = this.exp[i];
          if (caracterActual !== '.') {
            resultadotexp += caracterActual;
          }
        }
        this.numerosIngresados += ' = ' + resultadotexp;
        this.ultimoResultado = resultadotexp;
      } else {
        for (let i = 0; i < +num2; i++) {
          this.exp = num1 += '0';
        }
        this.numerosIngresados += ' = ' + this.exp;
        this.ultimoResultado = this.exp;
      }
    }

    if (operador === '*') {
      const result = +num1 * +num2;
      this.numerosIngresados += ' = ' + result;
      this.ultimoResultado = result + '';
    }

    if (operador === '÷') {
      if (num2 != '0') {
        const result = +num1 / +num2;
        this.numerosIngresados += ' = ' + result;
        this.ultimoResultado = result + '';
      } else {
        this.numerosIngresados = 'Math Error';
      }
    }

    if (operador === 'L') {
    }
    if (operador === '²') {
      if (num2 == '') {
        const resultado = +num1 * +num1;
        this.numerosIngresados += ' = ' + resultado;
        this.ultimoResultado = resultado + '';
      } else {
        this.numerosIngresados = 'Sintax Error';
      }
    }

    if (operador === '²') {
      if (num2 == '') {
        const resultado = +num1 * +num1 ;
        this.numerosIngresados += ' = ' + resultado;
        this.ultimoResultado = resultado + '';
      } else {
        this.numerosIngresados = 'Sintax Error';
      }
    }
    if (operador === '³') {
      if (num2 == '') {
        const resultado = +num1 * +num1 * +num1;
        this.numerosIngresados += ' = ' + resultado;
        this.ultimoResultado = resultado + '';
      } else {
        this.numerosIngresados = 'Sintax Error';
      }
    }
    if (operador === '^') {
      let result = 1;
      for (let i = 0; i < +num2; i++) {
        result *= +num1;
      }
      this.numerosIngresados += ' = ' + result;
      this.ultimoResultado = result + '';
    }

    if (operador === '√') {
      if (num2 === '') {
        this.numerosIngresados += " = " + this.getRoot(+num1);

    }
  }
}

  ulResultado() {
    this.numerosIngresados = this.ultimoResultado;
  }
}
