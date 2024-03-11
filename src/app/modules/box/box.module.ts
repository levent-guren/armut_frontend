import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxRoutingModule } from './box-routing.module';
import { BoxManagementComponent } from './box-management/box-management.component';


@NgModule({
  declarations: [
    BoxManagementComponent
  ],
  imports: [
    CommonModule,
    BoxRoutingModule
  ]
})
export class BoxModule { }
