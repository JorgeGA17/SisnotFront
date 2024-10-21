import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../Service/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: Alumno[];
  filterAlumno='';

  constructor(private alumnoService:AlumnoService, private router:Router){}
   ngOnInit(): void {

    this.getAlumnos();

    } 

    private getAlumnos(){
      this.alumnoService.getAllAlumnos().subscribe(dato =>{
        this.alumnos=dato;
      });
    }

    updateAlumno(id:number){
      this.router.navigate(['actualizar-alumno',id]);
    }

    deleteAlumno(id: number) {
      this.alumnoService.deleteAlumno(id).subscribe(dato => {
        this.getAlumnos(); 
      });
    }
    

}
