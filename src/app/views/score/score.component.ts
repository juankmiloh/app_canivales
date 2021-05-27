import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  scores: any[] = [];

  constructor(
    private scoresService: ScoresService
  ) { }

  ngOnInit(): void {
    this.loadScores();
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

  // Se hace llamado al servicio para obtener scores
  loadScores() {
    this.scoresService.getScores().then( (resp: any) => {
      // console.log('scores -> ', resp);
      this.scores = resp;
      this.scores = this.ordenarArray(this.scores, 'second');
      this.scores = this.ordenarArray(this.scores, 'minute');
      this.scores = this.ordenarArray(this.scores, 'hour');
    }, (error) => {
      // console.log(error);
    });
  }

}
