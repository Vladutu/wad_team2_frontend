import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../service/login.service";
import {User} from "../model/models";


@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    let user: User = this.loginService.getAuthenticatedUser();
    let url: string = state.url;

    if (user.username) {
      let path: string = "/" + user.role.toLowerCase();
      if (url.startsWith(path)) {
        return true;
      }

      this.router.navigateByUrl(path);
    }

    this.router.navigateByUrl("/");
  }

}
