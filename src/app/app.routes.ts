import {Routes, RouterModule} from "@angular/router";
import {SecretaryComponent} from "./secretary/secretary.component";
import {LoginComponent} from "./login/login.component";
import {StudentComponent} from "./student/student.component";
import {SECRETARY_ROUTES} from "./secretary/secretary.routes";
import {STUDENT_ROUTES} from "./student/student.routes";
import {ProfessorComponent} from "./professor/professor.component";
import {PROFESSOR_ROUTES} from "./professor/professor.routes";
import {TestComponent} from "./test/test.component";
import {AuthenticationGuard} from "./guard/authentication.guard";

const APP_ROUTES: Routes = [
  {path: 'secretary', component: SecretaryComponent, canActivate: [AuthenticationGuard]},
  {path: 'secretary', component: SecretaryComponent, children: SECRETARY_ROUTES, canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentComponent, canActivate: [AuthenticationGuard]},
  {path: 'student', component: StudentComponent, children: STUDENT_ROUTES, canActivate: [AuthenticationGuard]},
  {path: 'professor', component: ProfessorComponent, canActivate: [AuthenticationGuard]},
  {path: 'professor', component: ProfessorComponent, children: PROFESSOR_ROUTES, canActivate: [AuthenticationGuard]},
  {path: 'ace', component: TestComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
