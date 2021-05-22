import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x: any;
  bottomSheetRef: any; // modal acerca de

  constructor(
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.x = window.matchMedia('(max-width: 800px)'); // Si hace match con dispositivos móviles
  }

  // mostrar modal de video
  openDialog(): void {
    const dialogRef = this.dialog.open(VideoComponent, {
      closeOnNavigation: false,
      maxWidth: this.x.matches ? '90%' : '60%',
      // height: this.x.matches ? '100%' : '',
      disableClose: true,
      data: {},
    });
  }

  // Mostrar modal de acerca de
  openBottomSheet(): void {
    this.bottomSheetRef = this.bottomSheet.open(NosotrosComponent, {
      data: {} // Se pasan valores al modal
    });
  }

}
