import { Component } from '@angular/core';
import { IMAGES } from '../../../shared/model/constants';
import { Fruit } from '../../../shared/model/fruit';
import { FruitService } from '../../../shared/service/fruit.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit-accept',
  templateUrl: './fruit-accept.component.html',
  styleUrl: './fruit-accept.component.scss'
})
export class FruitAcceptComponent {
  fruits: Fruit[] = [];
  selectedFruit: Fruit | null = null;
  form=this.fb.nonNullable.group({
    count: 0,
  });

  constructor(
    private fruitService: FruitService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.refreshFruits();
  }
  refreshFruits() {
    this.fruitService.getAllFruits().subscribe({
      next: (result) => {
        this.fruits = result;
      }
    });
  }
  fruitSelect(fruit: Fruit) {
    this.selectedFruit = fruit;
  }
  submit() {
    if (this.selectedFruit) {
      let count = this.form.get('count')!.value;
      this.fruitService.accept(this.selectedFruit.id, count).subscribe({
        next: (result) => {
          this.toastr.info('Fruit accepted');
          this.router.navigate(['/menu']);
        },
        error: (err)=> {
          this.toastr.error(err.error.mesaj);
        }
      });
    }
  }
}
