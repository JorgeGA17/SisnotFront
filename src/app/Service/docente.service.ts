import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/Sisnot/Docentes'
  constructor(private http:HttpClient) { }

  getAllDocentes():Observable<Docente[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }
  
}
