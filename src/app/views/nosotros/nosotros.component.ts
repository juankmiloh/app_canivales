import { Component, OnInit } from '@angular/core';
import { modelEstudiantes } from 'src/app/models/estudiantes';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  estudiantes: any[];

  constructor() { }

  ngOnInit(): void {
    this.estudiantes = modelEstudiantes;
  }

}
