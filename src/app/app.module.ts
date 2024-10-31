import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './Alumno/lista-alumnos/lista-alumnos.component';
import { RegistrarAlumnosComponent } from './Alumno/registrar-alumnos/registrar-alumnos.component';
import { ActualizarAlumnoComponent } from './Alumno/actualizar-alumno/actualizar-alumno.component';
import { ListaDocentesComponent } from './Docente/lista-docentes/lista-docentes.component';
import { RegistrarDocentesComponent } from './Docente/registrar-docentes/registrar-docentes.component';
import { ActualizarDocenteComponent } from './Docente/actualizar-docente/actualizar-docente.component';
import { RegistrarCursoComponent } from './Curso/registrar-curso/registrar-curso.component';
import { ListaCursosComponent } from './Curso/lista-cursos/lista-cursos.component';
import { ActualizarCursosComponent } from './Curso/actualizar-cursos/actualizar-cursos.component';
import { RegistarNotaComponent } from './Nota/registar-nota/registar-nota.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { VisitasComponent } from "./visitas/visitas.component";
import { CommonModule } from '@angular/common';
import { ActualizarNotasComponent } from './Nota/actualizar-notas/actualizar-notas.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { FooterComponent } from './home/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    RegistrarAlumnosComponent,
    ActualizarAlumnoComponent,
    ListaDocentesComponent,
    RegistrarDocentesComponent,
    ActualizarDocenteComponent,
    RegistrarCursoComponent,
    ListaCursosComponent,
    ActualizarCursosComponent,
    RegistarNotaComponent,
    FilterPipe,
    VisitasComponent,
    ActualizarNotasComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
