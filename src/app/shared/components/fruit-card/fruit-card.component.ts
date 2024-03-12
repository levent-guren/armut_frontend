import { Component, Input } from '@angular/core';
import { Fruit } from '../../model/fruit';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrl: './fruit-card.component.scss'
})
export class FruitCardComponent {
  @Input() fruit: Fruit = new Fruit('', 0, '');
  constructor(
    private dialog: MatDialog
  ) {}

  deleteFruitButtonClicked() {
    let dialog =  this.dialog.open(YesNoDialogComponent, {
      width: '300px',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms',
    });
    dialog.afterClosed().subscribe({
      next: (data) => {
        if (data?.result === 'yes') {
          this.deleteFruit();
        }
      }
    });
  }
  deleteFruit() {
    console.log('Fruit silinecek');
  }
}
