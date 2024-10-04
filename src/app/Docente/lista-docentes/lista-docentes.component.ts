import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../Service/docente.service';
import { Router } from '@angular/router';
import { Docente } from '../../models/docente';


@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrl: './lista-docentes.component.css'  
})
export class ListaDocentesComponent implements OnInit{

  
  docentes: Docente[];
  filterDocente='';

  constructor (private docenteService:DocenteService, private router:Router){}
  
    ngOnInit(): void {
    this.getDocentes();

    }

    private getDocentes(){
      this.docenteService.getAllDocentes().subscribe(dato =>{
        this.docentes=dato;
      });
    }

  updateDocente(id:number){
      this.router.navigate(['actualizar-docente',id]);
    }

    deleteDocente(id: number) {
      console.log('Eliminando docente con ID:', id);  // Para verificar el ID en la consola
      this.docenteService.deleteDocente(id).subscribe(dato => {
        console.log('Resultado de la eliminación:', dato);
        this.getDocentes();  // Vuelve a cargar la lista después de la eliminación
      });
    }
    

}
