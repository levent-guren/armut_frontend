import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fruit-create',
  templateUrl: './fruit-create.component.html',
  styleUrl: './fruit-create.component.scss'
})
export class FruitCreateComponent {
  createForm = this.fb.group({
    name : '',
    minimum: 0,
    img: '',
  });

  constructor(
    private fb: FormBuilder,
  ) {

  }
  submit() {
    
  }
}
