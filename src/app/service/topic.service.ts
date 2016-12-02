import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {Topic, User, STopic} from "../model/models";
import {LoginService} from "./login.service";

@Injectable()
export class TopicService {

  constructor(private http: Http, private loginService: LoginService) {
  }

  public getAll() {
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/professors/" + user.id + "/topics";

    return this.http.get(url)
      .map((response: Response) => (<Topic[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public save(topic: STopic) {
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/professors/" + user.id + "/topics";

    return this.http.post(url, topic)
      .map((response: Response) => (<Topic>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public delete(id: number) {
    let url: string = BASE_URL + "/professors/topics/" + id;

    return this.http.delete(url)
      .map((response: Response)=>(<Topic>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

}
