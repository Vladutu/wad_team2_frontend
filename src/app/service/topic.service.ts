import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {Topic, User, STopic, StudentTopic} from "../model/models";
import {LoginService} from "./login.service";
import {BaseService} from "./base.service";

@Injectable()
export class TopicService extends BaseService {

  constructor(private http: Http, loginService: LoginService) {
    super(loginService);
  }

  public getAll() {
    this.createHeader();
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/professors/" + user.id + "/topics";

    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => (<Topic[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public save(topic: STopic) {
    this.createHeader();
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/professors/" + user.id + "/topics";

    return this.http.post(url, topic, {headers: this.headers})
      .map((response: Response) => (<Topic>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public delete(id: number) {
    this.createHeader();
    let url: string = BASE_URL + "/professors/topics/" + id;

    return this.http.delete(url, {headers: this.headers})
      .map((response: Response) => (<Topic>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public getStudentTopics() {
    this.createHeader();
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/students/" + user.id + "/topics";

    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => (<StudentTopic[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

}
