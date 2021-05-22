import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.openDialog();
  }

  // mostrar modal de video
  openDialog(): void {
    const dialogRef = this.dialog.open(VideoComponent, {
      // height: '35em',
      width: '100%',
      disableClose: true,
      data: {},
    });
  }

}
