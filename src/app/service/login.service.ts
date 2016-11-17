import {Injectable} from "@angular/core";
import {UserLogin, User} from "../model/models";
import {Http} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  public authenticate(userLogin: UserLogin) {
    return Observable.of(new User("vpaun", "1940826160043", 1, "Victor", "Paun", "victor20@yahoo.com", "MALE", "STUDENT"));
  }
}
