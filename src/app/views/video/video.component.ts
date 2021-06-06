import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JuegoComponent } from '../juego/juego.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  x: MediaQueryList;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<VideoComponent>,
  ) { }

  ngOnInit(): void {
    this.x = window.matchMedia('(max-width: 800px)');
  }

  // mostrar modal de opciones
  openDialog(): void {
    const dialogRef = this.dialog.open(JuegoComponent, {
      maxWidth: this.x.matches ? '90%' : '50%',
      // height: this.x.matches ? '100%' : '',
      disableClose: true,
      data: {},
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
