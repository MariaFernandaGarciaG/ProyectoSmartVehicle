import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
url = 'http:/localhost:3000';
datosUsuarioSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) { }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarAsesor`, {
      usuario: usuario,
      clave: clave,
    },{
      headers: new HttpHeaders({
      })
    })
  }
  AlmacenarSesion(datos: ModeloIdentificar){
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos= JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }
  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  seHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  VerificarSesionActual(){
    let datos = this.ObtenerDatosUsuarioEnSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioSesion.next(datos);
  }


  ObtenerDatosUsuarioEnSesion():any{
    return this.datosUsuarioSesion.asObservable();
  }
}
