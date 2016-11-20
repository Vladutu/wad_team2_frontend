import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {Professor, ESProfessor} from "../model/models";

@Injectable()
export class ProfessorService {

  constructor(private http: Http) {
  }

  public getAll() {
    let url: string = BASE_URL + "/secretaries/professors";

    return this.http.get(url)
      .map((response: Response)=>(<Professor[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public save(professor: ESProfessor) {
    let url: string = BASE_URL + "/secretaries/professors";

    return this.http.post(url, professor)
      .map((response: Response)=>(<Professor>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public edit(id: number, professor: ESProfessor) {
    let url: string = BASE_URL + "/secretaries/professors/" + id;

    return this.http.put(url, professor)
      .map((response: Response)=>(<Professor>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public delete(id: number) {
    let url: string = BASE_URL + "/secretaries/professors/" + id;

    return this.http.delete(url)
      .map((response: Response)=>(<Professor>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
