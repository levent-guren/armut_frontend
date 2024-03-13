import { Component, OnInit } from '@angular/core';
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
export class FruitCreateComponent implements OnInit {
  createForm = this.fb.nonNullable.group({
    name : '',
    minimum: 0,
  });
  selectedImage = '';
  fruitId = 0;

  constructor(
    private fb: FormBuilder,
    private fruitService: FruitService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if (this.fruitService.editingFruit != null) {
      // edit mode
      this.fruitId = this.fruitService.editingFruit.id;
      this.createForm.setValue(
        { name: this.fruitService.editingFruit.name, 
          minimum: this.fruitService.editingFruit.minimum, 
        });
      this.selectedImage = this.fruitService.editingFruit.image;
      this.fruitService.editingFruit = null;
    } else {
      // create mode
    }
  }
  
  submit() {
    let name = this.createForm.get('name')!.value;
    let minimum = this.createForm.get('minimum')!.value;
    this.fruitService.createFruit(new Fruit(this.fruitId, name, minimum, this.selectedImage)).subscribe({
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
