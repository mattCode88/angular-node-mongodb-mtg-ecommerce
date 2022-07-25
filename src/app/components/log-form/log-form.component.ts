import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import MyError from 'src/app/classes/MyError';
import ILogUser from 'src/app/interfaces/ILogUser';
import IUser from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import AuthValidator from 'src/app/validators/auth-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  @Input() typeLog?: string;
  @Input() account?: IUser;
  logForm: FormGroup;
  myError: MyError = new MyError();
  allCountries: string[] = [];

  constructor(
    private readonly builder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly http: HttpClient,
  ) {

    this.logForm = builder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, AuthValidator.validaMail()]],
      password: ['', [Validators.required, AuthValidator.validaPassword()]],
      telefono: ['', [Validators.required, AuthValidator.validaTelefono()]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cognome: ['', [Validators.required, Validators.minLength(3)]],
      via: ['', Validators.required],
      nCivico: ['', [Validators.required, AuthValidator.validaNCivico()]],
      cap: ['', [Validators.required, AuthValidator.validaCap()]],
      citta: ['', [Validators.required, Validators.minLength(3)]],
      nazione: ['', Validators.required],
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
            this.router.navigateByUrl('/dashboard/account');
          }
        })
      }
    }

    if (this.typeLog === 'register') {
      this.authService.registerUsers(this.logForm.value).subscribe(res => {
        if (res.message) {
          this.myError.setError(true, res.message)
        } else {
          Swal.fire({
            title: 'Utente creato!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.router.navigateByUrl('/auth/login')
        }
      })
    }

    if (this.typeLog === 'modifica') {
      this.authService.modificaUser(this.logForm.value, this.account?._id!).subscribe(res => {
        if (res.status) {
          this.myError.setError(true, res.message)
        }
        if (!res.status) {
          Swal.fire({
            title: res.message,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.router.navigateByUrl('/dashboard/account')
        }
      })
    }

  }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/subregion/europe`);
  }

  ngOnInit(): void {

    this.getAllCountries().subscribe(countries => {
      countries.forEach((countrie: any) => {
        this.allCountries.push(countrie.translations.ita.common)
      });
    })

    if (this.account) {
      this.logForm.controls['username'].setValue(this.account.username);
      this.logForm.controls['email'].setValue(this.account.email);
      this.logForm.controls['telefono'].setValue(this.account.telefono);
      this.logForm.controls['nome'].setValue(this.account.nome);
      this.logForm.controls['cognome'].setValue(this.account.cognome);
      this.logForm.controls['via'].setValue(this.account.via);
      this.logForm.controls['nCivico'].setValue(this.account.nCivico);
      this.logForm.controls['cap'].setValue(this.account.cap);
      this.logForm.controls['citta'].setValue(this.account.citta);
      this.logForm.controls['nazione'].setValue(this.account.nazione);
    }

  }

}
