import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  serverUrl = 'https://canivales-app.herokuapp.com/app/adventure';

  constructor(public http: HttpClient) { }

  // Obtener scores
  getScores() {
    return new Promise((resolve, reject) => {
      this.http.get<any[]>(`${this.serverUrl}/scores`).toPromise().then(res => {
        resolve(res);
      }, (error) => {
        resolve(error);
      });
    });
  }

  // Enviar data de scores
  setScores(data) {
    return this.http.post(`${this.serverUrl}/saveScore`, data).subscribe((resp) => {
      // console.log(resp);
    });
  }

  // Capturamos el estado del error y el mensaje
  private handleError(err: HttpErrorResponse) {
    const error = {
      status: err.status,
      message: err.message,
    };
    return throwError(error);
  }

}
