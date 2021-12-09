import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAsesorComponent } from './persona/asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './persona/asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './persona/asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './persona/asesor/eliminar-asesor/eliminar-asesor.component';

const routes: Routes = [
  {
    path:'crear-persona',
    component: CrearAsesorComponent
  },
  {
    path:'editar-persona',
    component: EditarAsesorComponent
  },
  {
    path:'eliminar-persona',
    component: EliminarAsesorComponent
  },
  {
    path:'buscar-persona',
    component: BuscarAsesorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
