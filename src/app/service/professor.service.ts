import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {Professor, ESProfessor} from "../model/models";
import {LoginService} from "./login.service";
import {BaseService} from "./base.service";

@Injectable()
export class ProfessorService extends BaseService {

  constructor(private http: Http, loginService: LoginService) {
    super(loginService);
  }

  public getAll() {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/professors";

    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => (<Professor[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public save(professor: ESProfessor) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/professors";

    return this.http.post(url, professor, {headers: this.headers})
      .map((response: Response) => (<Professor>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public edit(id: number, professor: ESProfessor) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/professors/" + id;

    return this.http.put(url, professor, {headers: this.headers})
      .map((response: Response) => (<Professor>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public delete(id: number) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/professors/" + id;

    return this.http.delete(url, {headers: this.headers})
      .map((response: Response) => (<Professor>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
