import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { modelDecisiones } from 'src/app/models/decisiones';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  decisiones = modelDecisiones;
  decisionSelect = 'decision1';
  horas = 0;
  minutos = 0;
  segundos = 0;
  interval: any;
  scores: any;

  constructor(
    public dialogRef: MatDialogRef<JuegoComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.startTimer();
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
    if (opc === 'Rociarle quipitos') {
      this.pauseTimer();
    }
    if (opc === this.decisiones[this.decisionSelect].respuesta) {
      if (opc === 'Guardar') {
        // console.log('Has ganado!');
        const jugador = sessionStorage.getItem('jugador');
        this.scores = JSON.parse(localStorage.getItem('scores'));
        if (!this.scores) {
          this.scores = [];
        }
        this.scores.push({ user: jugador, horas: this.horas, minutos: this.minutos, segundos: this.segundos });
        localStorage.setItem('scores', JSON.stringify(this.scores));
        this.dialogRef.close();
        this.openSnackBar(`${jugador} se ha guardado tu score exitosamente!`, null);
      } else {
        this.decisionSelect = this.decisiones[this.decisionSelect].decision;
      }
    } else {
      this.decisionSelect = 'decisionMuerte';
    }
  }

  // Mostrar mensaje flotante en el footer de la pagina
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'bottom'
    });
  }

}