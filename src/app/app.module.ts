import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { ProfessorNavbarComponent } from './professor-navbar/professor-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ProfessorNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
