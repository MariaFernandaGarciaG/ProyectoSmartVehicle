/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ModeloProducto } from '../../../../modelos/producto.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

fgValidador: FormGroup = this.fb.group({
  'tipo': ['',[Validators.required]],
  'nombre': ['',[Validators.required]],
  'placa': ['',[Validators.required]],
  'marca': ['',[Validators.required]],
  'cantidadPasajeros': ['',[Validators.required]],
})

  constructor(private fb:FormBuilder,
    private productoServicio: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProducto(){
    let tipo = this.fgValidador.controls['tipo'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let placa = this.fgValidador.controls['placa'].value;
    let marca = this.fgValidador.controls['marca'].value;
    let cantidadPasajeros = this.fgValidador.controls['cantidadPasajeros'].value;
    let p = new ModeloProducto();
    p.tipo = tipo;
    p.nombre = nombre;
    p.placa = placa;
    p.marca = marca;
    p.cantidadPasajeros = cantidadPasajeros;
    this.productoServicio.CrearProducto(p).subscribe((datos: ModeloProducto)=>{
      alert("Producto Adicionado");
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error:any)=>{ 
      alert("Erorr :: Producto NO Adicionado");
    })
  }

}