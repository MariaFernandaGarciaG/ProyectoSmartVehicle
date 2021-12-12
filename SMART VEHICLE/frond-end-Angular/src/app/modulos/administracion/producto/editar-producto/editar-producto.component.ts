/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.snapshot.params["id"];
  }

}
*/

//editar producto component
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProductoService } from '../../../../servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from '../../../../modelos/producto.modelo';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  id: string = '';
  fgValidador2: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'tipo': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'placa': ['',[Validators.required]],
    'marca': ['',[Validators.required]],
    'cantidadPasajeros': ['',[Validators.required]],
  })
  
    constructor(private fb:FormBuilder,
      private productoServicio: ProductoService,
      private router: Router,
      private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params["id"];
      this.BuscarProducto();
    }

    BuscarProducto(){
      this.productoServicio.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProducto) => {
        this.fgValidador2.controls["id"].setValue(this.id);
        this.fgValidador2.controls["tipo"].setValue(datos.tipo);
        this.fgValidador2.controls["nombre"].setValue(datos.nombre);
        this.fgValidador2.controls["placa"].setValue(datos.placa);
        this.fgValidador2.controls["marca"].setValue(datos.marca);
        this.fgValidador2.controls["cantidadPasajeros"].setValue(datos.cantidadPasajeros);
      })
    }
  
    EditarProducto(){
      let tipo = this.fgValidador2.controls['tipo'].value;
      let nombre = this.fgValidador2.controls['nombre'].value;
      let placa = this.fgValidador2.controls['placa'].value;
      let marca = this.fgValidador2.controls['marca'].value;
      let cantidadPasajeros = this.fgValidador2.controls['cantidadPasajeros'].value;
      let p = new ModeloProducto();
      p.tipo = tipo;
      p.nombre = nombre;
      p.placa = placa;
      p.marca = marca;
      p.cantidadPasajeros = cantidadPasajeros;
      p.id = this.id;
      this.productoServicio.ActualizarProducto(p).subscribe((datos: ModeloProducto)=>{
        alert("Producto actalizado");
        this.router.navigate(["/administracion/listar-productos"]);
      }, (error:any)=>{ 
        alert("Erorr :: Producto NO actualzado");
      })
    }

}