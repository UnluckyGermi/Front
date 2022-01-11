import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { Router } from '@angular/router';
import { PerfilI } from 'src/app/modelos/perfil.interface';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  UpdateForm = new FormGroup({
    name : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    password2 : new FormControl('', Validators.required)
  })

  id_visitor: any = localStorage.getItem("id");
  name_visitor: any = localStorage.getItem("name");
  
  public visible: boolean = false;
  public profile: boolean = true;
  errorStatus: boolean = false;
  errorMsg:any = "";

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  clickChangue(){
    this.profile = false;
    this.visible = true;
  }

  ProfileChangue(form: PerfilI){

    if(form.password == form.password2){

      localStorage.setItem("name", form.name);
      localStorage.setItem("contraseña", form.password);

      this.api.sendChangues(form).subscribe(
        data => {
          location.reload();
          this.profile = true;
          this.visible = false;
        },

        error => {
          let err:string = error.status;
          console.log(err)
          this.errorStatus = true;
          this.errorMsg = "No ha sido posible hacer los cambios";
        }
      )
    }
    else{
      this.errorStatus = true;
      this.errorMsg = "No ha sido posible hacer los cambios";
    }
  }
}
