import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-aprovado',
  templateUrl: './aprovado.component.html',
  styleUrls: ['./aprovado.component.css']
})
export class AprovadoComponent implements OnInit {
  meuFormGroup: FormGroup;
  parcela:any;
  calculo:any

  constructor(private FormBuilder: FormBuilder,private store: Store <{parcela:any,renda:any}>) {
    this.meuFormGroup = this.FormBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      datanascimento: ['', Validators.required],
      celular: ['', Validators.required],
      profissao: ['', Validators.required],
      endereco: ['', Validators.required],
      vimovel: ['', Validators.required],
      calculo: ['',Validators.required],
      parcela: ['',Validators.required],
      parcelas: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
    ]]

});


   }

  ngOnInit(): void {
    this.store.select('parcela').subscribe((res)=> this.calculo=res)
    console.log(this.calculo)
  }

}

