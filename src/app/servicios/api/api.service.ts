import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { MapaI } from '../../modelos/mapa.interface';
import { AttractionI } from '../../modelos/attractions.interface';
import { ADDAttractionI } from '../../modelos/addattractions.interface';
import { VisitorI } from '../../modelos/visitor.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistryI } from 'src/app/modelos/registry.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url_registry:string = "http://25.63.83.208:8080/";
  url_engine:string = "http://25.63.83.208:8081/";

  constructor(private http: HttpClient) { }

  httpheaders = new HttpHeaders({
    'Authorization': <string>localStorage.getItem("token")
  });

  loginById(form: LoginI):Observable<string>{
    let dir = this.url_registry + "login";
    return this.http.post(dir, form, {responseType:'text'});
  }

  newRegistry(form: RegistryI):Observable<string>{
    let dir = this.url_registry + "registry";
    return this.http.post(dir, form, {responseType:'text'});
  }

  move(dir: string):Observable<any>{
    let url = this.url_engine + "visitors/" + localStorage.getItem("id") + "/" + dir;
    console.log(localStorage.getItem("id"));
    console.log(url);
    return this.http.get(url, {headers: this.httpheaders});
  }

  getMap():Observable<any>{
    let dir_map = this.url_engine + "map";
    return this.http.get(dir_map, {headers: this.httpheaders});
  }

  getVisitors():Observable<VisitorI[]>{ //Se supone que son los usuarios registrados.
    let dir = this.url_engine + "visitors";
    return this.http.get<VisitorI[]>(dir, {headers: this.httpheaders});
  }

  deleteVisitor():Observable<VisitorI>{
    let url = this.url_engine + "visitors/" + localStorage.getItem("id");
    console.log(localStorage.getItem("id"));
    console.log(url);
    return this.http.delete<VisitorI>(url, {headers: this.httpheaders});
  }

  getAttractions():Observable<AttractionI[]>{ //Atracciones
    let dir = this.url_engine + "attractions";
    return this.http.get<AttractionI[]>(dir, {headers: this.httpheaders});
  }

  addAttractions(form: ADDAttractionI):Observable<string>{
    let url = this.url_engine + "attractions";
    //console.log(localStorage.getItem("idA"));
    console.log(url);
    return this.http.post<string>(url, form, {headers: this.httpheaders});
  }

  deleteAttractions(id: number):Observable<string>{
    let url = this.url_engine + "attractions/" + id;
    console.log(url);
    return this.http.delete<string>(url, {headers: this.httpheaders});
  }
}
