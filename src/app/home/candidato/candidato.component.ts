import { Component } from '@angular/core';
import { CandidatoService } from '../candidato.service';
import { Candidato } from './candidato';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.css'
})
export class CandidatoComponent {

  constructor(
    private service: CandidatoService,
    private http: HttpClient
    ) { }

    title = 'http-get';
    candidatos: any; // <---

    private url = 'http://localhost:8080/ip/';

  ngOnInit(): void {
      console.log("Candidato");
      this.http.get<any>(this.url).subscribe(data => {
        console.log(data);
        this.candidatos = data;
    });
  }



}
