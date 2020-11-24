import { MainComponent } from './../../main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from '../../nav/nav.component';

import { FooterComponent } from '../../footer/footer.component';
// import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    FooterComponent ,
    MainComponent ,
    NavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
