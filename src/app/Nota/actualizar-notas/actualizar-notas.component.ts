import { Component, OnInit } from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../Service/nota.service';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno';
import { Curso } from '../../models/curso';
import { AlumnoService } from '../../Service/alumno.service';
import { CursoService } from '../../Service/curso.service';

@Component({
  selector: 'app-actualizar-notas',
  templateUrl: './actualizar-notas.component.html',
  styleUrls: ['./actualizar-notas.component.css']
})
export class ActualizarNotasComponent implements OnInit {
  nota: Nota = new Nota();
  alumnos: Alumno[] = [];
  alumnosFiltrados: Alumno[] = [];
  cursos: Curso[] = [];
  todasLasNotas: Nota[] = []; // Para almacenar todas las notas
  cursoSeleccionado: number; // Variable separada para el curso seleccionado

  constructor(
    private notaService: NotaService,
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAlumnos();
    this.loadCursos();
    this.loadAllNotas(); // Cargar todas las notas al inicio
  }

  loadAllNotas() {
    this.notaService.getAllNotas().subscribe(
      (data) => {
        this.todasLasNotas = data; // Almacenar todas las notas
        console.log('Todas las notas cargadas:', this.todasLasNotas);
      },
      (error) => {
        console.error('Error al cargar todas las notas', error);
      }
    );
  }

  loadAlumnos() {
    this.alumnoService.getAllAlumnos().subscribe(
      (data) => {
        this.alumnos = data;
        this.alumnosFiltrados = data; // Inicialmente, todos los alumnos están disponibles
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
        console.log('Cursos cargados:', this.cursos);
      },
      (error) => {
        console.error('Error al cargar cursos', error);
      }
    );
  }

  filtrarAlumnosPorCurso() {
    if (this.cursoSeleccionado) {
      const cursoIdSeleccionado = Number(this.cursoSeleccionado);
      this.alumnosFiltrados = this.alumnos.filter(alumno => {
        return Array.isArray(alumno.cursoIds) && alumno.cursoIds.includes(cursoIdSeleccionado);
      });
      console.log('Alumnos filtrados por curso:', this.alumnosFiltrados);
    } else {
      this.alumnosFiltrados = this.alumnos; // Si no hay curso seleccionado, mostrar todos los alumnos
      console.log('No hay curso seleccionado, mostrando todos los alumnos.');
    }
  }

  cargarNotasExistentes() {
    if (this.nota.alumnoId && this.cursoSeleccionado) {
      console.log('Buscando nota para Alumno ID:', this.nota.alumnoId, 'Curso ID:', this.cursoSeleccionado);
      console.log('Tipo de Alumno ID:', typeof this.nota.alumnoId, 'Tipo de Curso ID:', typeof this.cursoSeleccionado);
      
      const notaExistente = this.todasLasNotas.find(nota => 
        nota.alumnoId === Number(this.nota.alumnoId) && nota.cursoId === Number(this.cursoSeleccionado)
      );

      if (notaExistente) {
        this.nota = { ...notaExistente }; // Cargar las notas en el formulario
        console.log('Notas existentes cargadas:', this.nota);
      } else {
        // Solo reiniciar el objeto nota si no se encuentra una nota existente
        console.log('No hay notas existentes para el alumno y curso seleccionados.');
      }
    } else {
      console.log('Alumno o curso no seleccionados, no se pueden cargar notas.');
    }
}


  actualizarNota() {
    this.notaService.updateNotasByAlumnoId(this.nota.alumnoId, this.cursoSeleccionado, this.nota).subscribe(
      (response) => {
        console.log('Nota actualizada:', response);
        swal('Éxito!', 'Nota actualizada exitosamente.', 'success')
          .then(() => {
            this.router.navigate(['/lista-alumnos']);
          });
      },
      (error) => {
        console.error('Error al actualizar nota:', error);
        swal('Error!', 'Hubo un problema al actualizar la nota.', 'error');
      }
    );
  }
}