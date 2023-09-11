import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { OpenComponent } from './components/open/open.component';
import { HomeComponent } from './components/home/home.component';
import { HabitosSaludablesComponent } from './components/habitos-saludables/habitos-saludables.component';
import { PausasActivasComponent } from './components/pausas-activas/pausas-activas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    OpenComponent,
    HomeComponent,
    HabitosSaludablesComponent,
    PausasActivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
