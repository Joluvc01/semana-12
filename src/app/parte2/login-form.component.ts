import { Component, OnInit } from '@angular/core';

import { Login } from './login';
import { LoginService } from './login.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  login: Login = new Login();
  titulo: string = "Login";

  constructor(private loginservice: LoginService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  
  // CARGAR PERSONA
  cargar(): void {
    this.activatedrouter.params.subscribe(
      e => {
        let id = e['id_login'];
        if (id) {
          this.loginservice.get(id).subscribe(
            es => this.login = es
          );
        }
      }
    )
  }

  // NUEVA PERSONA
  create(): void {
    console.log("CREACION DE REGISTRO");
    console.log(this.login);

    this.loginservice.create(this.login).subscribe(
      res => this.router.navigate(['/parte2'])
    );
  }

  //ACTUALIZAR PERSONA
  update(): void {
    console.log("MODIFICACION DE REGISTRO");
    console.log(this.login);

    this.loginservice.update(this.login).subscribe(
      res => this.router.navigate(['/parte2'])
    );

  }






}
