import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoxService } from '../../../shared/service/box.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-box-create',
  templateUrl: './box-create.component.html',
  styleUrl: './box-create.component.scss'
})
export class BoxCreateComponent {
  form = this.fb.nonNullable.group({
    capacity: 0,
    count: 1,
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BoxCreateComponent>,
    private boxService: BoxService,
  ) {}

  close() {
    this.dialogRef.close();
  }
  submit() {
    const capacity = this.form.get('capacity')!.value;
    const count = this.form.get('count')!.value;
    this.dialogRef.close({capacity, count});
  }
}
