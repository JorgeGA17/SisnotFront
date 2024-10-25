import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { Curso } from '../../models/curso';
import { AlumnoService } from '../../Service/alumno.service';
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
  selectedCursoId: number | null = null; 

  constructor(
    private alumnoService: AlumnoService,
    private router: Router,
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alumnoService.getAlumnoById(this.id).subscribe(dato => {
        this.alumno = dato;
       
        if (!this.alumno.cursoIds) {
            this.alumno.cursoIds = []; 
        }
        
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
    this.alumnoService.updateAlumno(this.alumno).subscribe(
      dato => {
        this.irListaAlumnos();
      },
      error => {
        console.error('Error actualizar docente:', error);
      }
    );
  }

  onCursoSelect(event: Event) {
    const target = event.target as HTMLSelectElement; 
    const selectedId = target.value; 
    const cursoId = parseInt(selectedId, 10);
    
    if (cursoId && !this.alumno.cursoIds.includes(cursoId)) {
      this.alumno.cursoIds.push(cursoId);
    }
  }

  removeCurso(cursoId: number) {
    this.alumno.cursoIds = this.alumno.cursoIds.filter(id => id !== cursoId);
  }

  getCursoNombre(cursoId: number): string {
    const curso = this.cursos.find(c => c.id === cursoId);
    return curso ? curso.nomCurso : 'Curso no encontrado';
  }
}