import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string | null = '';
  selezioneEsterna: boolean = false;

  constructor(
    public readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  disconnettiUser(): void {
    this.username = this.authService.getLoggedIn()
    this.authService.logoutUser(this.username!).subscribe(res => {
      if (res) {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
      }
    });
  }

  changeSelezione(): void {
    this.selezioneEsterna = true;
  }

  cambiaSelezioneEsterna(bool: boolean): void {
    this.selezioneEsterna = false;
  }

  ngOnInit(): void {
  }

}
