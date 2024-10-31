import { Component } from '@angular/core';
import { Curso } from '../../models/curso';
import { CursoService } from '../../Service/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {

  cursos: Curso[];
  filterCurso='';

  constructor(private cursoService:CursoService, private router:Router){}
   ngOnInit(): void {

    this.getCursos();

    } 

    private getCursos(){
      this.cursoService.getAllCursos().subscribe(dato =>{
        this.cursos=dato;
      });
    }

    updateCurso(id:number){
      this.router.navigate(['actualizar-curso',id]);
    }

    deleteCurso(id: number) {
      this.cursoService.deleteCurso(id).subscribe(dato => {
        this.getCursos(); 
      });
    }
    
}
