import { Dados } from './../usuario/user.model';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../usuario/dados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  users!: Dados;


  constructor(
    private dadosservice: DadosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }



  updateName(): void {

  }

  cancel(): void {
    this.router.navigate(['/usuario'])
  }
}
