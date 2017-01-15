import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {User, STask, Task, ETask} from "../model/models";
import {LoginService} from "./login.service";
import {BaseService} from "./base.service";

@Injectable()
export class TaskService extends BaseService {

  private currentTask: Task = null;

  constructor(private http: Http, loginService: LoginService) {
    super(loginService);
  }

  public save(task: STask, topicId: number) {
    this.createHeader();
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/professors/" + user.id + "/topics/" + topicId + "/tasks";

    return this.http.post(url, task, {headers: this.headers})
      .map((response: Response) => (<Task>response.json()))
      .catch(error => Observable.throw(error.json()));
  }


  delete(id: number) {
    this.createHeader();
    let url: string = BASE_URL + "/professors/tasks/" + id;

    return this.http.delete(url, {headers: this.headers})
      .map((response: Response) => (<Task>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  edit(id: number, toBeEdited: ETask) {
    this.createHeader();
    let url: string = BASE_URL + "/professors/tasks/" + id;

    return this.http.put(url, toBeEdited, {headers: this.headers})
      .map((response: Response) => (<Task>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  setCurrentTask(task: Task) {
    this.currentTask = task;
  }

  getCurrentTask() {
    return this.currentTask;
  }
}
