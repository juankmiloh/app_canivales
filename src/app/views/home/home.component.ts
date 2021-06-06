import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ScoreComponent } from '../score/score.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x: any;
  bottomSheetRef: any; // modal acerca de
  jugador = '';
  cellphone: any;

  constructor(
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.x = window.matchMedia('(max-width: 800px)'); // Si hace match con dispositivos móviles
    this.jugador = sessionStorage.getItem('jugador');
    if (!this.jugador) {
      this.jugador = 'Invitado';
    }
  }

  // mostrar modal de video
  openDialog(): void {
    if (this.jugador === 'Invitado') {
      this.openDialogUser();
    } else {
      const dialogRef = this.dialog.open(VideoComponent, {
        closeOnNavigation: false,
        maxWidth: this.x.matches ? '90%' : '60%',
        // height: this.x.matches ? '100%' : '',
        disableClose: true,
        data: {},
      });
    }
  }

  // mostrar modal de usuario
  openDialogUser(): void {
    const dialogRef = this.dialog.open(UsuariosComponent, {
      closeOnNavigation: false,
      maxWidth: this.x.matches ? '90%' : '18%',
      // height: this.x.matches ? '100%' : '',
      disableClose: false,
      data: {},
    });

    // subscribe to observable que se ejecuta despues de cerrar el modal de usuario, obtiene los valores del hijo
    dialogRef.afterClosed().subscribe((dataFromModal) => {
      console.log('The dialog was closed', dataFromModal);
      if (dataFromModal !== undefined) {
        this.jugador = dataFromModal.user;
        this.cellphone = dataFromModal.cellphone;
        sessionStorage.setItem('jugador', this.jugador);
        sessionStorage.setItem('cellphone', this.cellphone);
      }
    });
  }

  // Mostrar modal scores
  openBottomSheetScores(): void {
    this.bottomSheetRef = this.bottomSheet.open(ScoreComponent, {
      data: {} // Se pasan valores al modal
    });
  }

  // Mostrar modal de acerca de
  openBottomSheet(): void {
    this.bottomSheetRef = this.bottomSheet.open(NosotrosComponent, {
      data: {} // Se pasan valores al modal
    });
  }

  salir() {
    this.jugador = 'Invitado';
    sessionStorage.clear();
  }

}
