import {Routes} from "@angular/router";
import {ProfessorTopicListComponent} from "./professor-topic-list/professor-topic-list.component";
import {TaskSolutionComponent} from "./task-solution/task-solution.component";

export const PROFESSOR_ROUTES: Routes = [
  {path: 'topics', component: ProfessorTopicListComponent},
  {path:'tasksolution', component: TaskSolutionComponent}
]
