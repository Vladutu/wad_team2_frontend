import {Routes, RouterModule} from "@angular/router";
import {SecretaryComponent} from "./secretary/secretary.component";
import {LoginComponent} from "./login/login.component";
import {SECRETARY_ROUTES} from "./secretary/secretary.routes";

const APP_ROUTES: Routes = [
  {path: 'secretary', component: SecretaryComponent},
  {path: 'secretary', component: SecretaryComponent, children: SECRETARY_ROUTES},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
