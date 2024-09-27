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

    deleteDocente(id:number){
      this.docenteService.deleteDocente(id).subscribe(dato=>{
        console.log(dato);
        this.getDocentes()
      })

    }

}
