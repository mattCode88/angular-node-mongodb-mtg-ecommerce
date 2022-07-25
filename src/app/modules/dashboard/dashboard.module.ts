import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountPageComponent } from 'src/app/views/account-page/account-page.component';
import { VendiCartePageComponent } from '../../views/vendi-carte-page/vendi-carte-page.component';
import { CardsListComponent } from '../../components/cards-list/cards-list.component';
import { CardsSearchComponent } from '../../components/cards-search/cards-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsDetailComponent } from '../../components/cards-detail/cards-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CardFormComponent } from 'src/app/components/shared/card-form/card-form.component';
import { MieCartePageComponent } from '../../views/mie-carte-page/mie-carte-page.component';


@NgModule({
  declarations: [
    AccountPageComponent,
    VendiCartePageComponent,
    CardsListComponent,
    CardsSearchComponent,
    CardsDetailComponent,
    MieCartePageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class DashboardModule { }
