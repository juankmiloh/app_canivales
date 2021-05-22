import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JuegoComponent } from '../juego/juego.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  x: MediaQueryList;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.x = window.matchMedia('(max-width: 800px)');
  }

  // mostrar modal de opciones
  openDialog(): void {
    const dialogRef = this.dialog.open(JuegoComponent, {
      maxWidth: this.x.matches ? '90%' : '40%',
      // height: this.x.matches ? '' : '',
      disableClose: true,
      data: {},
    });
  }

}
