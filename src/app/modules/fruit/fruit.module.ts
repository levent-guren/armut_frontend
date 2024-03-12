import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { FruitCreateComponent } from './fruit-create/fruit-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FruitManagementComponent } from './fruit-management/fruit-management.component';


@NgModule({
  declarations: [
    FruitCreateComponent,
    FruitManagementComponent,
  ],
  imports: [
    CommonModule,
    FruitRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FruitModule { }
