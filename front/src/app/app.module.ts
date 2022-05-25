import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; /*BrowserModule indica que vai rodar via módulo*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './view/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { SoftComponent } from './view/soft/soft.component';
import { ManuaisComponent } from './view/manuais/manuais.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SoftComponent,
    ManuaisComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  /*Sempre que utilizamos export, estamos criando uma classe pública*/
