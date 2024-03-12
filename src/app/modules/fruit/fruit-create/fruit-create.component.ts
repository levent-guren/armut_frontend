import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IMAGES } from '../../../shared/model/constants';
import { FruitService } from '../../../shared/service/fruit.service';
import { Fruit } from '../../../shared/model/fruit';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fruit-create',
  templateUrl: './fruit-create.component.html',
  styleUrl: './fruit-create.component.scss'
})
export class FruitCreateComponent {
  createForm = this.fb.nonNullable.group({
    name : '',
    minimum: 0,
  });
  selectedImage = '';

  constructor(
    private fb: FormBuilder,
    private fruitService: FruitService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  
  submit() {
    let name = this.createForm.get('name')!.value;
    let minimum = this.createForm.get('minimum')!.value;
    this.fruitService.createFruit(new Fruit(name, minimum, this.selectedImage)).subscribe({
      next: (result) => {
        this.toastr.info('Fruit created.');
        this.router.navigate(['..'], { relativeTo: this.route });
      }
    });
  }
  imageSelect(image: string) {
    this.selectedImage = image;
  }

  getFruits() {
    return IMAGES;
  }
}
