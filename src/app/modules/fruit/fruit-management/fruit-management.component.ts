import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitService } from '../../../shared/service/fruit.service';
import { Fruit } from '../../../shared/model/fruit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fruit-management',
  templateUrl: './fruit-management.component.html',
  styleUrl: './fruit-management.component.scss'
})
export class FruitManagementComponent implements OnInit{
  fruits: Fruit[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fruitService: FruitService,
    private toastr: ToastrService,
  ){}

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
  createFruit() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
  deleteFruit(fruit: Fruit) {
    this.fruitService.deleteFruit(fruit.id).subscribe({
      next: (data) => {
        this.toastr.info('Fruit deleted');
        this.refreshFruits();
      }
    });
  }
  editFruit(fruit: Fruit) {
    this.fruitService.editingFruit = fruit;
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
