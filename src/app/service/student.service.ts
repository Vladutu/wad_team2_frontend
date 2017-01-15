import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {BASE_URL} from "./server";
import {Student, ESStudent} from "../model/models";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {LoginService} from "./login.service";

@Injectable()
export class StudentService extends BaseService {

  constructor(private http: Http, loginService: LoginService) {
    super(loginService);
  }

  public getAll() {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/students";

    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => (<Student[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public save(student: ESStudent) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/students";

    return this.http.post(url, student, {headers: this.headers})
      .map((response: Response) => (<Student>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public edit(id: number, student: ESStudent) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/students/" + id;

    return this.http.put(url, student, {headers: this.headers})
      .map((response: Response) => (<Student>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public delete(id: number) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/students/" + id;

    return this.http.delete(url, {headers: this.headers})
      .map((response: Response) => (<Student>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
