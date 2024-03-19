import { Component } from '@angular/core';
import { FruitService } from '../../../shared/service/fruit.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Fruit } from '../../../shared/model/fruit';

@Component({
  selector: 'app-fruit-sale',
  templateUrl: './fruit-sale.component.html',
  styleUrl: './fruit-sale.component.scss'
})
export class FruitSaleComponent {
  fruits: Fruit[] = [];
  selectedFruit: Fruit | null = null;
  totalAmount = 0;
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
    this.fruitService.getFruitCount(fruit.id).subscribe({
      next: (data:any) => {
        this.totalAmount = data.count;
      }
    });
  }
  submit() {
    if (this.selectedFruit) {
      let count = this.form.get('count')!.value;
      this.fruitService.sale(this.selectedFruit.id, count).subscribe({
        next: (result) => {
          this.toastr.info('Fruit sold');
          this.router.navigate(['/menu']);
        },
        error: (err)=> {
          this.toastr.error(err.error.mesaj);
        }
      });
    }
  }
}
