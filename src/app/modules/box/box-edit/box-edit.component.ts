import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoxService } from '../../../shared/service/box.service';

@Component({
  selector: 'app-box-edit',
  templateUrl: './box-edit.component.html',
  styleUrl: './box-edit.component.scss'
})
export class BoxEditComponent {
  form = this.fb.nonNullable.group({
    capacity: 0,
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BoxEditComponent>,
  ) {}

  close() {
    this.dialogRef.close();
  }
  submit() {
    const capacity = this.form.get('capacity')!.value;
    this.dialogRef.close({capacity});
  }
}
