import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { simular } from '../../store/simple.action';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelComponent {

  url: string = 'http//finaneveris.com';
  meuFormGroup: FormGroup;
  renda: number=0
  parcelas:number=0
  vimovel:any
  calculo:any
  juros:number = 0.0085


  constructor(private FormBuilder: FormBuilder, private store: Store <{renda:any}>){

    this.meuFormGroup = this.FormBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      datanascimento: ['', Validators.required],
      celular: ['', Validators.required],
      profissao: ['', Validators.required],
      endereco: ['', Validators.required],
      vimovel: ['', Validators.required],
      parcelas: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
    ]]

});

this.store.select("renda").subscribe((res)=> this.renda=res)


}

  ngOnInit() {


    console.log(this.renda)

      }
      simular() {
        this.vimovel = this.meuFormGroup.value.vimovel;
        this.parcelas = this.meuFormGroup.value.parcelas;
        this.calculo=(this.vimovel/this.parcelas)*1.0085;
        console.log(this.calculo)
        console.log (this.vimovel)
        console.log (this.parcelas)
        console.log (this.meuFormGroup)
        this.store.dispatch(simular({parcela:this.calculo}));

        }
  }
