import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { JuegoComponent } from './views/juego/juego.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ScoreComponent } from './views/score/score.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
