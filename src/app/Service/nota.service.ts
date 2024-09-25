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
  


}
