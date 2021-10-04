import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MsgerrorService } from '../services/msgerror.service'

import { Store } from '@ngrx/store';
import { alterar } from '../simple.action'


@Component({
  selector: 'app-proponente2',
  templateUrl: './proponente2.component.html',
  styleUrls: ['./proponente2.component.css']
})
export class Proponente2Component {
  renda1:any;
  soma=0;
  propo1=0;
  meuFormGroup: FormGroup;

  constructor
  (private FormBuilder: FormBuilder, private msgerrorservice: MsgerrorService,private store: Store<{renda:any}>) {

    this.meuFormGroup = this.FormBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      datanascimento: ['', Validators.required],
      celular: ['', Validators.required],
      profissao: ['', Validators.required],
      endereco: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
    ]]

});

}

  ngOnInit() {
    this.store.select("renda").subscribe((res)=> this.propo1=res)


      }
      salvar() {
  this.soma=this.propo1+this.meuFormGroup.value.nome
  this.store.dispatch(alterar({renda:this.soma}));

    }

}

