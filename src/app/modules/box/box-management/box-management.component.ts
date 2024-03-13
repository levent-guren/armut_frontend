import { Component, OnInit } from '@angular/core';
import { Box } from '../../../shared/model/box';
import { BoxService } from '../../../shared/service/box.service';
import { MatDialog } from '@angular/material/dialog';
import { BoxCreateComponent } from '../box-create/box-create.component';
import { ToastrService } from 'ngx-toastr';
import { YesNoDialogComponent } from '../../../shared/components/yes-no-dialog/yes-no-dialog.component';
import { BoxEditComponent } from '../box-edit/box-edit.component';

@Component({
  selector: 'app-box-management',
  templateUrl: './box-management.component.html',
  styleUrl: './box-management.component.scss'
})
export class BoxManagementComponent implements OnInit{
  boxes: Box[]  = [];
  selectedBox: Box | null = null;

  constructor(
    private boxService: BoxService,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {}
  ngOnInit(): void {
    this.refreshBoxes();
  }
  refreshBoxes() {
    this.boxService.getAllBoxes().subscribe({
      next: (data) => {
        this.boxes = data;
      }
    });
  }
  createBox() {
    let dialog =  this.dialog.open(BoxCreateComponent, {
      width: '500px',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms',
      disableClose: true,
    });
    dialog.afterClosed().subscribe({
      next: (data) => {
        if (data) {
          // box creating...
          this.boxService.createBoxes(data.capacity, data.count).subscribe({
            next: (res) => {
              this.toastr.info(res.message + ' boxes created');
              this.refreshBoxes();
            }
          });
        }
      }
    });
  }
  selectBox(box: Box) {
    if (box == this.selectedBox) {
      this.selectedBox = null;
    } else {
      this.selectedBox = box;
    }
  }
  editBox() {
    let dialog =  this.dialog.open(BoxEditComponent, {
      width: '300px',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms',
    });
    dialog.afterClosed().subscribe({
      next: (data) => {
        if (data) {
          this.boxService.updateBox(this.selectedBox!.id, data.capacity).subscribe({
            next: (data) => {
              this.toastr.info('Box updated');
              this.refreshBoxes();
            }
          });
        }
      }
    });
  }
  deleteBox() {
    let dialog =  this.dialog.open(YesNoDialogComponent, {
      width: '300px',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms',
    });
    dialog.afterClosed().subscribe({
      next: (data) => {
        if (data?.result === 'yes') {
          this._deleteBox();
        }
      }
    });
    dialog.componentInstance.question = 'Are you sure for delete this box?';

  }
  _deleteBox() {
    if (this.selectedBox) {
      this.boxService.deleteBox(this.selectedBox.id).subscribe({
        next: (data) => {
          this.toastr.info('Box deleted');
          this.refreshBoxes();
        }
      });
    }
  }

}
