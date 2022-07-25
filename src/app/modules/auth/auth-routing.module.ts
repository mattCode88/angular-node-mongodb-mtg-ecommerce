import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { LogPageComponent } from 'src/app/views/log-page/log-page.component';
import { ModificaLogPageComponent } from 'src/app/views/modifica-log-page/modifica-log-page.component';
import { RegisterPageComponent } from 'src/app/views/register-page/register-page.component';

const routes: Routes = [
  { path: 'login', component: LogPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'modifica-account', component: ModificaLogPageComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
