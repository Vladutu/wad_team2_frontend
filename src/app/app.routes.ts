import {Routes, RouterModule} from "@angular/router";
import {SecretaryComponent} from "./secretary/secretary.component";
import {LoginComponent} from "./login/login.component";
import {StudentComponent} from "./student/student.component";
import {SECRETARY_ROUTES} from "./secretary/secretary.routes";
import {STUDENT_ROUTES} from "./student/student.routes";
import {ProfessorComponent} from "./professor/professor.component";
import {PROFESSOR_ROUTES} from "./professor/professor.routes";
import {AceHighlighterComponent} from "./ace-highlighter/ace-highlighter.component";

const APP_ROUTES: Routes = [
  {path: 'secretary', component: SecretaryComponent},
  {path: 'secretary', component: SecretaryComponent, children: SECRETARY_ROUTES},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentComponent},
  {path: 'student', component: StudentComponent, children: STUDENT_ROUTES},
  {path: 'professor', component: ProfessorComponent},
  {path: 'professor', component: ProfessorComponent, children: PROFESSOR_ROUTES},
  {path: 'ace', component: AceHighlighterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
