import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {Subgroup, ESSubgroup} from "../model/models";
import {BaseService} from "./base.service";
import {LoginService} from "./login.service";

@Injectable()
export class SubgroupService extends BaseService {

  constructor(private http: Http, loginService: LoginService) {
    super(loginService);
  }

  public getAll() {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/subgroups";

    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => (<Subgroup[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public save(subgroup: ESSubgroup) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/subgroups";

    return this.http.post(url, subgroup, {headers: this.headers})
      .map((response: Response) => (<Subgroup>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public edit(id: number, subgroup: ESSubgroup) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/subgroups/" + id;

    return this.http.put(url, subgroup, {headers: this.headers})
      .map((response: Response) => (<Subgroup>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public delete(id: number) {
    this.createHeader();
    let url: string = BASE_URL + "/secretaries/subgroups/" + id;

    return this.http.delete(url, {headers: this.headers})
      .map((response: Response) => (<Subgroup>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
