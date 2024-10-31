import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { CursoService } from '../../Service/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-curso',
  templateUrl: './registrar-curso.component.html',
  styleUrls: ['./registrar-curso.component.css']
})
export class RegistrarCursoComponent implements OnInit {

  curso:Curso = new Curso();
  cursos: Curso[] = [];
  selectedCursoId: number | null = null; 


  constructor( private router:Router, private cursoService: CursoService){
  }

  ngOnInit(): void {
    
  }

  guardarCurso(){
    this.cursoService.createCurso(this.curso).subscribe(dato => {
      console.log(dato);
      this.irListaCursos();
    }, error => console.log(error));
  
  }

  irListaCursos(){
    this.router.navigate(['/lista-cursos'])
  }

  onSubmit(){
    this.guardarCurso();
  }

}
