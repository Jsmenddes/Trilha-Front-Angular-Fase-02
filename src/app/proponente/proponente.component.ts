import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from "@angular/forms";
import { MsgerrorService } from '../services/msgerror.service'
import { Store } from '@ngrx/store';
import { alterar } from '../simple.action'
import { Pipe, PipeTransform } from '@angular/core';

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

  constructor(private FormBuilder: FormBuilder,private msgerrorservice: MsgerrorService, private store: Store<{renda:any}>) {

    // this.meuFormGroup = this.FormBuilder.group({
      this.meuFormGroup = MsgerrorService.meuFormGroup;

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
