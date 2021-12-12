import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as cryptoJS from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group(
  {
    'usuario':['',[Validators.required, Validators.email]],
    'clave':['',[Validators.required]]
  }
  );

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
    //this.fgValidator.controls["usuario"].setValue("TU CORREO"),
    //this.fgValidator.controls["clave"].setValue("TU CONTRASEÑA")
  }
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    //alert("usuario"+usuario+ "--" + "contrañseña"+contraseña);
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) => {
      //alert ("Asesor existe");
      this.servicioSeguridad.AlmacenarSesion(datos);
    },(error: any) => {
      alert("Asesor no registrado");
    })
  }

}
