import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
url = 'http:/localhost:3000';

  constructor(private http: HttpClient) { }

  Identificar(usuario: string, contraseña: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarAsesor`, {
      usuario: usuario,
      contraseña: contraseña
    },{
      headers: new HttpHeaders({
      })
    })
  }
}
