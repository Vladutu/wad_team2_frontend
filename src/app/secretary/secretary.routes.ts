import {Routes} from "@angular/router";
import {SubgroupListComponent} from "./subgroup-list/subgroup-list.component";
import {ProfessorListComponent} from "./professor-list/professor-list.component";
import {StudentListComponent} from "./student-list/student-list.component";

export const SECRETARY_ROUTES: Routes = [
  {path: 'subgroups', component: SubgroupListComponent},
  {path: 'professors', component: ProfessorListComponent},
  {path: 'students', component: StudentListComponent}
]
