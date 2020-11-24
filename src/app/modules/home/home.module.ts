
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// import { NavComponent } from './../../nav/nav.component';
// import { FooterComponent } from './../../footer/footer.component';


@NgModule({
  declarations: [
    // FooterComponent,
    // NavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
