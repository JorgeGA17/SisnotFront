import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaDocentesComponent } from './Docente/lista-docentes/lista-docentes.component';
import { ListaAlumnosComponent } from './Alumno/lista-alumnos/lista-alumnos.component';
import { RegistrarDocentesComponent } from './Docente/registrar-docentes/registrar-docentes.component';
import { RegistrarAlumnosComponent } from './Alumno/registrar-alumnos/registrar-alumnos.component';
import { ActualizarAlumnoComponent } from './Alumno/actualizar-alumno/actualizar-alumno.component';
import { ListaCursosComponent } from './Curso/lista-cursos/lista-cursos.component';
import { RegistrarCursoComponent } from './Curso/registrar-curso/registrar-curso.component';
import { ActualizarCursosComponent } from './Curso/actualizar-cursos/actualizar-cursos.component';
import { RegistarNotaComponent } from './Nota/registar-nota/registar-nota.component';
import { ActualizarNotasComponent } from './Nota/actualizar-notas/actualizar-notas.component';
import { ActualizarDocenteComponent } from './Docente/actualizar-docente/actualizar-docente.component';
import { DetalleAlumnoComponent } from './Alumno/detalle-alumno/detalle-alumno.component';
import { DetalleCursoComponent } from './Curso/detalle-curso/detalle-curso.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'lista-docentes', component: ListaDocentesComponent },
  { path: 'registrar-docentes', component: RegistrarDocentesComponent },
  { path: 'actualizar-docente/:id', component: ActualizarDocenteComponent },

  { path: 'lista-alumnos', component: ListaAlumnosComponent },
  { path: 'registrar-alumnos', component: RegistrarAlumnosComponent },
  { path: 'actualizar-alumno/:id', component: ActualizarAlumnoComponent },

  { path: 'lista-cursos', component: ListaCursosComponent },
  { path: 'registrar-cursos', component: RegistrarCursoComponent },
  { path: 'actualizar-curso/:id', component: ActualizarCursosComponent },

  { path: 'registrar-notas', component: RegistarNotaComponent },
  { path: 'actualizar-nota/:id', component: ActualizarNotasComponent },

  { path: 'detalle-alumno/:id', component: DetalleAlumnoComponent },

  { path: 'detalle-curso/:id', component: DetalleCursoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
