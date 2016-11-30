import {Routes} from "@angular/router";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {StudentTopicListComponent} from "./student-topic-list/student-topic-list.component";

export const STUDENT_ROUTES: Routes = [
  {path: 'topics', component: StudentTopicListComponent},
  {path: 'taskdetails', component: TaskDetailsComponent}

]
