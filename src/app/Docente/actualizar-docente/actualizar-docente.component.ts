import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docente';
import { DocenteService } from '../../Service/docente.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-actualizar-docente',
  templateUrl: './actualizar-docente.component.html',
  styleUrls: ['./actualizar-docente.component.css']
})
export class ActualizarDocenteComponent implements OnInit {

  id:number;
  docente:Docente = new Docente();
  constructor(private docenteService:DocenteService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.docenteService.getDocenteById(this.id).subscribe(dato =>{
      this.docente = dato;
    },error => console.log(error));
  }

  irListaDocentes(){
    this.router.navigate(['/lista-docentes']);
    swal('Docente actualizado',`El docente ${this.docente.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.docenteService.updateDocente(this.docente).subscribe(dato => {
      this.irListaDocentes();
    },error => console.log(error));
  }

 
}
