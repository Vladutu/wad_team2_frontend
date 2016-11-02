import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import { LoginComponent } from './login/login.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { DropdownDirective } from './dropdown.directive';
import { SubgroupListComponent } from './secretary/subgroup-list/subgroup-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecretaryComponent,
    DropdownDirective,
    SubgroupListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
