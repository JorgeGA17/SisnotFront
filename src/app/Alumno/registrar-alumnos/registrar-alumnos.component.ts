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
  alumno: Alumno = new Alumno();
  cursos: Curso[] = [];
  filteredCursos: Curso[] = []; // Cursos filtrados
  selectedCursoId: number | null = null;
  selectedCiclo: string | null = null; // Ciclo seleccionado
  ciclos: string[] = []; // Lista de ciclos

  constructor(private alumnoService: AlumnoService, private router: Router, private cursoService: CursoService) {
    this.alumno.cursoIds = [];
  }

ngOnInit(): void {
    this.cursoService.getAllCursos().subscribe(data => {
      this.cursos = data;
      this.ciclos = [...new Set(data.map(curso => curso.ciclo))]; // Extraer ciclos únicos
      this.filteredCursos = []; // Asegúrate de que esté vacío al cargar
    }, error => console.log(error));
  }

  
  guardarAlumno() {
    this.alumnoService.createAlumno(this.alumno).subscribe(dato => {
      console.log(dato);
      this.irListaAlumnos();
    }, error => console.log(error));
  }

  irListaAlumnos() {
    this.router.navigate(['/lista-alumnos']);
  }

  onSubmit() {
    this.guardarAlumno();
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

  onCicloSelect(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCiclo = target.value;

    // Filtrar cursos por ciclo seleccionado, o vaciar listado si no hay ciclo seleccionado
    if (this.selectedCiclo) {
      this.filteredCursos = this.cursos.filter(curso => curso.ciclo === this.selectedCiclo);
    } else {
      this.filteredCursos = []; // No mostrar cursos si no hay ciclo seleccionado
    }
  }

}
