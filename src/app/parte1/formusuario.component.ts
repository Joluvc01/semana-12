import { Component, OnInit } from '@angular/core';

import { Usuariocl } from './usuariocl';
import { UsuarioService } from './usuario.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent implements OnInit {


  usuariocl: Usuariocl = new Usuariocl();
  titulo: string = "Registro de Usuario";

  constructor(private usuarioservice: UsuarioService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  
  // CARGAR PERSONA
  cargar(): void {
    this.activatedrouter.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.usuarioservice.get(id).subscribe(
            es => this.usuariocl = es
          );
        }
      }
    )
  }

  // NUEVA PERSONA
  create(): void {
    console.log("CREACION DE REGISTRO");
    console.log(this.usuariocl);

    this.usuarioservice.create(this.usuariocl).subscribe(
      res => this.router.navigate(['/parte1'])
    );
  }

  //ACTUALIZAR PERSONA
  update(): void {
    console.log("MODIFICACION DE REGISTRO");
    console.log(this.usuariocl);

    this.usuarioservice.update(this.usuariocl).subscribe(
      res => this.router.navigate(['/parte1'])
    );

  }






}
