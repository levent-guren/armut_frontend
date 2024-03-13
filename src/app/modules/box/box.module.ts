import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxRoutingModule } from './box-routing.module';
import { BoxManagementComponent } from './box-management/box-management.component';
import { BoxCreateComponent } from './box-create/box-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxEditComponent } from './box-edit/box-edit.component';


@NgModule({
  declarations: [
    BoxManagementComponent,
    BoxCreateComponent,
    BoxEditComponent
  ],
  imports: [
    CommonModule,
    BoxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BoxModule { }
