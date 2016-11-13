import {Routes} from "@angular/router";
import {StudentTaskListComponent} from "./student-task-list/student-task-list.component";
import { TaskDetailsComponent } from './task-details/task-details.component';

export const STUDENT_ROUTES: Routes = [
  {path: 'tasks', component: StudentTaskListComponent},
  {path: 'taskdetails', component: TaskDetailsComponent}
]
