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


@NgModule({
  declarations: [
    AccountPageComponent,
    VendiCartePageComponent,
    MieCartePageComponent,
    CarrelloPageComponent,
    OrderPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class DashboardModule { }
