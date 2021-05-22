import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { HomeComponent } from './views/home/home.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { ScoreComponent } from './views/score/score.component';
import { JuegoComponent } from './views/juego/juego.component';
import { VideoComponent } from './views/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    HomeComponent,
    UsuariosComponent,
    ScoreComponent,
    JuegoComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
