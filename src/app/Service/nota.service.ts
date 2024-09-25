import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/Sisnot/Notas'
  constructor(private http:HttpClient) { }

}
