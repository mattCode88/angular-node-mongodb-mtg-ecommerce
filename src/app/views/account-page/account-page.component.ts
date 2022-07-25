import { Component, OnInit } from '@angular/core';
import IUser from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  username: string | null = '';
  account?: IUser;

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.username = this.authService.getLoggedIn();
    if (this.username) {
      this.dashboardService.getInfoUser(this.username).subscribe(res => {

        if (res) {
          this.account = res;
        }

      })
    }
  }

}
