import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = "http://localhost:9898/login";

  constructor(private http: HttpClient) { }

  // LISTAR 
  getAll(): Observable<Login[]> {
    return this.http.get<Login[]>(this.url);
  }
  
  // CREAR 
  create(login: Login): Observable<Login> {
    return this.http.post<Login>(this.url, login);
  }
  // BUSCAR 
  get(id: number): Observable<Login> {
    return this.http.get<Login>(this.url + '/' + id);
  }
  // MODIFICAR 
  update(login: Login): Observable<Login> {
    return this.http.put<Login>(this.url, login);
  }
  // ELIMINAR 
  delete(id: number): Observable<Login> {
    return this.http.delete<Login>(this.url + '/' + id);
  }


}

