import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {SecretaryComponent} from "./secretary/secretary.component";
import {DropdownDirective} from "./secretary/directive/dropdown.directive";
import {SubgroupListComponent} from "./secretary/subgroup-list/subgroup-list.component";
import {ProfessorListComponent} from "./secretary/professor-list/professor-list.component";
import {StudentListComponent} from "./secretary/student-list/student-list.component";
import {routing} from "./app.routes";
import {ProfessorListGuard} from "./secretary/student-list/professor-list.guard";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecretaryComponent,
    DropdownDirective,
    SubgroupListComponent,
    ProfessorListComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2Bs3ModalModule
  ],
  providers: [ProfessorListGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
