import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './login';


@Component({
  selector: 'app-parte1',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component implements OnInit {

  login = null as any;
  
  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginservice.getAll().subscribe(
      result => this.login = result);
  }


//ELIMINAR PERSONA
delete(login: Login): void {
  console.log("ELIMINACION DE PERSONA");

  this.loginservice.delete(login.id_login).subscribe(
    res => this.loginservice.getAll().subscribe(
      response => this.login = response
    )
  );
}


}
