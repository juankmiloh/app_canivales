import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JuegoComponent } from '../juego/juego.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.openDialog();
  }

  // mostrar modal de opciones
  openDialog(): void {
    const dialogRef = this.dialog.open(JuegoComponent, {
      // height: '35em',
      width: '40%',
      disableClose: true,
      data:
        {
          // view: this.view,
          // fabOptions: this.fabOptions,
          // optionsMap: this.options,
          // suiAnios: this.suiAnios,
          // suiCausas: this.suiCausas,
          // suiEmpresas: this.suiEmpresas,
          // updateLayerCSV: this.updateLayerCSV,
          // dataCSV: this.dataCSV,
        },
    });
    // subscribe to observable que se ejecuta despues de cerrar el modal, obtiene los valores del hijo
    // dialogRef.afterClosed().subscribe((dataFromModal: IOptionsMapa) => {
    //   // console.log('The dialog was closed', dataFromModal);
    //   if (dataFromModal !== undefined) {
    //     this.updateLayerCSV = true;
    //     this.addLayer(dataFromModal).then((data) => {
    //       this.view.map.layers = data; // Se agrega un nuevo layer CSV al mapa
    //     });
    //   }
    // });
    // // subscribe to observable que se ejecuta cuando se da click al backdrop del modal
    // dialogRef.backdropClick().subscribe((data) => {
    //   // console.log('CLICK BACKDROP!', data);
    // });
  }

}
