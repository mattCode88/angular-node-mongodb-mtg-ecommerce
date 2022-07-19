import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { HomePageComponent } from '../../views/home-page/home-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
