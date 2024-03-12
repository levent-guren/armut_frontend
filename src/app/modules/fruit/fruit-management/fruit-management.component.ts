import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitService } from '../../../shared/service/fruit.service';
import { Fruit } from '../../../shared/model/fruit';

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
  ){}

  ngOnInit(): void {
    this.fruitService.getAllFruits().subscribe({
      next: (result) => {
        this.fruits = result;
      }
    });
  }
  createFruit() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
