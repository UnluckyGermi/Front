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
  mapa2D: string[] = [];
  mapaTemperaturas: string[] = [];

  pos: number = -1;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getMap().subscribe(
      data => {
        let map = data;
        
        for(let i = 0; i < map.length; i++){
          let e = map[i]
          var valores = /^[0-9]+$/;
          if(e == null || e.match(valores)){
            this.mapa2D[i] = map[i];
            continue;
          }
          if(e == localStorage.getItem("id")){
            this.pos = i;
          }
          this.mapa2D[i] = map[i].charAt(0).toUpperCase();
        }
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )

    this.api.getWeather().subscribe(
      data => {
        this.mapaTemperaturas = data;
        
        
      }, 
      error => {
        let err:string = error.status;
        console.log(err)
      }
    )
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
