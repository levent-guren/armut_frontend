import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitSaleComponent } from './fruit-sale.component';

describe('FruitSaleComponent', () => {
  let component: FruitSaleComponent;
  let fixture: ComponentFixture<FruitSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
