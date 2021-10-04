import { CredReprovadoComponent } from './credito-banco/cred-reprovado/cred-reprovado.component';
import { CreditoBancoComponent } from './credito-banco/credito-banco.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimuladorListComponent } from './simulador/simulador-list.component';
import { ProponenteComponent } from './proponente/proponente.component';
import { Proponente2Component } from './proponente2/proponente2.component';

import { ImovelComponent } from './imovel/imovel.component';
import { AprovadoComponent } from './resultados/aprovado/aprovado.component'


const routes: Routes = [
  { path:'',component: SimuladorListComponent },
  { path:'proponente',component: ProponenteComponent },
  { path:'inserir', component: Proponente2Component},
  { path:'dados-imovel',component: ImovelComponent },
  { path:'simular',component: AprovadoComponent },
  { path:'credito-apro',component: CreditoBancoComponent },
  { path:'cred-reprovado',component: CredReprovadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
