import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docente';
import { DocenteService } from '../../Service/docente.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';
import { Curso } from '../../models/curso';
import { CursoService } from '../../Service/curso.service';

@Component({
  selector: 'app-actualizar-docente',
  templateUrl: './actualizar-docente.component.html',
  styleUrls: ['./actualizar-docente.component.css']
})
export class ActualizarDocenteComponent implements OnInit {

  id: number;
  docente: Docente = new Docente();
  cursos: Curso[] = [];

  constructor(
    private docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.docenteService.getDocenteById(this.id).subscribe(dato => {
      this.docente = dato;
    }, error => console.log(error));

    this.cursoService.getAllCursos().subscribe(data => {
      this.cursos = data;
    }, error => console.log(error));
  }

  irListaDocentes() {
    this.router.navigate(['/lista-docentes']);
    swal('Docente actualizado', `El docente ${this.docente.nombre} ha sido actualizado con éxito`, 'success');
  }

  onSubmit() {
    this.docente.id = this.id; // Asegúrate de que esto esté correcto
    console.log('Submitting docente:', this.docente); // Verifica el contenido
    this.docenteService.updateDocente(this.docente).subscribe(
      dato => {
        this.irListaDocentes();
      },
      error => {
        console.error('Error updating docente:', error);
      }
    );
  }

  updateCursoIds(selectedIds: number[]) {
    this.docente.cursoIds = selectedIds; // Almacena los IDs seleccionados directamente
  }
}