import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {SolutionStudent, User, Grade, SolutionOtherStudents, SolutionFile, SolutionResponse} from "../model/models";
import {LoginService} from "./login.service";
import {BaseService} from "./base.service";

@Injectable()
export class SolutionStudentService extends BaseService {

  constructor(private http: Http, loginService: LoginService) {
    super(loginService);
  }

  public getStudentsByTask(taskId: number) {
    this.createHeader();
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/professors/tasks/" + taskId + "/students";

    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => (<SolutionStudent[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public getOtherStudentsSimilarity(taskId: number, studentId: number) {
    this.createHeader();
    let url: string = BASE_URL + "/professors/tasks/" + taskId + "/students/" + studentId + "/plagiarismResult";

    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => (<SolutionOtherStudents[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public editGrade(studentId: number, taskId: number, grade: Grade) {
    this.createHeader();
    let url: string = BASE_URL + "/professors/tasks/" + taskId + "/students/" + studentId + "/mark";

    return this.http.post(url, grade, {headers: this.headers})
      .map((response: Response) => (<SolutionStudent[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public sendSolution(solutionFile: SolutionFile, taskId: number) {
    this.createHeader();
    let user: User = this.loginService.getAuthenticatedUser();
    let url = BASE_URL + "/students/" + user.id + "/tasks/" + taskId + "/solutions";

    return this.http.post(url, solutionFile, {headers: this.headers})
      .map((response: Response) => (<SolutionResponse>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
