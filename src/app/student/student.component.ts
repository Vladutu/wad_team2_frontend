import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {User} from "../model/models";

@Component({
  selector: 'wad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

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
