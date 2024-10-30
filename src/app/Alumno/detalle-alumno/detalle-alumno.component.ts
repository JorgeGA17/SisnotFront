import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../../Service/alumno.service';
import { Location } from '@angular/common';
import { ListcursosPipe } from '../../pipes/listcursos.pipe';

@Component({
  selector: 'app-detalle-alumno',
  standalone: true,
  imports: [CommonModule,ListcursosPipe], 
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {
  alumno: Alumno;
  id: number;
  private location: Location;

  constructor(private route: ActivatedRoute, private alumnoService: AlumnoService, location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        const idParam = params.get('id');
        if (idParam) {
            this.id = parseInt(idParam, 10);
            this.alumnoService.getAlumnoById(this.id).subscribe(data => {
                this.alumno = data;
         
                if (!Array.isArray(this.alumno.listaCursos)) {
                    this.alumno.listaCursos = [this.alumno.listaCursos];
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