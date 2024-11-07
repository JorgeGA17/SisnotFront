import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../Service/curso.service';

@Component({
  selector: 'app-actualizar-cursos',
  templateUrl: './actualizar-cursos.component.html',
  styleUrls: ['./actualizar-cursos.component.css']
})
export class ActualizarCursosComponent implements OnInit{

  id: number;
  curso: Curso;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cursoService.getCursoById(this.id).subscribe(dato => {
      this.curso = dato;
    }, error => console.log(error));

  }

  irListaCursos() {
    this.router.navigate(['/lista-cursos']);
    swal('Curso actualizado', `El curso ${this.curso.nomCurso} ha sido actualizado con éxito`, 'success');
  }

  onSubmit() {
    this.curso.id = this.id; 
    console.log('Submitting curso:', this.curso); 
    this.cursoService.updateCurso(this.curso).subscribe(
      dato => {
        this.irListaCursos();
      },
      error => {
        console.error('Error updating Curso:', error);
      }
    );
  }


}
