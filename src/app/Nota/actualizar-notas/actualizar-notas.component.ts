import { Component, OnInit } from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../Service/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
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


  actualizarNota() {
    this.notaService.updateNotasByAlumnoId(this.nota.alumnoId, this.nota.cursoId, this.nota).subscribe(
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
