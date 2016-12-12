import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {BASE_URL} from "./server";
import {LoginService} from "./login.service";
import {User, FolderNode, FilePath, Content} from "../model/models";

@Injectable()
export class SolutionService {

  constructor(private http: Http, private loginService: LoginService) {
  }

  public getFolderStructure(solutionId: number) {
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/solutions/" + solutionId + "/folderStructure";

    return this.http.get(url)
      .map((response: Response) => (<FolderNode[]>response.json()))
      .catch(error => Observable.throw(error.json()));
  }

  public getFileContent(filePath: FilePath) {
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = BASE_URL + "/solutions/content";

    return this.http.post(url, filePath)
      .map((response: Response) => (<Content>response.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
