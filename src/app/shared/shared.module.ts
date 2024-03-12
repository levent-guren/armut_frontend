import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitCardComponent } from './components/fruit-card/fruit-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    FruitCardComponent,
    YesNoDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    FruitCardComponent
  ],
})
export class SharedModule { }
