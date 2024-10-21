import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../Service/alumno.service';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno';
import { Curso } from '../../models/curso';
import { CursoService } from '../../Service/curso.service';

@Component({
  selector: 'app-registrar-alumnos',
  templateUrl: './registrar-alumnos.component.html',
  styleUrls: ['./registrar-alumnos.component.css']
})
export class RegistrarAlumnosComponent implements OnInit {
  alumno:Alumno = new Alumno();
  cursos: Curso[] = [];
  selectedCursoId: number | null = null; // Variable para el curso seleccionado


  constructor(private alumnoService:AlumnoService, private router:Router,    private cursoService: CursoService){
    this.alumno.cursoIds = [];
  }

  ngOnInit(): void {
    this.cursoService.getAllCursos().subscribe(data => {
      this.cursos = data;
    }, error => console.log(error));
    
  }

  guardarAlumno(){
    this.alumnoService.createAlumno(this.alumno).subscribe(dato => {
      console.log(dato);
      this.irListaAlumnos();
    }, error => console.log(error));
  
  }

  irListaAlumnos(){
    this.router.navigate(['/lista-alumnos'])
  }

  onSubmit(){
    this.guardarAlumno();
  }

 // Maneja la selección de cursos
 onCursoSelect(selectedId: string) {
  const cursoId = parseInt(selectedId, 10);
  if (cursoId && !this.alumno.cursoIds.includes(cursoId)) {
      this.alumno.cursoIds.push(cursoId);
  }
}

// Eliminar un curso de la selección
removeCurso(cursoId: number) {
  this.alumno.cursoIds = this.alumno.cursoIds.filter(id => id !== cursoId);
}

// Obtener el nombre del curso por su ID
getCursoNombre(cursoId: number): string {
  const curso = this.cursos.find(c => c.id === cursoId);
  return curso ? curso.nomCurso : 'Curso no encontrado';
}


}
