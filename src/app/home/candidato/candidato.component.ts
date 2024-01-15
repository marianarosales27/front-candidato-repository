import { Component } from '@angular/core';
import { Candidato } from './candidato';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.css'
})
export class CandidatoComponent {

  constructor(
    private http: HttpClient,
    private route: Router
    ) { }


    candidatos: any;

    private url = 'http://localhost:8080/ip/';

  ngOnInit(): void {
      console.log("Candidato");
      this.http.get<any>(this.url).subscribe(data => {
        console.log(data);
        this.candidatos = data;
    });
  }

  ver(id: number) {
    console.log("Entre a función ver");
    console.log(id);
    this.route.navigate(['candidato-detalle', id]);
  }



}
