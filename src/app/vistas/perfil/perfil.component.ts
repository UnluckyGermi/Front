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
    new_name : new FormControl('', Validators.required),
    new_password : new FormControl('', Validators.required),
    new_password2 : new FormControl('', Validators.required)
  })

  id_visitor: any = localStorage.getItem("id");
  name_visitor: any = localStorage.getItem("name");
  pass_visitor: any = localStorage.getItem("contraseña");
  
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
    if(form.NEWpassword == form.NEWpassword2 && form.NEWpassword != this.pass_visitor){

      localStorage.setItem("name", form.NEWname);
      localStorage.setItem("contraseña", form.NEWpassword);

      this.api.sendChangues(form).subscribe(
        data => {
          location.reload();
          this.profile = true;
          this.visible = false;
        })
    }
    else{
      /**error => {
        let err:string = error.status;
        console.log(err)
        this.errorStatus = true;
        this.errorMsg = "No ha sido posible hacer los cambios";
      }**/
      this.errorStatus = true;
      this.errorMsg = "Las contraseñas no son iguales";
    }
  }
}
