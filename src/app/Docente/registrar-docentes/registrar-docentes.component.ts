import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docente';
import { Curso } from '../../models/curso';
import { DocenteService } from '../../Service/docente.service';
import { Router } from '@angular/router';
import { CursoService } from '../../Service/curso.service';

@Component({
  selector: 'app-registrar-docentes',
  templateUrl: './registrar-docentes.component.html',
  styleUrls: ['./registrar-docentes.component.css']
})
export class RegistrarDocentesComponent implements OnInit {

  docente:Docente = new Docente();
  cursos: Curso[] = [];
  selectedCursoId: number | null = null; 


  constructor(private docenteService:DocenteService, private router:Router,    private cursoService: CursoService){
    this.docente.cursoIds = [];
  }

  ngOnInit(): void {
    this.cursoService.getAllCursos().subscribe(data => {
      this.cursos = data;
    }, error => console.log(error));
    
  }

  guardarDocente(){
    this.docenteService.createDocente(this.docente).subscribe(dato => {
      console.log(dato);
      this.irListaDocentes();
    }, error => console.log(error));
  
  }

  irListaDocentes(){
    this.router.navigate(['/lista-docentes'])
  }

  onSubmit(){
    this.guardarDocente();
  }


  onCursoSelect(event: Event) {
    const target = event.target as HTMLSelectElement; 
    const selectedId = target.value; 
    const cursoId = parseInt(selectedId, 10);
    
    if (cursoId && !this.docente.cursoIds.includes(cursoId)) {
      this.docente.cursoIds.push(cursoId);
    }
  }

removeCurso(cursoId: number) {
  this.docente.cursoIds = this.docente.cursoIds.filter(id => id !== cursoId);
}


getCursoNombre(cursoId: number): string {
  const curso = this.cursos.find(c => c.id === cursoId);
  return curso ? curso.nomCurso : 'Curso no encontrado';
}

}
