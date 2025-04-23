import { Component } from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../Service/nota.service';
import { Alumno } from '../../models/alumno';
import { Curso } from '../../models/curso';
import { AlumnoService } from '../../Service/alumno.service';
import { CursoService } from '../../Service/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-nota',
  templateUrl: './registar-nota.component.html',
  styleUrls: ['./registar-nota.component.css']
})
export class RegistarNotaComponent {

  nota: Nota = new Nota();
  alumnos: Alumno[] = [];
  alumnosFiltrados: Alumno[] = []; // Alumnos filtrados
  cursos: Curso[] = [];

  constructor(
    private notaService: NotaService,
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAlumnos();
    this.loadCursos();
  }

  loadAlumnos() {
    this.alumnoService.getAllAlumnos().subscribe(
      (data) => {
        this.alumnos = data;
        this.alumnosFiltrados = data; 
        console.log('Alumnos cargados:', this.alumnos); 
      },
      (error) => {
        console.error('Error al cargar alumnos', error);
      }
    );
  }

  loadCursos() {
    this.cursoService.getAllCursos().subscribe(
      (data) => {
        this.cursos = data;
      },
      (error) => {
        console.error('Error al cargar cursos', error);
      }
    );
  }

filtrarAlumnosPorCurso() {
  console.log('Curso seleccionado:', this.nota.cursoId);
  console.log('Alumnos cargados:', this.alumnos);
  
  if (this.nota.cursoId) {
    const cursoIdSeleccionado = Number(this.nota.cursoId); 
    this.alumnosFiltrados = this.alumnos.filter(alumno => {

      const isEnrolled = Array.isArray(alumno.cursoIds) && alumno.cursoIds.includes(cursoIdSeleccionado);
      
      return isEnrolled;
    });

  } else {
    this.alumnosFiltrados = this.alumnos; 
  }
}

  crearNota() {
    this.notaService.createNota(this.nota).subscribe(
      (response) => {
        console.log('Nota creada:', response);

        swal('Éxito!', `Nota registrada exitosamente para el alumno ${this.nota.alumnoId}.`, 'success')
          .then(() => {
            this.router.navigate(['/lista-alumnos']);
          });
      },
      (error) => {
        console.error('Error al crear nota:', error);
        swal('Error!', 'Hubo un problema al registrar la nota.', 'error');
      }
    );
  }
}