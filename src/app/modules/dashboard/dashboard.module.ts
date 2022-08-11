import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountPageComponent } from 'src/app/views/account-page/account-page.component';
import { VendiCartePageComponent } from '../../views/vendi-carte-page/vendi-carte-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MieCartePageComponent } from '../../views/mie-carte-page/mie-carte-page.component';
import { CarrelloPageComponent } from '../../views/carrello-page/carrello-page.component';
import { OrderPageComponent } from '../../views/order-page/order-page.component';
import { NgxBraintreeModule } from 'ngx-braintree';
import { HttpClientModule } from '@angular/common/http';
import { AcquistiPendingPageComponent } from '../../views/acquisti-pending-page/acquisti-pending-page.component';
import { CarteVendutePageComponent } from '../../views/carte-vendute-page/carte-vendute-page.component';


@NgModule({
  declarations: [
    AccountPageComponent,
    VendiCartePageComponent,
    MieCartePageComponent,
    CarrelloPageComponent,
    OrderPageComponent,
    AcquistiPendingPageComponent,
    CarteVendutePageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxBraintreeModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
