import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/Sisnot/Cursos'
  constructor(private http:HttpClient) { }


}
