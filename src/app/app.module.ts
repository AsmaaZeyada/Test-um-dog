import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeItemComponent } from './components/home/home-item/home-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeHomeComponent } from './components/home/home-home/home-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeItemComponent,
    CadastroComponent,
    HomeHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
