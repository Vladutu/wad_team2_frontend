import {Routes} from "@angular/router";
import {ProfessorTopicListComponent} from "./professor-topic-list/professor-topic-list.component";
import {TaskSolutionComponent} from "./task-solution/task-solution.component";
import {TaskStudentsSolutionsComponent} from "./professor-topic-list/task-students-solutions.component";


export const PROFESSOR_ROUTES: Routes = [
  {path: 'topics', component: ProfessorTopicListComponent},
  {path: 'topics/task-students-solutions', component: TaskStudentsSolutionsComponent},
  {path: 'solutions/:solutionId/tasksolution', component: TaskSolutionComponent}
]
