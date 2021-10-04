import { DataFormModule } from './proponente/data-form.module';
import { LOCALE_ID, NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SimuladorListComponent } from './simulador/simulador-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'

import { MatDividerModule } from '@angular/material/divider';
import { ImovelComponent } from './imovel/imovel.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ProponenteComponent } from './proponente/proponente.component';

import { Proponente2Component } from './proponente2/proponente2.component';
import { AprovadoComponent } from './resultados/aprovado/aprovado.component';
import { CreditoBancoComponent } from './credito-banco/credito-banco.component';
import { CredReprovadoComponent } from './credito-banco/cred-reprovado/cred-reprovado.component';

import { NgxMaskModule } from 'ngx-mask';
import { StoreModule } from '@ngrx/store';
import { simpleReducer, simpleReducer2 } from './simple.reducer';

@NgModule({



  declarations: [
    AppComponent,
    SimuladorListComponent,
    ImovelComponent,
    ResultadosComponent,
    ProponenteComponent,
    Proponente2Component,
    AprovadoComponent,
    CreditoBancoComponent,
    CredReprovadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatDividerModule,
    DataFormModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    StoreModule.forRoot ({ renda: simpleReducer, parcela: simpleReducer2}),
  ],
  providers: [
    [CurrencyPipe],
{
 provide: LOCALE_ID,
 useValue: 'pt-BR'
}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
