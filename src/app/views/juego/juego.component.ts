import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { modelDecisiones } from 'src/app/models/decisiones';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  decisiones = modelDecisiones;
  decisionSelect = 'decision1';

  constructor(
    public dialogRef: MatDialogRef<JuegoComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.decisiones);
  }

  validarOpcion(opc) {
    console.log(opc);
    if (opc === this.decisiones[this.decisionSelect].respuesta) {
      if (opc === 'Salir') {
        console.log('Has ganado!');
        this.dialogRef.close();
      } else {
        this.decisionSelect = this.decisiones[this.decisionSelect].decision;
      }
    } else {
      this.decisionSelect = 'decisionMuerte';
    }
  }

}
