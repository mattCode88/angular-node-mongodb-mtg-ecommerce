import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { HomePageComponent } from '../../views/home-page/home-page.component';
import { DashboardPanelComponent } from '../../components/shared/dashboard-panel/dashboard-panel.component';
import { ModalComponent } from '../../components/shared/modal/modal.component';
import { CardFormComponent } from '../../components/shared/card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsSearchComponent } from 'src/app/components/shared/cards-search/cards-search.component';
import { CardsDetailComponent } from 'src/app/components/shared/cards-detail/cards-detail.component';
import { CardsListComponent } from 'src/app/components/shared/cards-list/cards-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    DashboardPanelComponent,
    ModalComponent,
    CardFormComponent,
    CardsSearchComponent,
    CardsDetailComponent,
    CardsListComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    HomePageComponent,
    DashboardPanelComponent,
    ModalComponent,
    CardFormComponent,
    CardsSearchComponent,
    CardsDetailComponent,
    CardsListComponent,
  ]
})
export class SharedModule { }
