import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarAsesorComponent } from './persona/asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './persona/asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './persona/asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './persona/asesor/eliminar-asesor/eliminar-asesor.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path:'crear-persona',
    component: CrearAsesorComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'editar-persona',
    component: EditarAsesorComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'eliminar-persona',
    component: EliminarAsesorComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'buscar-persona',
    component: BuscarAsesorComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-producto/:id',
    component: EliminarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-productos',
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
