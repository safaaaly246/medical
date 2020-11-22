import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from '../../nav/nav.component';

import { FooterComponent } from '../../footer/footer.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
