import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimuladorListComponent } from './components/simulador/simulador-list.component';
import { ProponenteComponent } from './components/proponente/proponente.component';
import { Proponente2Component } from './components/proponente2/proponente2.component';

import { ImovelComponent } from './components/imovel/imovel.component';
import { AprovadoComponent } from './resultados/aprovado/aprovado.component'


const routes: Routes = [
  { path:'',component: SimuladorListComponent },
  { path:'proponente',component: ProponenteComponent },
  { path:'inserir', component: Proponente2Component},
  { path:'dados-imovel',component: ImovelComponent },
  { path:'simular',component: AprovadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
