import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UserLogin, User} from "../model/models";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'wad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  private userLogin: UserLogin = null;

  private error: boolean = false;

  private requesting: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    var authenticatedUser:User = this.loginService.getAuthenticatedUser();
    if(authenticatedUser.username){
      let path: string = "/" + authenticatedUser.role.toLowerCase();
      this.router.navigate([path]);
    }
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)])
    });
  }

  onSubmit() {
    this.userLogin = this.loginForm.value;
    this.requesting = true;
    this.loginService.authenticate(this.userLogin)
      .subscribe((user: User) => {
          localStorage.removeItem('auth');
          localStorage.setItem('auth', JSON.stringify(user));

          this.requesting = false;
          let path: string = "/" + user.role.toLowerCase();
          this.router.navigate([path]);
        },
        error => {
          this.error = true;
          this.requesting = false;
          setTimeout(() => {
            this.error = false;
          }, 2000)
        })
  }

}
