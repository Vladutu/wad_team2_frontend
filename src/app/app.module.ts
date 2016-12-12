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
import {StudentTopicListComponent} from "./student/student-topic-list/student-topic-list.component";
import {ProfessorComponent} from "./professor/professor.component";
import {ProfessorTopicListComponent} from "./professor/professor-topic-list/professor-topic-list.component";
import {TaskSolutionComponent} from "./professor/task-solution/task-solution.component";
import {TaskStudentsSolutionsComponent} from "./professor/professor-topic-list/task-students-solutions.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  PanelComponent,
  PanelHeaderComponent,
  PanelBodyComponent,
  PanelGroupComponent
} from "./collapsible-panel/panel.component";
import {TaskDetailsComponent} from "./student/task-details/task-details.component";
import {LoginService} from "./service/login.service";
import {SubgroupService} from "./service/subgroup.service";
import {ProfessorService} from "./service/professor.service";
import {ESProfessorBuilder, ESStudentBuilder, TaskBuilder} from "./builder/builders";
import {AceHighlighterComponent} from "./ace-highlighter/ace-highlighter.component";
import {TestComponent} from "./test/test.component";
import {StudentService} from "./service/student.service";
import {TopicService} from "./service/topic.service";
import {TaskService} from "./service/task.service";
import {JstreeComponent} from "./jstree/jstree.component";
import {TaskEditComponent} from "./professor/task-edit/task-edit.component";
import {DateParserService} from "./service/dateparser.service";
import {LanguagePipe} from "./pipes/language.pipe";
import {SolutionStudentService} from "./service/solutionstudent.service";
import {SolutionOtherStudentService} from "./service/solutionotherstudentservice.service";
import {SolutionService} from "./service/solution.service";

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
    StudentTopicListComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelGroupComponent,
    ProfessorComponent,
    ProfessorTopicListComponent,
    TaskDetailsComponent,
    AceHighlighterComponent,
    TestComponent,
    JstreeComponent,
    TaskEditComponent,
    LanguagePipe,
    TaskSolutionComponent,
    TaskStudentsSolutionsComponent
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
  providers: [ProfessorListGuard, LoginService, SubgroupService, ProfessorService, ESProfessorBuilder, StudentService,
    ESStudentBuilder, TopicService, TaskService, TaskBuilder, DateParserService, SolutionStudentService, SolutionOtherStudentService,
    SolutionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
