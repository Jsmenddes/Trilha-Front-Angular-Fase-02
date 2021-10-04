import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { alterar } from '../../store/simple.action'

@Component({
  selector: 'app-proponente',
  templateUrl: './proponente.component.html',
  styleUrls: ['./proponente.component.css']
})
export class ProponenteComponent implements OnInit {


    example = new FormGroup({
    cpf: new FormControl(''),
    date: new FormControl(''),
    phone: new FormControl(''),
    price: new FormControl(''),
    renda: new FormControl('')

});


  public meuFormGroup: FormGroup;

  constructor(private FormBuilder: FormBuilder, private store: Store<{renda:any}>) {

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

ngOnInit(): void {


}
  salvar() {
    this.store.dispatch(alterar({renda:this.meuFormGroup.value.nome}));
    console.log(this.meuFormGroup.value.nome)
}
onSubmit(): void {
  console.log(this.meuFormGroup.valid);

  if (this.meuFormGroup) {

  }

}
}
