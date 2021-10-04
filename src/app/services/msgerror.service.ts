import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MsgerrorService {

  public static meuFormGroup: FormGroup;


  constructor(private FormBuilder:  FormBuilder) {

       MsgerrorService.meuFormGroup = this.FormBuilder.group({
        nome: ['', Validators.required],
        cpf: ['', Validators.required],
        datanascimento: ['', Validators.required],
        celular: ['', Validators.required],
        profissao: ['', Validators.required],
        renda: ['', Validators.required],
        vimovel: ['', Validators.required],
        parcela: ['', Validators.required],
        entrada: ['', Validators.required],
        endereco: ['', Validators.required],
        email: ['', [
          Validators.required,
          Validators.email
        ]]

      });
    }
  }
