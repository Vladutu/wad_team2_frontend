import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {LoginService} from "./login.service";
import {User, FolderNode, FilePath, Content} from "../model/models";
import {BaseService} from "./base.service";

@Injectable()
export class SolutionService extends BaseService {

  constructor(private http: Http, loginService: LoginService) {
    super(loginService);
  }

  public getFolderStructure(solutionId: number) {
    this.createHeader();
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/solutions/" + solutionId + "/folderStructure";

    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => (<FolderNode[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public getFileContent(filePath: FilePath) {
    this.createHeader();
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/solutions/content";

    return this.http.post(url, filePath, {headers: this.headers})
      .map((response: Response) => (<Content>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
