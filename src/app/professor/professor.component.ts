import {Component, OnInit} from "@angular/core";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'wad-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  private logout() {
    this.loginService.logout();
    this.router.navigateByUrl("/");
  }
}
