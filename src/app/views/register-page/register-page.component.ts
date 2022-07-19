import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  typeLog = 'register';

  constructor(
    private readonly authServices: AuthService,
    private readonly router: Router
  ) {
    if (this.authServices.isLogged()) this.router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
