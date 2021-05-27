import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  scores: any[] = [];
  banderaScores = false;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ScoreComponent>,
    private scoresService: ScoresService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  async ngOnInit(): Promise<void> {
    this.afterOpenDialog();
  }

  afterOpenDialog() {
    this.bottomSheetRef.afterOpened().subscribe(async (evt) => {
      await this.loadScores();
    });
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
  async loadScores() {
    await this.scoresService.getScores().then( (resp: any) => {
      // console.log('scores -> ', resp);
      let resultados = resp;
      resultados = this.ordenarArray(resultados, 'second');
      resultados = this.ordenarArray(resultados, 'minute');
      resultados = this.ordenarArray(resultados, 'hour');
      this.scores = resultados;
      this.banderaScores = true;
      this.changeDetectorRef.detectChanges(); // Línea para detectar y actaulizar los cambios reactivos en el modal
    }, (error) => {
      // console.log(error);
    });
  }

}
