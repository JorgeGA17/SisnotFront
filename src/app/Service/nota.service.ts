import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/Sisnot/Notas'
  constructor(private http:HttpClient) { }
  
  getAllNotas():Observable<Nota[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }
  
  createNota(nota:Nota): Observable<Nota>{
    return this.http.post<Nota>(this.urlEndPoint,nota);
  }

  updateNotasByAlumnoId(alumnoId: number, cursoId: number, nota: Nota): Observable<void> {
    const url = `${this.urlEndPoint}/alumno/${alumnoId}/curso/${cursoId}`;
    return this.http.put<void>(url, nota);
  }

}
