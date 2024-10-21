import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { Curso } from '../../models/curso';
import { AlumnoService} from '../../Service/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../Service/curso.service';

@Component({
  selector: 'app-actualizar-alumno',
  templateUrl: './actualizar-alumno.component.html',
  styleUrls: ['./actualizar-alumno.component.css']
})
export class ActualizarAlumnoComponent implements OnInit {


  id: number;
  alumno: Alumno = new Alumno();
  cursos: Curso[] = [];

  constructor(
    private AlumnoService: AlumnoService,
    private router: Router,
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.AlumnoService.getAlumnoById(this.id).subscribe(dato => {
      this.alumno = dato;
    }, error => console.log(error));

    this.cursoService.getAllCursos().subscribe(data => {
      this.cursos = data;
    }, error => console.log(error));
  }

  irListaAlumnos() {
    this.router.navigate(['/lista-alumnos']);
    swal('Alumno actualizado', `El alumno ${this.alumno.nombre} ha sido actualizado con éxito`, 'success');
  }

  onSubmit() {
    this.alumno.id = this.id;
    console.log('Submitting docente:', this.alumno); // Verifica el contenido
    this.AlumnoService.updateAlumno(this.alumno).subscribe(
      dato => {
        this.irListaAlumnos();
      },
      error => {
        console.error('Error updating docente:', error);
      }
    );
  }

  updateCursoIds(selectedIds: number[]) {
    this.alumno.cursoIds = selectedIds;
  }

}
