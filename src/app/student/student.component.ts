import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'wad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {

  }

  private logout() {
    this.loginService.logout();
    this.router.navigateByUrl("/");
  }

}
