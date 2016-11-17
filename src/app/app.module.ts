import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {SecretaryComponent} from "./secretary/secretary.component";
import {DropdownDirective} from "./directive/dropdown.directive";
import {SubgroupListComponent} from "./secretary/subgroup-list/subgroup-list.component";
import {ProfessorListComponent} from "./secretary/professor-list/professor-list.component";
import {StudentListComponent} from "./secretary/student-list/student-list.component";
import {routing} from "./app.routes";
import {ProfessorListGuard} from "./secretary/student-list/professor-list.guard";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {LoadingOverlayComponent} from "./loading-overlay/loading-overlay.component";
import {GridModule} from "@progress/kendo-angular-grid";
import {LayoutModule} from "@progress/kendo-angular-layout";
import {StudentComponent} from "./student/student.component";
import {StudentTaskListComponent} from "./student/student-task-list/student-task-list.component";
import {ProfessorComponent} from "./professor/professor.component";
import {ProfessorTaskListComponent} from "./professor/professor-task-list/professor-task-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  PanelComponent,
  PanelHeaderComponent,
  PanelBodyComponent,
  PanelGroupComponent
} from "./collapsible-panel/panel.component";
import {TaskDetailsComponent} from "./student/task-details/task-details.component";
import {LoginService} from "./service/login.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecretaryComponent,
    StudentComponent,
    DropdownDirective,
    SubgroupListComponent,
    ProfessorListComponent,
    StudentListComponent,
    LoadingOverlayComponent,
    StudentTaskListComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelGroupComponent,
    ProfessorComponent,
    ProfessorTaskListComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpModule,
    routing,
    Ng2Bs3ModalModule,
    GridModule
  ],
  providers: [ProfessorListGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
