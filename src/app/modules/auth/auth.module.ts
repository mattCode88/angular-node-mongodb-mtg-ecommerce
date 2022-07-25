import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogPageComponent } from '../../views/log-page/log-page.component';
import { LogFormComponent } from '../../components/log-form/log-form.component';
import { RegisterPageComponent } from '../../views/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModificaLogPageComponent } from '../../views/modifica-log-page/modifica-log-page.component';


@NgModule({
  declarations: [
    LogPageComponent,
    LogFormComponent,
    RegisterPageComponent,
    ModificaLogPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
