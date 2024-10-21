import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrl: './visitas.component.css'
})
export class VisitasComponent implements OnInit{

  visitas: number = 0;

  ngOnInit() {
    // Recupera el número de visitas del almacenamiento local
    const visitasGuardadas = localStorage.getItem('visitas');
    this.visitas = visitasGuardadas ? +visitasGuardadas : 0;

    // Incrementa el contador y guarda el nuevo valor
    this.visitas++;
    localStorage.setItem('visitas', this.visitas.toString());
  }
}
