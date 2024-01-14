import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatoComponent } from './home/candidato/candidato.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidatoService } from './home/candidato.service';
@NgModule({
  declarations: [
    AppComponent,
    CandidatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CandidatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
