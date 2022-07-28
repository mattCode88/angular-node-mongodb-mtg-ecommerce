import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from 'src/app/views/account-page/account-page.component';
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { VendiCartePageComponent } from 'src/app/views/vendi-carte-page/vendi-carte-page.component';
import { MieCartePageComponent } from 'src/app/views/mie-carte-page/mie-carte-page.component';

const routes: Routes = [
  { path: 'account', component: AccountPageComponent, canActivate: [LoggedInGuard] },
  { path: 'vendi-carte', component: VendiCartePageComponent, canActivate: [LoggedInGuard] },
  { path: 'mie-carte', component: MieCartePageComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
