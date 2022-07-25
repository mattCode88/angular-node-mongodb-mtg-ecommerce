import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { HomePageComponent } from '../../views/home-page/home-page.component';
import { DashboardPanelComponent } from '../../components/shared/dashboard-panel/dashboard-panel.component';
import { ModalComponent } from '../../components/shared/modal/modal.component';
import { CardFormComponent } from '../../components/shared/card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    DashboardPanelComponent,
    ModalComponent,
    CardFormComponent,
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
    CardFormComponent
  ]
})
export class SharedModule { }
