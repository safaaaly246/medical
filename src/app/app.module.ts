import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavComponent } from './nav/nav.component';
// import { MainComponent } from './main/main.component';
// import { FooterComponent } from './footer/footer.component';
// import { FontAwesomeModule } from '@fortawesome/fontawesome-free';

// import { MatCarouselModule } from '@angular/material-carousel';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
// import { collapseAnimation, rubberBandAnimation } from 'angular-animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    NotFoundComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
     FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
