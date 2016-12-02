import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {User, STask, Task} from "../model/models";
import {LoginService} from "./login.service";

@Injectable()
export class TaskService {

  constructor(private http: Http, private loginService: LoginService) {
  }

  public save(task: STask, topicId: number) {
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/professors/" + user.id + "/topics/" + topicId + "/tasks";

    return this.http.post(url, task)
      .map((response: Response) => (<Task>response.json()))
      .catch(error => Observable.throw(error.json()));
  }


}
