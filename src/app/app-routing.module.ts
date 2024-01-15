import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoComponent } from './home/candidato/candidato.component';
import { CandidatoDetalleComponent } from './home/candidato-detalle/candidato-detalle.component';

const routes: Routes = [
  { path: 'candidato', component: CandidatoComponent},
  { path: 'candidato-detalle/:id', component: CandidatoDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
