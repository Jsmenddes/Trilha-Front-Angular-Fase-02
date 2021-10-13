import { Dados } from './user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from'@angular/material/snack-bar'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DadosService {
  readById(id: string | null) {
    throw new Error('Method not implemented.');
  }

  baseUrl = "http://localhost:3001/users"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

showMessage(msg: string): void {
  this.snackBar.open(msg, 'X', {
    duration:3000,
    horizontalPosition: "right",
    verticalPosition:"top",
  })
}
create(users: Dados): Observable<Dados> {
  return this.http.post<Dados>(this.baseUrl, users)
}
read(): Observable<Dados[]> {
  return this.http.get<Dados[]>(this.baseUrl)
}
readByid(id: string):Observable<Dados> {
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Dados>(url)
}
update(users: Dados):Observable<Dados> {
  const url = `${this.baseUrl}/${users.id}`;
  return this.http.put<Dados>(url,users)

}
}
