import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {SolutionStudent, User, Grade, SolutionOtherStudents, SolutionFile, SolutionResponse} from "../model/models";
import {LoginService} from "./login.service";

@Injectable()
export class SolutionStudentService {

  constructor(private http: Http, private loginService: LoginService) {
  }

  public getStudentsByTask(taskId: number) {
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/professors/tasks/" + taskId + "/students";

    return this.http.get(url)
      .map((response: Response) => (<SolutionStudent[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public getOtherStudentsSimilarity(taskId: number, studentId: number) {
    let url: string = BASE_URL + "/professors/tasks/" + taskId + "/students/" + studentId + "/plagiarismResult";

    return this.http.get(url)
      .map((response: Response) => (<SolutionOtherStudents[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public editGrade(studentId: number, taskId: number, grade: Grade) {
    let url: string = BASE_URL + "/professors/tasks/" + taskId + "/students/" + studentId + "/mark";

    return this.http.post(url, grade)
      .map((response: Response) => (<SolutionStudent[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public sendSolution(solutionFile: SolutionFile, taskId: number) {
    let user: User = this.loginService.getAuthenticatedUser();
    let url = BASE_URL + "/students/" + user.id + "/tasks/" + taskId + "/solutions";

    return this.http.post(url, solutionFile)
      .map((response: Response) => (<SolutionResponse>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
