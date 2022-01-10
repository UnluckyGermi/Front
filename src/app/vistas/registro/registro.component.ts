import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { Router } from '@angular/router';
import { RegistryI } from 'src/app/modelos/registry.interface';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registryForm = new FormGroup({
    id : new FormControl('', Validators.required),
    name : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  //admin : boolean = false;
  errorStatus: boolean = false;
  errorMsg:any = "";

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onRegistry(form: RegistryI){
    this.api.newRegistry(form).subscribe(
      data => {
        this.router.navigate(['login']);
      },

      error => {
        let err:string = error.status;
          this.errorStatus = true;
          this.errorMsg = "No ha sido posible registrarte";
      }
    )
  }

}
