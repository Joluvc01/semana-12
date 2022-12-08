import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Usuariocl } from './usuariocl';


@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.css']
})
export class Parte1Component implements OnInit {

  usuariocl = null as any;
  
  constructor(private usuarioservice: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioservice.getAll().subscribe(
      result => this.usuariocl = result);
  }


//ELIMINAR PERSONA
delete(usuariocl: Usuariocl): void {
  console.log("ELIMINACION DE PERSONA");

  this.usuarioservice.delete(usuariocl.id).subscribe(
    res => this.usuarioservice.getAll().subscribe(
      response => this.usuariocl = response
    )
  );
}





}
