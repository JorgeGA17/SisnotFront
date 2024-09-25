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
  
  }


