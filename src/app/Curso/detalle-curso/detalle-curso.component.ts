import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListcursosPipe } from '../../pipes/listcursos.pipe';
import { Curso } from '../../models/curso';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../../Service/curso.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css',
  standalone: true,
  imports: [CommonModule, ListcursosPipe]
})

export class DetalleCursoComponent implements OnInit {
  curso: Curso;
  id: number;
  private location: Location;

  constructor(private route: ActivatedRoute, private cursoService: CursoService, location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = parseInt(idParam, 10);
        this.cursoService.getCursoById(this.id).subscribe(data => {
          this.curso = data;
        });
      } else {
        console.error('El parámetro id no está presente');
      }
    });
  }


  volver(): void {
    this.location.back();
  }
}
