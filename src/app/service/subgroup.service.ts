import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {Subgroup, ESSubgroup} from "../model/models";

@Injectable()
export class SubgroupService {

  constructor(private http: Http) {
  }

  public getAll() {
    let url: string = BASE_URL + "/secretaries/subgroups";

    return this.http.get(url)
      .map((response: Response)=>(<Subgroup[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public save(subgroup: ESSubgroup) {
    let url: string = BASE_URL + "/secretaries/subgroups";

    return this.http.post(url, subgroup)
      .map((response: Response)=>(<Subgroup>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public edit(id: number, subgroup: ESSubgroup) {
    let url: string = BASE_URL + "/secretaries/subgroups/" + id;

    return this.http.put(url, subgroup)
      .map((response: Response)=>(<Subgroup>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public delete(id: number) {
    let url: string = BASE_URL + "/secretaries/subgroups/" + id;

    return this.http.delete(url)
      .map((response: Response)=>(<Subgroup>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
