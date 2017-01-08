import {Component, OnInit} from "@angular/core";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'wad-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  private logout() {
    this.loginService.logout();
    this.router.navigateByUrl("/");
  }
}
