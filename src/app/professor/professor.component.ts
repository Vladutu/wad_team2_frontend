import {Component, OnInit} from "@angular/core";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";
import {User} from "../model/models";

@Component({
  selector: 'wad-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }
  private user: User;

  ngOnInit() {
    this.user = this.loginService.getAuthenticatedUser();
  }

  private logout() {
    this.loginService.logout();
    this.router.navigateByUrl("/");
  }
}
