import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenComponent } from './components/open/open.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HabitosSaludablesComponent } from './components/habitos-saludables/habitos-saludables.component';

const routes: Routes = [
  {path:'', component:OpenComponent},
  {path: 'nav', component:NavComponent},
  {path:'footer', component:FooterComponent},
  {path: 'homw',component:HomeComponent},
  {path: 'habitos', component: HabitosSaludablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
