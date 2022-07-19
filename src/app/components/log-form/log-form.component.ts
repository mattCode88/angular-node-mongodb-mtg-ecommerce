import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import MyError from 'src/app/classes/MyError';
import ILogUser from 'src/app/interfaces/ILogUser';
import { AuthService } from 'src/app/services/auth.service';
import AuthValidator from 'src/app/validators/auth-validator';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  @Input() typeLog?: string;
  logForm: FormGroup;
  myError: MyError = new MyError();

  constructor(
    private readonly builder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {

    this.logForm = builder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, AuthValidator.validaMail()]],
      password: ['', [Validators.required, AuthValidator.validaPassword()]],
    })

  }

  onSubmit(): void {

    this.myError.resetError();

    if (this.typeLog === 'login') {
      if (this.logForm.value.username.length < 3 || this.logForm.value.password.length < 8) {
        this.myError.setError(true, 'Inserire dati corretti.');
      } else {
        const logUser: ILogUser = {
          username: this.logForm.value.username,
          password: this.logForm.value.password
        };
        this.authService.loginUser(logUser).subscribe(res => {
          if (res.status) {
            this.myError.setError(res.status, res.message);
          } else {
            this.authService.login(logUser.username);
            this.router.navigateByUrl('/home');
          }
        })
      }
    }

    if (this.typeLog === 'register') {
      this.authService.registerUsers(this.logForm.value).subscribe(res => {
        if (res.message) {
          this.myError.setError(true, res.message)
        } else {
          this.router.navigateByUrl('/auth/login')
        }
      })
    }

  }

  ngOnInit(): void { }

}
