import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/Sisnot/Docentes'
  constructor(private http:HttpClient) { }

}
