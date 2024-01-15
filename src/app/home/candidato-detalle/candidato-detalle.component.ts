import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidato-detalle',
  templateUrl: './candidato-detalle.component.html',
  styleUrl: './candidato-detalle.component.css'
})
export class CandidatoDetalleComponent {

  constructor(
    private http: HttpClient,
    private route: Router
    ) { }

    candidato: any;
    java: any;
    micro: any;
    elastic: any;
    bool: any;

    private url = 'http://localhost:8080/ip/';

  ngOnInit(id: number = 1): void {
      console.log("Candidato");
      this.http.get<any>(this.url + id).subscribe(data => {
        console.log(data);
        this.candidato = data;
        this.java = this.candidato.tecnologiaJava;
        this.micro = this.candidato.tecnologiaMicroservicios;
        this.elastic = this.candidato.tecnologiaElastic;
        console.log(this.candidato.nombre);
    });
  }

  ngOnChanges() {
    this.http.get<any>(this.url + 1).subscribe(data => {
      console.log(data);
      this.candidato = data;
    });
  }

  regresar(id: number) {
    console.log("Entre a función ver");
    console.log(id);
    this.route.navigate(['candidato']);
  }

  guardar(id: number = 1) {
    console.log("Entre a función ver");
    console.log(id);

    this.candidato.tecnologiaJava = this.java;
    this.candidato.tecnologiaMicroservicios = this.micro;
    this.candidato.tecnologiaElastic = this.elastic;

    this.http.put<any>(this.url + 'editar/' + id, this.candidato)
    .subscribe(data => this.candidato = data.id);

    this.route.navigate(['candidato']);
  }

  cambioJava(cambio: boolean){
    console.log(cambio);
    this.java = cambio;
  }

  cambioMicro(cambio: boolean){
    console.log(cambio);
    this.micro = cambio;
  }

  cambioElastic(cambio: boolean){
    console.log(cambio);
    this.elastic = cambio;
  }
}
