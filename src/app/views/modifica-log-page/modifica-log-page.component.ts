import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import MyError from 'src/app/classes/MyError';
import ILogUser from 'src/app/interfaces/ILogUser';
import IUser from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import AuthValidator from 'src/app/validators/auth-validator';

@Component({
  selector: 'app-modifica-log-page',
  templateUrl: './modifica-log-page.component.html',
  styleUrls: ['./modifica-log-page.component.css']
})
export class ModificaLogPageComponent implements OnInit {

  control = false;
  typeLog = 'modifica';
  verifyForm: FormGroup;
  username?: string;
  account?: IUser;
  myError: MyError = new MyError();

  constructor(
    private readonly authService: AuthService,
    private readonly dashboardService: DashboardService,
    private readonly builder: FormBuilder,
  ) {

    this.verifyForm = builder.group({
      password: ['', [Validators.required, AuthValidator.validaPassword()]],
    })

  }

  onSubmit(): void {

    this.myError.resetError();

    if (this.username) {
      const logUser: ILogUser = {
        username: this.username,
        password: this.verifyForm.value.password
      };
      this.authService.loginUser(logUser).subscribe(res => {
        if (res.status) {
          this.myError.setError(res.status, res.message);
        } else {
          this.control = true;
        }
      })
    }

  }

  ngOnInit(): void {
    this.username = this.authService.getLoggedIn()!;
    this.dashboardService.getInfoUser(this.username).subscribe(res => {
      if (res) {
        this.account = res;
      }
    })
  }

}
