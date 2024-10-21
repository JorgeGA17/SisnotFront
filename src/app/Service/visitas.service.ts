import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  private key = 'visitas';

  constructor() { }

  getVisitas(): number {
    const visitas = localStorage.getItem(this.key);
    return visitas ? parseInt(visitas, 10) : 0;
  }

  incrementarVisitas(): void {
    const visitas = this.getVisitas();
    localStorage.setItem(this.key, (visitas + 1).toString());
  }
}
