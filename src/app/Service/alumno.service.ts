import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

   [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/Sisnot/Alumnos'

  constructor(private http:HttpClient) { }

    getAllAlumnos():Observable<Alumno[]>{
      return this.http.get<any[]>(this.urlEndPoint);
    }
    
    getAlumnoById(id:number):Observable<Alumno>{
      return this.http.get<Alumno>(this.urlEndPoint+'/'+ id);
    }

    createAlumno(alumno:Alumno): Observable<Alumno>{
      return this.http.post<Alumno>(this.urlEndPoint,alumno);
    }
    
    updateAlumno(alumno:Alumno): Observable<Alumno>{
      return this.http.put<Alumno>(this.urlEndPoint+'/'+alumno.id,alumno);
    }

    deleteAlumno(id:number):Observable<any>{
      return this.http.delete(this.urlEndPoint+'/'+id);
    }
    
  
  }


