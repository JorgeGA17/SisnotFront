import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/Sisnot/Cursos'
  constructor(private http:HttpClient) { }

  getAllCursos():Observable<Curso[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }
  

}
