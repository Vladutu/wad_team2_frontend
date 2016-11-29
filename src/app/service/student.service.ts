import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {BASE_URL} from "./server";
import {Student, ESStudent} from "../model/models";
import {Observable} from "rxjs";

@Injectable()
export class StudentService {

  constructor(private http: Http) {
  }

  public getAll() {
    let url: string = BASE_URL + "/secretaries/students";

    return this.http.get(url)
      .map((response: Response) => (<Student[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public save(student: ESStudent) {
    let url: string = BASE_URL + "/secretaries/students";

    return this.http.post(url, student)
      .map((response: Response) => (<Student>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public edit(id: number, student: ESStudent) {
    let url: string = BASE_URL + "/secretaries/students/" + id;

    return this.http.put(url, student)
      .map((response: Response) => (<Student>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public delete(id: number) {
    let url: string = BASE_URL + "/secretaries/students/" + id;

    return this.http.delete(url)
      .map((response: Response) => (<Student>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
