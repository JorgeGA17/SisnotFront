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
  
  getCursoById(id:number):Observable<Curso>{
    return this.http.get<Curso>(this.urlEndPoint+'/'+ id);
  }

  createCurso(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>(this.urlEndPoint,curso);
  }
  
  updateCurso(curso:Curso): Observable<Curso>{
    return this.http.put<Curso>(this.urlEndPoint+'/'+curso.id,curso);
  }

  deleteCurso(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }


}
