import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fruit-management',
  templateUrl: './fruit-management.component.html',
  styleUrl: './fruit-management.component.scss'
})
export class FruitManagementComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}
  createFruit() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
