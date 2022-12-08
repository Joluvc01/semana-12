import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuariocl } from './usuariocl';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = "http://localhost:9898/rest_usu";

  constructor(private http: HttpClient) { }

  // LISTAR 
  getAll(): Observable<Usuariocl[]> {
    return this.http.get<Usuariocl[]>(this.url);
  }
  
  // CREAR 
  create(usuariocl: Usuariocl): Observable<Usuariocl> {
    return this.http.post<Usuariocl>(this.url, usuariocl);
  }
  // BUSCAR 
  get(id: number): Observable<Usuariocl> {
    return this.http.get<Usuariocl>(this.url + '/' + id);
  }
  // MODIFICAR 
  update(usuariocl: Usuariocl): Observable<Usuariocl> {
    return this.http.put<Usuariocl>(this.url, usuariocl);
  }
  // ELIMINAR 
  delete(id: number): Observable<Usuariocl> {
    return this.http.delete<Usuariocl>(this.url + '/' + id);
  }


}
