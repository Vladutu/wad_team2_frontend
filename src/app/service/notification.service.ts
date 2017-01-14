import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {LoginService} from "./login.service";
import {User} from "../model/models";
import {UnseenNotifications} from "../model/models";

@Injectable()
export class NotificationsService {

  constructor(private http: Http, private loginService: LoginService) {
  }

  public getUnseenNotifications() {
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/users/" + user.id + "/notifications/unseen";
    return this.http.get(url)
      .map((response: Response) => (<UnseenNotifications>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
