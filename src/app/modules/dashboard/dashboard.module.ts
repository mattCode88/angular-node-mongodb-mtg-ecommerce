import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from '../../views/dashboard-page/dashboard-page.component';
import { DashboardPanelComponent } from '../../components/dashboard-panel/dashboard-panel.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardPanelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
