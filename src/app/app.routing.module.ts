import { NgModule } from '@angular/core';
import { ListasComponent } from './listas/listas.component';
import { CrearComponent } from './crear/crear.component';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

const routes: Routes = [
  //aqui van las paginas  
  {path: "pagina/listas", component: ListasComponent},
  {path: "pagina/crear", component: CrearComponent},
  {path: "pagina/Acerca", component: AcercaDeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }