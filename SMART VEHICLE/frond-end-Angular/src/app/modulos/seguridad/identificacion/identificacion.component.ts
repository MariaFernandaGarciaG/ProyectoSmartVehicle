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
    'contraseña':['',[Validators.required]]
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
    let contraseña = this.fgValidador.controls["contraseña"].value;
    //alert("usuario"+usuario+ "--" + "contrañseña"+contraseña);
    let contraseñacifrada = cryptoJS.MD5(contraseña).toString();
    this.servicioSeguridad.Identificar(usuario, contraseñacifrada).subscribe((datos:any) => {
      alert ("Asesor existe");
    },(error: any) => {
      alert("Asesor no registrado");
    })
  }

}
