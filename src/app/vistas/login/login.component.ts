import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    id : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  errorStatus: boolean = false;
  errorMsg:any = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  onClick(): void{
    this.router.navigate(['registry']);
  }

  checkLocalStorage(){
    if(localStorage.getItem("token")){
      this.router.navigate(['map']);
    }
  }

  onLogin(form: LoginI){
    this.api.loginById(form).subscribe(
      data => {
        let token:string = data;
        localStorage.setItem("token", token);
        localStorage.setItem("id", form.id);
        
        this.router.navigate(['map']);
      },

      error => {
        let err:string = error.status;
          this.errorStatus = true;
          this.errorMsg = "Usuario/Contraseña incorrecto";
      }
    )
  }

}
