import { DataFormModule } from './components/proponente/data-form.module';
import { LOCALE_ID, NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SimuladorListComponent } from './components/simulador/simulador-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'

import { MatDividerModule } from '@angular/material/divider';
import { ImovelComponent } from './components/imovel/imovel.component';
import { ProponenteComponent } from './components/proponente/proponente.component';
import { Proponente2Component } from './components/proponente2/proponente2.component';
import { AprovadoComponent } from './resultados/aprovado/aprovado.component';

import { NgxMaskModule } from 'ngx-mask';
import { StoreModule } from '@ngrx/store';
import { simpleReducer, simpleReducer2 } from './store/simple.reducer';

@NgModule({



  declarations: [
    AppComponent,
    SimuladorListComponent,
    ImovelComponent,
    ProponenteComponent,
    Proponente2Component,
    AprovadoComponent,
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
