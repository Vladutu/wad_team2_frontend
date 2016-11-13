import {Routes} from "@angular/router";
import {StudentTaskListComponent} from "./student-task-list/student-task-list.component";

export const STUDENT_ROUTES: Routes = [
  {path: 'tasks', component: StudentTaskListComponent}
]
