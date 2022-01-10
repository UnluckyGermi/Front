import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { VisitorI } from '../../modelos/visitor.interface';
import { AttractionI } from '../../modelos/attractions.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { RegistryI } from 'src/app/modelos/registry.interface';
import { ADDAttractionI } from 'src/app/modelos/addattractions.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  AttractionForm = new FormGroup({
    pos : new FormControl('', Validators.required)
  })

  visitors: VisitorI[] = [];
  attractions: AttractionI[] = [];
  
  public atractionpos: number = 0;
  public admin: boolean = false;
  public addA: boolean = false;

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getVisitors().subscribe(
      data => {
        console.log(data)
        this.admin = true;
        this.visitors = data;
      },

      error => {
        let err:string = error.status;
        console.log(err)
      }
    )

    this.api.getAttractions().subscribe(
      data => {
        console.log(data)
        this.attractions = data;
      },

      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }

  deleteClick(): void{
    this.api.deleteVisitor().subscribe(
      data => {
        location.reload();
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }

  deleteAtracion(id: number){
    this.api.deleteAttractions(id).subscribe(
      data => {
        location.reload();
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }

  addAtracion(): void{
    this.addA = true;
  }

  addPosAttraction(form: AttractionI){
    this.api.addAttractions(form).subscribe(
      data => {
        this.addA = false;
        location.reload();
        //Redirect a formulario AddAtracción
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }
}
