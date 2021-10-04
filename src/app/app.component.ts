import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Finaneveris';

  name: string = 'jessica';

  constructor () {
  }
}
