import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { FruitCreateComponent } from './fruit-create/fruit-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FruitCreateComponent
  ],
  imports: [
    CommonModule,
    FruitRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FruitModule { }
