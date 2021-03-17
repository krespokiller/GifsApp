import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcComponent } from './gc/gc.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [GcComponent, BusquedaComponent, ResultadosComponent],
  imports: [
    CommonModule
  ],
  exports:[
    GcComponent
  ]
})
export class GifsModule { }
