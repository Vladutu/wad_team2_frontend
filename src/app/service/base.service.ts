import {Injectable} from "@angular/core";
import {LoginService} from "./login.service";
import {Headers} from "@angular/http";
import {User} from "../model/models";

@Injectable()
export class BaseService {

  protected headers: Headers;

  constructor(protected loginService: LoginService) {
  }

  protected createHeader() {
    this.headers = new Headers();
    let user: User = this.loginService.getAuthenticatedUser();
    this.headers.append("Authorization", user.authorization);
  }
}
