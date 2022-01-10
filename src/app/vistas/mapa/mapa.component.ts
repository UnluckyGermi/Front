import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  inMap: boolean = false;
  mapApp: string = "";
  boolSaltoLinea: boolean = false;
  mapa2D: string[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getMap().subscribe(
      data => {
        let map = data;
        this.mapApp = data;
        this.inMap = true;
        
        for(let i = 0; i < map.length; i++){

          /**let newName = "";
          newName = map[i];
          let len = newName.length;
          console.log(newName)
          console.log(len)

          if(true){
            console.log(len)
            console.log(newName)
            console.log("ALERTA")
            this.mapa2D[i] = newName[0];
          }
          else{
            this.mapa2D[i] = map[i];
          }**/




          this.mapa2D[i] = map[i];
        }
        console.log(this.mapa2D)
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }

  saltoLinea(): Boolean{
    this.boolSaltoLinea = true;
    return this.boolSaltoLinea
  }

  up(): void{
    this.api.move("up").subscribe(
      data => {
        location.reload();
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }

  down(): void{
    this.api.move("down").subscribe(
      data => {
        location.reload();
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }

  right(): void{
    this.api.move("right").subscribe(
      data => {
        location.reload();
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }

  left(): void{
    this.api.move("left").subscribe(
      data => {
        location.reload();
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
  }

  goAdmin(): void{
    this.router.navigate(['admin']);
  }
}
