import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitManagementComponent } from './fruit-management.component';

describe('FruitManagementComponent', () => {
  let component: FruitManagementComponent;
  let fixture: ComponentFixture<FruitManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
