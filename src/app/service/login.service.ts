import {Injectable} from "@angular/core";
import {UserLogin, User} from "../model/models";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  public authenticate(userLogin: UserLogin) {
    let url: string = BASE_URL + "/login";

    return this.http.post(url, userLogin)
      .map((response: Response) => (<User>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public getAuthenticatedUser(): User {
    let auth: string = localStorage.getItem('auth');

    if(auth == null){
      return new User(null, null, null, null, null, null, null, null, null);
    }
    return <User>JSON.parse(auth);
  }

  public logout() {
    localStorage.removeItem('auth');
  }
}
