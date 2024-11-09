import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docente';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from '../../Service/docente.service';
import { ListcursosPipe } from "../../pipes/listcursos.pipe";
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-docente',
  standalone: true, 
  imports: [CommonModule,ListcursosPipe], 
  templateUrl: './detalle-docente.component.html',
  styleUrl: './detalle-docente.component.css'
})
export class DetalleDocenteComponent implements OnInit{
  docente: Docente;
  id: number;
  private location: Location;

  constructor(private route: ActivatedRoute, private docenteService: DocenteService, location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        const idParam = params.get('id');
        if (idParam) {
            this.id = parseInt(idParam, 10);
            this.docenteService.getDocenteById(this.id).subscribe(data => {
                this.docente = data;
         
                if (!Array.isArray(this.docente.listaCursos)) {
                    this.docente.listaCursos = [this.docente.listaCursos];
                }
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
