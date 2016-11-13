import {Routes} from "@angular/router";
import {TaskListComponent} from "./task-list/task-list.component";
import { TaskDetailsComponent } from './task-details/task-details.component';


export const STUDENT_ROUTES: Routes = [
  {path: 'tasks', component: TaskListComponent},
  {path: 'taskdetails', component: TaskDetailsComponent}
]
