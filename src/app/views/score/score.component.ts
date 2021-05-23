import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  scores: any;

  constructor() { }

  ngOnInit(): void {
    this.scores = JSON.parse(localStorage.getItem('scores'));
    this.scores = this.ordenarArray(this.scores, 'segundos');
    this.scores = this.ordenarArray(this.scores, 'minutos');
    this.scores = this.ordenarArray(this.scores, 'horas');
  }

  ordenarArray(array, propiedad) {
    array.sort((a, b) => {
      if (a[propiedad] > b[propiedad]) {
        return 1;
      }
      if (a[propiedad] < b[propiedad]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return array;
  }

}
