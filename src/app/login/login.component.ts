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


  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)])
    });
  }

  onSubmit() {
    this.userLogin = this.loginForm.value;
    this.loginService.authenticate(this.userLogin)
      .subscribe((user: User)=> {
          localStorage.removeItem('auth');
          localStorage.setItem('auth', JSON.stringify(user));

          let path: string = "/" + user.role.toLowerCase();
          this.router.navigate([path]);
        },
        error => {
          this.error = true;
          setTimeout(()=> {
            this.error = false;
          }, 2000)
        })
  }

}
