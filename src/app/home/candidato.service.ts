import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor( private http: HttpClient) { }

  private url = 'http://localhost:8080/ip/';

  obtener() {
    return this.http.get<any>(this.url);
  }

}
