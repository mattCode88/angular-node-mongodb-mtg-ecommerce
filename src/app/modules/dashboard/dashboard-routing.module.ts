import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from 'src/app/views/account-page/account-page.component';
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { VendiCartePageComponent } from 'src/app/views/vendi-carte-page/vendi-carte-page.component';
import { MieCartePageComponent } from 'src/app/views/mie-carte-page/mie-carte-page.component';
import { CarrelloPageComponent } from 'src/app/views/carrello-page/carrello-page.component';
import { OrderPageComponent } from 'src/app/views/order-page/order-page.component';
import { AcquistiPendingPageComponent } from 'src/app/views/acquisti-pending-page/acquisti-pending-page.component';

const routes: Routes = [
  { path: 'account', component: AccountPageComponent, canActivate: [LoggedInGuard] },
  { path: 'vendi-carte', component: VendiCartePageComponent, canActivate: [LoggedInGuard] },
  { path: 'mie-carte', component: MieCartePageComponent, canActivate: [LoggedInGuard] },
  { path: 'carrello', component: CarrelloPageComponent, canActivate: [LoggedInGuard] },
  { path: 'ordine', component: OrderPageComponent, canActivate: [LoggedInGuard] },
  { path: 'acquisti/pending', component: AcquistiPendingPageComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
