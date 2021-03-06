import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { modelDecisiones } from 'src/app/models/decisiones';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  decisiones = modelDecisiones;
  decisionSelect = 'decision0';
  horas = 0;
  minutos = 0;
  segundos = 0;
  interval: any;
  scores: any;
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;
  listaDecisiones: any[];

  constructor(
    public dialogRef: MatDialogRef<JuegoComponent>,
    private snackBar: MatSnackBar,
    private scoresService: ScoresService
  ) { }

  ngOnInit(): void {
    this.startTimer();
    this.listaDecisiones = this.random_elems(this.decisiones[this.decisionSelect].opciones, 3);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.segundos >= 0) {
        this.segundos++;
        if (this.segundos > 59) {
          this.segundos = 0;
          this.minutos++;
          if (this.minutos > 59) {
            this.minutos = 0;
            this.horas++;
          }
        }
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  validarOpcion(opc: string) {
    if (this.decisiones[this.decisionSelect].tipoDecision === 'Final') {
      this.pauseTimer();
    }
    if (opc === this.decisiones[this.decisionSelect].respuesta || opc === this.decisiones[this.decisionSelect].respuesta2) {
      if (opc === 'Guardar') {
        // console.log('Has ganado!');
        const jugador = sessionStorage.getItem('jugador');
        const celular = sessionStorage.getItem('cellphone');
        const model = { name: jugador, hour: this.horas, minute: this.minutos, second: this.segundos, cellphone: celular };
        this.scoresService.setScores(model);
        this.dialogRef.close();
        this.openSnackBar(`${jugador} se ha guardado tu score exitosamente!`, null);
      } else {
        if (opc === this.decisiones[this.decisionSelect].respuesta2) {
          this.decisionSelect = this.decisiones[this.decisionSelect].siguienteDecision2;
        } else {
          this.decisionSelect = this.decisiones[this.decisionSelect].siguienteDecision;
        }
        this.listaDecisiones = this.random_elems(this.decisiones[this.decisionSelect].opciones, 3);
      }
    } else {
      this.decisionSelect = 'decisionMuerte';
      this.listaDecisiones = this.decisiones[this.decisionSelect].opciones;
    }
  }

  // Mostrar mensaje flotante en el footer de la pagina
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'bottom'
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  // Funcion para ordenar aleatoriamente el array de decisiones
  random_elems(arr: string | any[], count: number) {
    const len = arr.length;
    const lookup = {};
    const tmp = [];

    if (count > len) {
      count = len;
    }

    for (let i = 0; i < count; i++) {
      let index: string | number;
      do {
        // tslint:disable-next-line: no-bitwise
        index = ~~(Math.random() * len);
      } while (index in lookup);
      lookup[index] = null;
      tmp.push(arr[index]);
    }
    return tmp;
  }

}
